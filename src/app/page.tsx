"use client";

import Link from "next/link";
import {
  Heart,
  Brain,
  BookOpen,
  Users,
  Calendar,
  Image as ImageIcon,
  FileText,
  ArrowRight,
  Sparkles,
  Leaf,
  Target,
  Eye,
  Shield,
  Download,
  Phone,
  Instagram,
  Mail,
  MapPin,
  GraduationCap,
} from "lucide-react";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/lib/i18n";

const values = [
  {
    icon: Heart,
    titleKey: "home.values.sefkat",
    descKey: "home.values.sefkatDesc",
  },
  {
    icon: Brain,
    titleKey: "home.values.bilimsel",
    descKey: "home.values.bilimselDesc",
  },
  {
    icon: Shield,
    titleKey: "home.values.etik",
    descKey: "home.values.etikDesc",
  },
  {
    icon: Users,
    titleKey: "home.values.disiplin",
    descKey: "home.values.disiplinDesc",
  },
];

const pages = [
  { href: "/hakkimizda", icon: Users, titleKey: "home.explore.hakkimizdaTitle", descKey: "home.explore.hakkimizdaDesc" },
  { href: "/egitim", icon: BookOpen, titleKey: "home.explore.egitimTitle", descKey: "home.explore.egitimDesc" },
  { href: "/kaydol", icon: Sparkles, titleKey: "home.explore.sempozyumTitle", descKey: "home.explore.sempozyumDesc" },
  { href: "/galeri", icon: ImageIcon, titleKey: "home.explore.galeriTitle", descKey: "home.explore.galeriDesc" },
  { href: "/makaleler", icon: FileText, titleKey: "home.explore.makalelerTitle", descKey: "home.explore.makalelerDesc" },
  { href: "/etkinlikler", icon: Calendar, titleKey: "home.explore.etkinliklerTitle", descKey: "home.explore.etkinliklerDesc" },
];

const stats = [
  { value: "2019", labelKey: "home.stats.founding" },
  { value: "BPU", labelKey: "home.stats.program" },
  { value: "4", labelKey: "home.stats.boards" },
  { value: "∞", labelKey: "home.stats.learning" },
];

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sage-50 via-cream-50 to-cream-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-lavender-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage-100/50 rounded-full blur-3xl" />

        <div className="relative container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 text-sage-600 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                {t("home.hero.badge")}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-sage-700 leading-tight text-balance">
                {t("home.hero.title")}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-sage-500 leading-relaxed text-balance">
                {t("home.hero.description")}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/hakkimizda"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sage-600 text-cream-50 font-medium hover:bg-sage-700 transition-all shadow-sm hover:shadow-md"
                >
                  {t("home.hero.ctaPrimary")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/egitim"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cream-100 text-sage-700 font-medium hover:bg-cream-200 transition-all border border-sage-200"
                >
                  {t("home.hero.ctaSecondary")}
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center animate-fade-in">
              <img
                src="/logo_light.svg"
                alt="Beslenme Psikolojisi Derneği Logo"
                className="w-80 h-80 max-w-full logo-3d-spin"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Değerler */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-700 mb-4">
              {t("home.values.title")}
            </h2>
            <p className="text-sage-500">
              {t("home.values.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group p-7 rounded-2xl bg-white/60 border border-sage-100 hover:border-sage-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center mb-5 group-hover:bg-sage-200 transition-colors">
                  <value.icon
                    className="w-6 h-6 text-sage-600"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold text-sage-700 mb-2">
                  {t(value.titleKey)}
                </h3>
                <p className="text-sm text-sage-500 leading-relaxed">
                  {t(value.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-sage-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 md:p-10 rounded-2xl bg-white/70 border border-sage-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-lavender-100 flex items-center justify-center">
                  <Target
                    className="w-5 h-5 text-lavender-600"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-bold text-sage-700">{t("home.mission.title")}</h3>
              </div>
              <p className="text-sage-600 leading-relaxed">
                {t("home.mission.text")}
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-2xl bg-white/70 border border-sage-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-teal-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-sage-700">{t("home.vision.title")}</h3>
              </div>
              <p className="text-sage-600 leading-relaxed">
                {t("home.vision.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-14 bg-sage-700 text-cream-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl md:text-4xl font-serif font-bold text-cream-50 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-cream-200/70">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keşfedin - Sayfa Kartları */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-700 mb-4">
              {t("home.explore.title")}
            </h2>
            <p className="text-sage-500">
              {t("home.explore.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group p-7 rounded-2xl bg-white/70 border border-sage-100 hover:border-sage-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sage-100 to-lavender-100 flex items-center justify-center mb-4 group-hover:from-sage-200 group-hover:to-lavender-200 transition-all">
                  <page.icon
                    className="w-5 h-5 text-sage-600"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold text-sage-700 mb-2 group-hover:text-sage-800 transition-colors">
                  {t(page.titleKey)}
                </h3>
                <p className="text-sm text-sage-500 leading-relaxed">
                  {t(page.descKey)}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-sage-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {t("home.explore.discover")}
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Eğitim Vurgu Bölümü */}
      <section className="section-padding bg-gradient-to-b from-cream-50 to-sage-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 text-sage-600 text-sm font-medium mb-5">
                  <GraduationCap className="w-4 h-4" />
                  {t("home.educationSection.badge")}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-sage-700 mb-5 text-balance">
                  {t("home.educationSection.title")}
                </h2>
                <p className="text-sage-600 leading-relaxed text-lg mb-6">
                  {t("home.educationSection.description")}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/egitim"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sage-600 text-cream-50 font-medium hover:bg-sage-700 transition-all shadow-sm hover:shadow-md"
                  >
                    {t("home.educationSection.detailBtn")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="/BPU-bilgi-kitapcigi.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cream-100 text-sage-700 font-medium hover:bg-cream-200 transition-all border border-sage-200"
                  >
                    <Download className="w-4 h-4" />
                    {t("home.educationSection.downloadBtn")}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 rounded-2xl bg-white/70 border border-sage-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center">
                      <Users
                        className="w-5 h-5 text-sage-600"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-semibold text-sage-700">{t("home.educationSection.targetTitle")}</h3>
                  </div>
                  <p className="text-sm text-sage-500 leading-relaxed">
                    {t("home.educationSection.targetDesc")}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/70 border border-sage-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center">
                      <Brain
                        className="w-5 h-5 text-lavender-600"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-semibold text-sage-700">
                      {t("home.educationSection.holisticTitle")}
                    </h3>
                  </div>
                  <p className="text-sm text-sage-500 leading-relaxed">
                    {t("home.educationSection.holisticDesc")}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/70 border border-sage-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                      <Leaf
                        className="w-5 h-5 text-teal-600"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="font-semibold text-sage-700">
                      {t("home.educationSection.traumaTitle")}
                    </h3>
                  </div>
                  <p className="text-sm text-sage-500 leading-relaxed">
                    {t("home.educationSection.traumaDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-700 mb-4">
              {t("home.faq.title")}
            </h2>
            <p className="text-sage-500">
              {t("home.faq.subtitle")}
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* İletişim */}
      <section id="iletisim" className="section-padding bg-gradient-to-b from-cream-50 to-sage-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-700 mb-4">
              {t("home.contact.title")}
            </h2>
            <p className="text-sage-500">
              {t("home.contact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="space-y-5">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-sage-100">
                <div className="w-11 h-11 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-sage-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-sage-700 mb-1">{t("home.contact.phone")}</h3>
                  <a
                    href="tel:+905526043107"
                    className="text-sage-500 hover:text-sage-600 transition-colors"
                  >
                    0552 604 31 07
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-sage-100">
                <div className="w-11 h-11 rounded-xl bg-lavender-100 flex items-center justify-center flex-shrink-0">
                  <Instagram
                    className="w-5 h-5 text-lavender-600"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sage-700 mb-1">
                    {t("home.contact.instagram")}
                  </h3>
                  <a
                    href="https://instagram.com/beslenmepsikolojisidernegi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sage-500 hover:text-sage-600 transition-colors"
                  >
                    @beslenmepsikolojisidernegi
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-sage-100">
                <div className="w-11 h-11 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-teal-600" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-sage-700 mb-1">{t("home.contact.email")}</h3>
                  <a
                    href="mailto:info@beslenmepsikolojisi.org"
                    className="text-sage-500 hover:text-sage-600 transition-colors"
                  >
                    info@beslenmepsikolojisi.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-sage-100">
                <div className="w-11 h-11 rounded-xl bg-cream-200 flex items-center justify-center flex-shrink-0">
                  <MapPin
                    className="w-5 h-5 text-cream-500"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sage-700 mb-1">{t("home.contact.address")}</h3>
                  <p className="text-sage-500">{t("home.contact.addressValue")}</p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
