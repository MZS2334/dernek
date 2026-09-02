"use client";

import { useState, useEffect, useMemo } from "react";
import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/Pagination";
import {
  FileText,
  Brain,
  Heart,
  Leaf,
  Sparkles,
  ArrowRight,
  BookOpen,
  X,
  Calendar,
  User,
} from "lucide-react";
import Link from "next/link";
import makaleler, { Makale } from "@/data/makaleler";

import { useLanguage } from "@/lib/i18n";

const ITEMS_PER_PAGE = 4;

const topicAreaKeys = [
  {
    icon: Brain,
    titleKey: "articles.topics.t1",
    descKey: "articles.topics.t1Desc",
  },
  {
    icon: Heart,
    titleKey: "articles.topics.t2",
    descKey: "articles.topics.t2Desc",
  },
  {
    icon: Leaf,
    titleKey: "articles.topics.t3",
    descKey: "articles.topics.t3Desc",
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

export default function MakalelerPage() {
  const { t, tt, lang } = useLanguage();
  const [selectedMakale, setSelectedMakale] = useState<Makale | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(makaleler.length / ITEMS_PER_PAGE);
  const paginatedMakaleler = useMemo(
    () =>
      makaleler.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      ),
    [currentPage]
  );

  useEffect(() => {
    if (selectedMakale) {
      document.body.style.overflow = "hidden";
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedMakale(null);
      };
      window.addEventListener("keydown", handleKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKey);
      };
    }
  }, [selectedMakale]);

  const hasItems = makaleler.length > 0;

  return (
    <>
      <PageHeader
        title={t("articles.title")}
        subtitle={t("articles.subtitle")}
      />

      {/* Konu Alanları */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 text-sage-600 text-sm font-medium mb-5">
              <BookOpen className="w-4 h-4" />
              {t("articles.topicBadge")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-sage-700 mb-4">
              {t("articles.scopeTitle")}
            </h2>
            <p className="text-sage-500">
              {t("articles.scopeDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topicAreaKeys.map((topic, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white/70 border border-sage-100 hover:border-sage-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sage-100 to-lavender-100 flex items-center justify-center mb-5 group-hover:from-sage-200 group-hover:to-lavender-200 transition-all">
                  <topic.icon
                    className="w-7 h-7 text-sage-600"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold text-sage-700 mb-3">
                  {t(topic.titleKey)}
                </h3>
                <p className="text-sm text-sage-500 leading-relaxed">
                  {t(topic.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Makale Kartları */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-sage-50">
        <div className="container-custom">
          {hasItems ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedMakaleler.map((makale) => (
                <button
                  key={makale.id}
                  onClick={() => setSelectedMakale(makale)}
                  className="group p-7 rounded-2xl bg-white/70 border border-sage-100 hover:border-sage-200 hover:shadow-xl transition-all duration-300 text-left"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center">
                      <FileText
                        className="w-5 h-5 text-sage-600"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="text-xs text-sage-500 bg-sage-50 px-3 py-1 rounded-full">
                      {tt(makale.category)}
                    </span>
                    {makale.status === "yakinda" && (
                      <span className="text-xs text-lavender-600 bg-lavender-100 px-3 py-1 rounded-full ml-auto">
                        {t("articles.comingSoon")}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-sage-700 mb-3 group-hover:text-sage-800 transition-colors">
                    {tt(makale.title)}
                  </h3>
                  <p className="text-sm text-sage-500 leading-relaxed mb-4">
                    {tt(makale.excerpt)}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-sage-400">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      {makale.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(makale.date, lang)}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="group p-7 rounded-2xl bg-white/70 border border-sage-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center">
                      <FileText
                        className="w-5 h-5 text-sage-400"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 w-20 rounded-full bg-sage-100" />
                    </div>
                    <span className="text-xs text-sage-400 bg-sage-50 px-3 py-1 rounded-full">
                      {t("articles.comingSoon")}
                    </span>
                  </div>
                  <div className="space-y-2.5 mb-4">
                    <div className="h-4 w-3/4 rounded-full bg-sage-100" />
                    <div className="h-4 w-1/2 rounded-full bg-sage-100" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-full rounded-full bg-cream-200/60" />
                    <div className="h-3 w-full rounded-full bg-cream-200/60" />
                    <div className="h-3 w-2/3 rounded-full bg-cream-200/60" />
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-sm text-sage-400">
                    <Sparkles className="w-4 h-4" />
                    {t("articles.contentPending")}
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

      {/* Bilgi Bölümü */}
      <section className="section-padding bg-sage-700 text-cream-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-cream-50/10 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-cream-50" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {t("articles.ctaTitle")}
            </h2>
            <p className="text-cream-200/80 text-lg leading-relaxed mb-8 text-balance">
              {t("articles.ctaDesc")}
            </p>
            <Link
              href="/#iletisim"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cream-50 text-sage-700 font-medium hover:bg-cream-100 transition-all shadow-sm"
            >
              {t("articles.ctaBtn")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Makale Detay Modal */}
      {selectedMakale && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-sage-900/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedMakale(null)}
        >
          <div
            className="bg-cream-50 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMakale(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-sage-100 hover:bg-sage-200 flex items-center justify-center transition-all"
              aria-label={t("articles.close")}
            >
              <X className="w-5 h-5 text-sage-600" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs text-sage-600 bg-sage-100 px-3 py-1 rounded-full">
                {tt(selectedMakale.category)}
              </span>
              <span className="text-xs text-sage-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(selectedMakale.date, lang)}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-sage-700 mb-4 pr-10">
              {tt(selectedMakale.title)}
            </h2>

            <div className="flex items-center gap-2 text-sm text-sage-500 mb-6 pb-6 border-b border-sage-100">
              <User className="w-4 h-4" />
              {selectedMakale.author}
            </div>

            <div className="prose prose-sage max-w-none">
              {tt(selectedMakale.content).split("\n").map((paragraph: string, idx: number) => (
                <p key={idx} className="text-sage-600 leading-relaxed mb-4">
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
