"use client";

import { useState, useMemo, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import Lightbox from "@/components/Lightbox";
import Pagination from "@/components/Pagination";
import { Image as ImageIcon, Camera, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import galeriItems from "@/data/galeri";

import { useLanguage } from "@/lib/i18n";

const categoryKeys = ["gallery.categories.all", "gallery.categories.education", "gallery.categories.symposium", "gallery.categories.events", "gallery.categories.supervision"];
const ITEMS_PER_PAGE = 8;

export default function GaleriPage() {
  const { t, tt, lang } = useLanguage();
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const categoryTranslations = [
    { tr: "Tümü", en: "All" },
    { tr: "Eğitimler", en: "Training" },
    { tr: "Sempozyum", en: "Symposium" },
    { tr: "Etkinlikler", en: "Events" },
    { tr: "Süpervizyon", en: "Supervision" },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategoryIdx === 0) return galeriItems;
    const catTr = categoryTranslations[activeCategoryIdx].tr;
    return galeriItems.filter((item) => item.category.tr === catTr);
  }, [activeCategoryIdx]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategoryIdx]);

  const hasItems = galeriItems.length > 0;

  return (
    <>
      <PageHeader
        title={t("gallery.title")}
        subtitle={t("gallery.subtitle")}
      />

      {/* Kategori Filtreleri */}
      <section className="pt-10 pb-6 bg-cream-50">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categoryKeys.map((catKey, catIdx) => (
              <button
                key={catKey}
                onClick={() => setActiveCategoryIdx(catIdx)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                  activeCategoryIdx === catIdx
                    ? "bg-sage-600 text-cream-50 border border-sage-600"
                    : "bg-white/70 border border-sage-100 text-sage-600 hover:border-sage-200"
                }`}
              >
                {t(catKey)}
                {hasItems && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      activeCategoryIdx === catIdx
                        ? "bg-cream-50/20 text-cream-50"
                        : "bg-sage-50 text-sage-400"
                    }`}
                  >
                    {catIdx === 0
                      ? galeriItems.length
                      : galeriItems.filter((i) => i.category.tr === categoryTranslations[catIdx].tr).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri Grid */}
      <section className="pb-16 md:pb-24 bg-cream-50">
        <div className="container-custom">
          {hasItems ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {paginatedItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setLightboxIndex((currentPage - 1) * ITEMS_PER_PAGE + idx)}
                  className={`group relative rounded-2xl border border-sage-100 overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    idx === 0 && currentPage === 1 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <Image
                    src={item.image}
                    alt={tt(item.title)}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-cream-50 text-sm font-medium">
                      {tt(item.title)}
                    </p>
                    <p className="text-cream-200/80 text-xs mt-0.5">
                      {tt(item.category)}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div
                  key={idx}
                  className={`group relative rounded-2xl bg-gradient-to-br from-sage-50 to-cream-100 border border-sage-100 overflow-hidden ${
                    idx === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                  }`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-white/60 flex items-center justify-center">
                      <Camera
                        className="w-6 h-6 text-sage-300"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="text-xs text-sage-400 font-medium">
                      {t("gallery.photoPending")}
                    </p>
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
      <section className="section-padding bg-gradient-to-b from-cream-50 to-sage-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 text-sage-600 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {t("gallery.comingSoon")}
            </div>
            <div className="w-16 h-16 rounded-2xl bg-sage-100 flex items-center justify-center mx-auto mb-6">
              <ImageIcon
                className="w-8 h-8 text-sage-500"
                strokeWidth={1.5}
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-sage-700 mb-4">
              {t("gallery.contentTitle")}
            </h2>
            <p className="text-sage-500 leading-relaxed text-lg mb-8">
              {t("gallery.contentDesc")}
            </p>
            <Link
              href="https://instagram.com/beslenmepsikolojisidernegi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sage-600 text-cream-50 font-medium hover:bg-sage-700 transition-all shadow-sm hover:shadow-md"
            >
              {t("gallery.followInstagram")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
