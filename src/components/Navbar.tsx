"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

const mainLinkKeys = [
  { href: "/egitim", key: "nav.egitim" },
  { href: "/sempozyum", key: "nav.kaydol" },
] as const;

const dropdownLinkKeys = [
  { href: "/galeri", key: "nav.galeri" },
  { href: "/makaleler", key: "nav.makaleler" },
  { href: "/etkinlikler", key: "nav.etkinlikler" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setExploreOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-sage-100"
          : "bg-cream-50/80 backdrop-blur-sm"
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2.5 group">
            <img src="/logo_light.svg" alt="Beslenme Psikolojisi Derneği Logo" className="w-11 h-11 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold text-sage-700 leading-tight">
                {t("nav.brandName")}
              </span>
              <span className="text-xs text-sage-500 tracking-wide">
                {t("nav.brandSuffix")}
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {mainLinkKeys.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-sage-700 bg-sage-100"
                    : "text-sage-600 hover:text-sage-700 hover:bg-sage-50"
                )}
              >
                {t(link.key)}
              </Link>
            ))}

            <div className="relative group">
              <button
                className={cn(
                  "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  dropdownLinkKeys.some((l) => pathname === l.href)
                    ? "text-sage-700 bg-sage-100"
                    : "text-sage-600 hover:text-sage-700 hover:bg-sage-50"
                )}
              >
                {t("nav.kesfet")}
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-48 rounded-xl bg-cream-50 border border-sage-100 shadow-lg overflow-hidden py-1.5">
                  {dropdownLinkKeys.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "block px-4 py-2.5 text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "text-sage-700 bg-sage-100"
                          : "text-sage-600 hover:text-sage-700 hover:bg-sage-50"
                      )}
                    >
                      {t(link.key)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/hakkimizda"
              className={cn(
                "px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                pathname === "/hakkimizda"
                  ? "text-sage-700 bg-sage-100"
                  : "text-sage-600 hover:text-sage-700 hover:bg-sage-50"
              )}
            >
              {t("nav.hakkimizda")}
            </Link>

            <Link
              href="/#iletisim"
              className={cn(
                "px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                "text-sage-600 hover:text-sage-700 hover:bg-sage-50"
              )}
            >
              {t("nav.iletisim")}
            </Link>

            <button
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
              className="ml-2 flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-sage-600 hover:text-sage-700 hover:bg-sage-50 transition-all duration-200"
              aria-label="Language"
            >
              <Globe className="w-4 h-4" />
              {lang.toUpperCase()}
            </button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-sage-600 hover:bg-sage-50 transition-colors"
              aria-label={t("nav.menu")}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-1 pt-2 border-t border-sage-100">
              {mainLinkKeys.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-sage-700 bg-sage-100"
                      : "text-sage-600 hover:bg-sage-50"
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}

              <button
                onClick={() => setExploreOpen(!exploreOpen)}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left",
                  dropdownLinkKeys.some((l) => pathname === l.href)
                    ? "text-sage-700 bg-sage-100"
                    : "text-sage-600 hover:bg-sage-50"
                )}
              >
                {t("nav.kesfet")}
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    exploreOpen && "rotate-180"
                  )}
                />
              </button>
              {exploreOpen && (
                <div className="flex flex-col gap-1 pl-4 animate-fade-in">
                  {dropdownLinkKeys.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "text-sage-700 bg-sage-100"
                          : "text-sage-500 hover:bg-sage-50"
                      )}
                    >
                      {t(link.key)}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/hakkimizda"
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  pathname === "/hakkimizda"
                    ? "text-sage-700 bg-sage-100"
                    : "text-sage-600 hover:bg-sage-50"
                )}
              >
                {t("nav.hakkimizda")}
              </Link>

              <Link
                href="/#iletisim"
                className="px-4 py-3 rounded-lg text-sm font-medium text-sage-600 hover:bg-sage-50 transition-colors"
              >
                {t("nav.iletisim")}
              </Link>

              <button
                onClick={() => setLang(lang === "tr" ? "en" : "tr")}
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-sage-600 hover:bg-sage-50 transition-colors text-left"
                aria-label="Language"
              >
                <Globe className="w-4 h-4" />
                {lang.toUpperCase()}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
