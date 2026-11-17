"use client";

import dynamic from "next/dynamic";
import PageHeader from "@/components/PageHeader";
import { BookOpen, Download } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const PdfPreview = dynamic(() => import("@/components/PdfPreview"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[640px] rounded-xl bg-cream-50 animate-pulse" />
  ),
});

export default function DergiPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        title={t("dergiPage.title")}
        subtitle={t("dergiPage.subtitle")}
      />

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-sage-100 bg-white/70 shadow-sm overflow-hidden">
              <div className="p-6 md:p-8 border-b border-sage-100 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 text-sage-600 text-sm font-medium mb-4">
                  <BookOpen className="w-4 h-4" />
                  {t("dergiPage.issueBadge")}
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-700 mb-3">
                  {t("dergiPage.issueTitle")}
                </h2>
                <p className="text-sage-500 max-w-xl mx-auto mb-6">
                  {t("dergiPage.issueDesc")}
                </p>
                <a
                  href="/beslenme-psikolojisi-dergisi-1.pdf"
                  download="Beslenme-Psikolojisi-Dergisi-1.pdf"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-sage-600 text-cream-50 font-medium hover:bg-sage-700 transition-all duration-200 hover:shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  {t("dergiPage.downloadButton")}
                </a>
              </div>
              <div className="bg-white p-6 md:p-10">
                <PdfPreview
                  file="/beslenme-psikolojisi-dergisi-1.pdf"
                  height={640}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
