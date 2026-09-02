"use client";

import { useState, useEffect, useMemo } from "react";
import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/Pagination";
import {
  Calendar,
  GraduationCap,
  Mic,
  Users,
  Sparkles,
  ArrowRight,
  Bell,
  Clock,
  MapPin,
  X,
} from "lucide-react";
import Link from "next/link";
import etkinlikler, { Etkinlik } from "@/data/etkinlikler";

import { useLanguage } from "@/lib/i18n";

const ITEMS_PER_PAGE = 4;

const eventTypeKeys = [
  {
    icon: GraduationCap,
    titleKey: "events.types.t1",
    descKey: "events.types.t1Desc",
  },
  {
    icon: Mic,
    titleKey: "events.types.t2",
    descKey: "events.types.t2Desc",
  },
  {
    icon: Users,
    titleKey: "events.types.t3",
    descKey: "events.types.t3Desc",
  },
];

function formatDate(dateStr: string, lang: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function EtkinliklerPage() {
  const { t, tt, lang } = useLanguage();
  const [selectedEtkinlik, setSelectedEtkinlik] = useState<Etkinlik | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(etkinlikler.length / ITEMS_PER_PAGE);
  const paginatedEtkinlikler = useMemo(
    () =>
      etkinlikler.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      ),
    [currentPage]
  );

  useEffect(() => {
    if (selectedEtkinlik) {
      document.body.style.overflow = "hidden";
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedEtkinlik(null);
      };
      window.addEventListener("keydown", handleKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKey);
      };
    }
  }, [selectedEtkinlik]);

  const hasItems = etkinlikler.length > 0;

  return (
    <>
      <PageHeader
        title={t("events.title")}
        subtitle={t("events.subtitle")}
      />

      {/* Etkinlik Tipleri */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 text-sage-600 text-sm font-medium mb-5">
              <Sparkles className="w-4 h-4" />
              {t("events.typeBadge")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-sage-700 mb-4">
              {t("events.scopeTitle")}
            </h2>
            <p className="text-sage-500">
              {t("events.scopeDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventTypeKeys.map((type, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white/70 border border-sage-100 hover:border-sage-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sage-100 to-lavender-100 flex items-center justify-center mb-5 group-hover:from-sage-200 group-hover:to-lavender-200 transition-all">
                  <type.icon
                    className="w-7 h-7 text-sage-600"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold text-sage-700 mb-3">
                  {t(type.titleKey)}
                </h3>
                <p className="text-sm text-sage-500 leading-relaxed">
                  {t(type.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yaklaşan Etkinlikler */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-sage-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-700 mb-4">
              {t("events.upcoming")}
            </h2>
            <p className="text-sage-500">
              {t("events.upcomingDesc")}
            </p>
          </div>

          {hasItems ? (
            <div className="max-w-3xl mx-auto space-y-4">
              {paginatedEtkinlikler.map((etkinlik) => (
                <button
                  key={etkinlik.id}
                  onClick={() => setSelectedEtkinlik(etkinlik)}
                  className="group flex items-start gap-5 p-6 rounded-2xl bg-white/70 border border-sage-100 hover:border-sage-200 hover:shadow-xl transition-all duration-300 w-full text-left"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-sage-100 flex items-center justify-center">
                    <Calendar
                      className="w-7 h-7 text-sage-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-sage-600 bg-sage-50 px-3 py-1 rounded-full">
                        {tt(etkinlik.type)}
                      </span>
                      {etkinlik.status === "yakinda" && (
                        <span className="text-xs text-lavender-600 bg-lavender-100 px-3 py-1 rounded-full">
                          {t("events.comingSoon")}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-sage-700 mb-2 group-hover:text-sage-800 transition-colors">
                      {tt(etkinlik.title)}
                    </h3>
                    <p className="text-sm text-sage-500 leading-relaxed mb-3">
                      {tt(etkinlik.description)}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-sage-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(etkinlik.date, lang)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {etkinlik.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {etkinlik.location}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-4">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-5 p-6 rounded-2xl bg-white/70 border border-sage-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-sage-100 flex items-center justify-center">
                    <Calendar
                      className="w-7 h-7 text-sage-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-sage-400 bg-sage-50 px-3 py-1 rounded-full">
                        {t("events.comingSoon")}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-2/3 rounded-full bg-sage-100" />
                      <div className="h-3 w-full rounded-full bg-cream-200/60" />
                      <div className="h-3 w-1/2 rounded-full bg-cream-200/60" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-sage-400">
                      <Clock className="w-4 h-4" />
                      {t("events.datePending")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {hasItems && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </section>

      {/* Bildirim CTA */}
      <section className="section-padding bg-sage-700 text-cream-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-cream-50/10 flex items-center justify-center mx-auto mb-6">
              <Bell className="w-8 h-8 text-cream-50" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {t("events.ctaTitle")}
            </h2>
            <p className="text-cream-200/80 text-lg leading-relaxed mb-8 text-balance">
              {t("events.ctaDesc")}
            </p>
            <Link
              href="/#iletisim"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cream-50 text-sage-700 font-medium hover:bg-cream-100 transition-all shadow-sm"
            >
              {t("events.ctaBtn")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Etkinlik Detay Modal */}
      {selectedEtkinlik && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-sage-900/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedEtkinlik(null)}
        >
          <div
            className="bg-cream-50 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEtkinlik(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-sage-100 hover:bg-sage-200 flex items-center justify-center transition-all"
              aria-label={t("events.close")}
            >
              <X className="w-5 h-5 text-sage-600" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs text-sage-600 bg-sage-100 px-3 py-1 rounded-full">
                {tt(selectedEtkinlik.type)}
              </span>
              {selectedEtkinlik.status === "yakinda" && (
                <span className="text-xs text-lavender-600 bg-lavender-100 px-3 py-1 rounded-full">
                  {t("events.comingSoon")}
                </span>
              )}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-sage-700 mb-5 pr-10">
              {tt(selectedEtkinlik.title)}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-sm text-sage-500 mb-6 pb-6 border-b border-sage-100">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(selectedEtkinlik.date, lang)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {selectedEtkinlik.time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {selectedEtkinlik.location}
              </span>
            </div>

            <div className="space-y-4">
              {tt(selectedEtkinlik.details).split("\n").map((paragraph: string, idx: number) => (
                <p key={idx} className="text-sage-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
