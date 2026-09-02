"use client";

import PageHeader from "@/components/PageHeader";
import { Users, Clock, Award, Download, BookOpen, Brain, Leaf } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function EgitimPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader
        title={t("education.title")}
        subtitle={t("education.subtitle")}
      />

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-sage-600" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-sage-700">
                {t("education.about.title")}
              </h2>
            </div>
            <div className="space-y-6 text-sage-600 leading-relaxed text-lg">
              <p>
                {t("education.about.p1")}
              </p>
              <p>
                {t("education.about.p2")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-7 rounded-2xl bg-white/70 border border-sage-100">
              <div className="w-11 h-11 rounded-xl bg-sage-100 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-sage-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-sage-700">{t("education.target.title")}</h3>
              <p className="text-sm text-sage-500 leading-relaxed">
                {t("education.target.desc")}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/70 border border-sage-100">
              <div className="w-11 h-11 rounded-xl bg-lavender-100 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-lavender-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-sage-700">{t("education.duration.title")}</h3>
              <p className="text-sm text-sage-500 leading-relaxed">
                {t("education.duration.desc")}
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white/70 border border-sage-100">
              <div className="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-teal-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-sage-700">{t("education.certificate.title")}</h3>
              <p className="text-sm text-sage-500 leading-relaxed">
                {t("education.certificate.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-cream-50 to-sage-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 text-sage-600 text-sm font-medium mb-5">
              <BookOpen className="w-4 h-4" />
              {t("education.booklet.badge")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-sage-700 mb-4 text-balance">
              {t("education.booklet.title")}
            </h2>
            <p className="text-sage-500 leading-relaxed text-lg mb-8 text-balance">
              {t("education.booklet.desc")}
            </p>
            <a
              href="/BPU-bilgi-kitapcigi.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sage-600 text-cream-50 font-medium hover:bg-sage-700 transition-all shadow-sm hover:shadow-md"
            >
              <Download className="w-4 h-4" />
              {t("education.booklet.download")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
