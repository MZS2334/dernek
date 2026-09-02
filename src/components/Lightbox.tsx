"use client";

import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { GaleriItem } from "@/data/galeri";
import { useLanguage } from "@/lib/i18n";

interface LightboxProps {
  items: GaleriItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  const { t, tt } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  const handlePrev = useCallback(() => {
    setIsLoading(true);
    onNavigate(index === 0 ? items.length - 1 : index - 1);
  }, [index, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    setIsLoading(true);
    onNavigate(index === items.length - 1 ? 0 : index + 1);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, handlePrev, handleNext]);

  const item = items[index];
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-sage-900/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Kapat */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-cream-50/10 hover:bg-cream-50/20 flex items-center justify-center transition-all"
        aria-label={t("lightbox.close")}
      >
        <X className="w-6 h-6 text-cream-50" />
      </button>

      {/* Sol ok */}
      {items.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-4 md:left-6 z-10 w-12 h-12 rounded-full bg-cream-50/10 hover:bg-cream-50/20 flex items-center justify-center transition-all"
          aria-label={t("lightbox.prev")}
        >
          <ChevronLeft className="w-7 h-7 text-cream-50" />
        </button>
      )}

      {/* Görsel */}
      <div
        className="relative w-full max-w-5xl h-[70vh] mx-auto px-16"
        onClick={(e) => e.stopPropagation()}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-cream-50/30 border-t-cream-50 rounded-full animate-spin" />
          </div>
        )}
        <Image
          src={item.image}
          alt={tt(item.title)}
          fill
          sizes="100vw"
          onLoad={() => setIsLoading(false)}
          className={`object-contain rounded-xl transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        />
        <div className="mt-4 text-center">
          <p className="text-cream-50 font-medium">{tt(item.title)}</p>
          <p className="text-cream-200/60 text-sm mt-1">
            {tt(item.category)} · {item.date}
          </p>
        </div>
      </div>

      {/* Sağ ok */}
      {items.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 md:right-6 z-10 w-12 h-12 rounded-full bg-cream-50/10 hover:bg-cream-50/20 flex items-center justify-center transition-all"
          aria-label={t("lightbox.next")}
        >
          <ChevronRight className="w-7 h-7 text-cream-50" />
        </button>
      )}

      {/* Sayaç */}
      {items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-cream-50/10 text-cream-50 text-sm">
          {index + 1} / {items.length}
        </div>
      )}
    </div>
  );
}
