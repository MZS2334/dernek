"use client";

import Link from "next/link";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-sage-700 text-cream-50 mt-auto">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img src="/logo_dark.svg" alt="Beslenme Psikolojisi Derneği Logo" className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold leading-tight">
                  {t("nav.brandName")}
                </span>
                <span className="text-xs text-cream-200 tracking-wide">
                  {t("nav.brandSuffix")}
                </span>
              </div>
            </div>
            <p className="text-sm text-cream-200/80 leading-relaxed max-w-xs">
              {t("footer.description")}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-200">
              {t("footer.pages")}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-sm text-cream-200/80 hover:text-cream-50 transition-colors"
                >
                  {t("nav.hakkimizda")}
                </Link>
              </li>
              <li>
                <Link
                  href="/egitim"
                  className="text-sm text-cream-200/80 hover:text-cream-50 transition-colors"
                >
                  {t("nav.egitim")}
                </Link>
              </li>
              <li>
                <Link
                  href="/sempozyum"
                  className="text-sm text-cream-200/80 hover:text-cream-50 transition-colors"
                >
                  {t("nav.sempozyum")}
                </Link>
              </li>
              <li>
                <Link
                  href="/galeri"
                  className="text-sm text-cream-200/80 hover:text-cream-50 transition-colors"
                >
                  {t("nav.galeri")}
                </Link>
              </li>
              <li>
                <Link
                  href="/makaleler"
                  className="text-sm text-cream-200/80 hover:text-cream-50 transition-colors"
                >
                  {t("nav.makaleler")}
                </Link>
              </li>
              <li>
                <Link
                  href="/etkinlikler"
                  className="text-sm text-cream-200/80 hover:text-cream-50 transition-colors"
                >
                  {t("nav.etkinlikler")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#iletisim"
                  className="text-sm text-cream-200/80 hover:text-cream-50 transition-colors"
                >
                  {t("nav.iletisim")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream-200">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-cream-200/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>0552 604 31 07</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream-200/80">
                <Instagram className="w-4 h-4 flex-shrink-0" />
                <a
                  href="https://instagram.com/beslenmepsikolojisidernegi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream-50 transition-colors"
                >
                  @beslenmepsikolojisidernegi
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream-200/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@beslenmepsikolojisi.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-50/10">
          <p className="text-center text-xs text-cream-200/60">
            © {new Date().getFullYear()} {t("nav.brandName")} {t("nav.brandSuffix")}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
