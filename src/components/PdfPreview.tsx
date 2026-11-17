"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useLanguage } from "@/lib/i18n";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const A4_ASPECT = 297 / 210;
const CONTAINER_PAD = 16;
const SCROLLBAR_WIDTH = 14;

interface PdfPreviewProps {
  file: string;
  height?: number;
}

function LazyPage({
  pageNumber,
  width,
  placeholderHeight,
  onPageLoad,
}: {
  pageNumber: number;
  width: number;
  placeholderHeight: number;
  onPageLoad?: (page: { originalWidth: number; originalHeight: number }) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => setVisible(entries[0].isIntersecting),
      { rootMargin: "400px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex justify-center">
      {visible ? (
        <Page
          pageNumber={pageNumber}
          width={width}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="rounded-lg overflow-hidden border border-sage-100 shadow-sm bg-white"
          onLoadSuccess={onPageLoad}
          loading={
            <div
              className="rounded-lg bg-cream-50 animate-pulse"
              style={{ width, height: placeholderHeight }}
            />
          }
        />
      ) : (
        <div
          className="rounded-lg bg-cream-50 animate-pulse"
          style={{ width, height: placeholderHeight }}
        />
      )}
    </div>
  );
}

const scrollbarClasses =
  "[scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-sage-300/70 hover:[&::-webkit-scrollbar-thumb]:bg-sage-400";

export default function PdfPreview({ file, height = 560 }: PdfPreviewProps) {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [aspect, setAspect] = useState(A4_ASPECT);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const renderWidth = Math.max(
    0,
    Math.min(
      containerWidth - CONTAINER_PAD * 2 - SCROLLBAR_WIDTH,
      Math.round(height * 0.75)
    )
  );
  const placeholderHeight = Math.round(renderWidth * aspect);

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-x-hidden overflow-y-auto overscroll-contain rounded-xl border border-sage-100 bg-sage-50/50 max-h-[75svh] ${scrollbarClasses}`}
      style={{ height }}
    >
      {hasError ? (
        <div className="h-full flex items-center justify-center text-sm text-sage-400">
          {t("pdf.previewError")}
        </div>
      ) : (
        <Document
          file={file}
          onLoadSuccess={({ numPages: total }) => setNumPages(total)}
          onLoadError={() => setHasError(true)}
          loading={
            <div className="h-full flex items-center justify-center text-sm text-sage-400 animate-pulse">
              {t("pdf.previewLoading")}
            </div>
          }
        >
          {renderWidth > 0 && numPages > 0 && (
            <div className="flex flex-col items-center gap-3 py-3">
              {Array.from({ length: numPages }, (_, i) => (
                <LazyPage
                  key={i + 1}
                  pageNumber={i + 1}
                  width={renderWidth}
                  placeholderHeight={placeholderHeight}
                  onPageLoad={
                    i === 0
                      ? (page) =>
                          setAspect(page.originalHeight / page.originalWidth)
                      : undefined
                  }
                />
              ))}
            </div>
          )}
        </Document>
      )}
    </div>
  );
}
