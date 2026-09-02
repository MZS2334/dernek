"use client";

import PageHeader from "@/components/PageHeader";
import RegistrationForm from "@/components/RegistrationForm";
import { Brain, Heart, Leaf, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import sempozyumData from "@/data/sempozyum";

const iconMap: Record<string, typeof Brain> = {
  Brain,
  Heart,
  Leaf,
};

export default function KaydolPage() {
  const { t, tt } = useLanguage();

  const pricingRows = [
    { group: t("kaydolPage.pricingGeneral"), standard: "2500TL", early: "2250TL" },
    { group: t("kaydolPage.pricingFreya"), standard: "2000TL", early: "1900TL" },
    { group: t("kaydolPage.pricingCv"), standard: "2125TL", early: "2000TL" },
  ];

  return (
    <>
      <PageHeader
        title={t("kaydolPage.title")}
        subtitle={t("kaydolPage.subtitle")}
      />

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          {/* Sempozyum Kapsamı */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 text-sage-600 text-sm font-medium mb-5">
                <Sparkles className="w-4 h-4" />
                {t("symposium.focusBadge")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-sage-700 mb-4">
                {t("symposium.scopeTitle")}
              </h2>
              <p className="text-sage-500">
                {t("symposium.scopeDesc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sempozyumData.topics.map((topic, idx) => {
                const Icon = iconMap[topic.icon];
                return (
                  <div
                    key={idx}
                    className="group p-8 rounded-2xl bg-white/70 border border-sage-100 hover:border-sage-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sage-100 to-lavender-100 flex items-center justify-center mb-5 group-hover:from-sage-200 group-hover:to-lavender-200 transition-all">
                      <Icon
                        className="w-7 h-7 text-sage-600"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-sage-700 mb-3">
                      {tt(topic.title)}
                    </h3>
                    <p className="text-sm text-sage-500 leading-relaxed">
                      {tt(topic.description)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sage-600 leading-relaxed text-lg">
              {t("kaydolPage.description")}
            </p>
          </div>

          {/* Pricing Table */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-serif font-bold text-sage-700">
                {t("kaydolPage.pricingTitle")}
              </h2>
              <p className="text-sage-400 text-sm mt-2">
                {t("kaydolPage.pricingSubtitle")}
              </p>
            </div>

            {/* Desktop table */}
            <div className="hidden sm:block overflow-hidden rounded-2xl border border-sage-100 bg-white/60">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-sage-600 text-cream-50">
                    <th className="text-left px-5 py-4 font-semibold">
                      {t("kaydolPage.pricingGroup")}
                    </th>
                    <th className="text-center px-5 py-4 font-semibold whitespace-nowrap">
                      {t("kaydolPage.pricingStandard")}
                    </th>
                    <th className="text-center px-5 py-4 font-semibold whitespace-nowrap">
                      {t("kaydolPage.pricingEarly")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-cream-50/50" : "bg-white/40"}
                    >
                      <td className="px-5 py-4 text-sage-700 font-medium">{row.group}</td>
                      <td className="px-5 py-4 text-center text-sage-600 whitespace-nowrap">{row.standard}</td>
                      <td className="px-5 py-4 text-center text-sage-600 font-semibold whitespace-nowrap">{row.early}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="sm:hidden space-y-3">
              {pricingRows.map((row, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-sage-100 bg-white/60 p-4"
                >
                  <p className="text-sage-700 font-medium text-sm mb-3">{row.group}</p>
                  <div className="flex gap-3">
                    <div className="flex-1 rounded-lg bg-cream-50 p-3 text-center">
                      <p className="text-xs text-sage-400 mb-1">{t("kaydolPage.pricingStandard")}</p>
                      <p className="text-sage-600 font-semibold whitespace-nowrap">{row.standard}</p>
                    </div>
                    <div className="flex-1 rounded-lg bg-sage-50 p-3 text-center">
                      <p className="text-xs text-sage-400 mb-1">{t("kaydolPage.pricingEarly")}</p>
                      <p className="text-sage-600 font-semibold whitespace-nowrap">{row.early}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-xs text-sage-400 leading-relaxed">
                {t("kaydolPage.pricingNote")}
              </p>
              <p className="text-sm font-semibold text-sage-600">
                {t("kaydolPage.pricingEarlyDate")}
              </p>
            </div>
          </div>

          {/* IBAN Info */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="rounded-2xl bg-sage-50 border border-sage-100 p-6 text-center">
              <h3 className="text-lg font-serif font-bold text-sage-700 mb-3">
                {t("kaydolPage.ibanTitle")}
              </h3>
              <p className="text-sage-700 font-mono text-base font-semibold tracking-wide mb-1">
                {t("kaydolPage.iban")}
              </p>
              <p className="text-sage-600 text-sm">
                {t("kaydolPage.ibanName")}
              </p>
            </div>
          </div>

          {/* Registration Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-sage-700 text-center mb-6">
              {t("kaydolPage.formTitle")}
            </h2>
            <RegistrationForm />
          </div>
        </div>
      </section>
    </>
  );
}
