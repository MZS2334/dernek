"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Target, Eye, Users, Heart, Brain, Leaf } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function HakkimizdaPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-sage-600" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-sage-700">
                {t("about.philosophy.title")}
              </h2>
            </div>

            <div className="space-y-6 text-sage-600 leading-relaxed text-lg">
              <p>
                {t("about.philosophy.p1")}
              </p>
              <p>
                {t("about.philosophy.p2")}
              </p>
              <p>
                {t("about.philosophy.p3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-cream-50 to-sage-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white/70 border border-sage-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center">
                  <Target className="w-5 h-5 text-lavender-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-sage-700">{t("about.mission.title")}</h3>
              </div>
              <div className="space-y-4 text-sage-600 leading-relaxed">
                <p>
                  {t("about.mission.p1")}
                </p>
                <p>
                  {t("about.mission.p2")}
                </p>
                <p>
                  {t("about.mission.p3")}
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/70 border border-sage-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-teal-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-sage-700">{t("about.vision.title")}</h3>
              </div>
              <div className="space-y-4 text-sage-600 leading-relaxed">
                <p>
                  {t("about.vision.p1")}
                </p>
                <p>
                  {t("about.vision.p2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-sage-600" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-sage-700">
                {t("about.org.title")}
              </h2>
            </div>
            <div className="space-y-4 text-sage-600 leading-relaxed text-lg">
              <p>
                {t("about.org.p1")}
              </p>
              <p>
                {t("about.org.p2")}
              </p>
              <p>
                {t("about.org.p3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-cream-50 to-lavender-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavender-100 text-lavender-600 text-sm font-medium mb-4">
                <Brain className="w-4 h-4" />
                {t("about.founder.badge")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-sage-700 mb-2">
                {t("about.founder.title")}
              </h2>
              <p className="text-sage-500 mb-8">{t("about.founder.role")}</p>

              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sage-200 to-lavender-200 blur-xl opacity-40" />
                <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/gulcin1.webp"
                    alt="Uzm. Klinik Psikolog Gülçin Sanlı"
                    fill
                    sizes="(max-width: 768px) 176px, 208px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-2xl bg-white/70 border border-lavender-100">
              <div className="space-y-5 text-sage-600 leading-relaxed">
                <p>
                  {t("about.founder.p1")}
                </p>
                <p>
                  {t("about.founder.p2")}
                </p>
                <p>
                  {t("about.founder.p3")}
                </p>
                <p>
                  {t("about.founder.p4")}
                </p>
                <p>
                  {t("about.founder.p5")}
                </p>
                <p>
                  {t("about.founder.p6")}
                </p>
                <p>
                  {t("about.founder.p7")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
