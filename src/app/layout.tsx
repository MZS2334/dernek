import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://beslenmepsikolojisi.org.tr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Beslenme Psikolojisi Derneği | Beslenme Psikolojisi Sempozyumu",
    template: "%s | Beslenme Psikolojisi Derneği",
  },
  description:
    "Beslenme Psikolojisi Derneği - Beslenme davranışını beden, zihin ve duygularla bütüncül ele alan bilimsel bir meslek derneği. Bedene ve Beslenmeye Şefkat Sempozyumu ile bir araya geliyoruz.",
  keywords: [
    "beslenme psikolojisi",
    "psikoloji",
    "dernek",
    "Gülçin Sanlı",
    "BPU",
    "beslenme psikolojisi sempozyumu",
    "bedene ve beslenmeye şefkat",
    "yeme bozuklukları",
    "beslenme davranışı",
    "Freya Psikoloji",
  ],
  authors: [{ name: "Beslenme Psikolojisi Derneği" }],
  creator: "Beslenme Psikolojisi Derneği",
  publisher: "Beslenme Psikolojisi Derneği",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "Beslenme Psikolojisi Derneği",
    title: "Beslenme Psikolojisi Derneği | Beslenme Psikolojisi Sempozyumu",
    description:
      "Beslenme davranışını beden, zihin ve duygularla bütüncül ele alan bilimsel bir meslek derneği. Bedene ve Beslenmeye Şefkat Sempozyumu ile bir araya geliyoruz.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Beslenme Psikolojisi Derneği",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beslenme Psikolojisi Derneği | Beslenme Psikolojisi Sempozyumu",
    description:
      "Beslenme davranışını beden, zihin ve duygularla bütüncül ele alan bilimsel bir meslek derneği.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "tr-TR": SITE_URL,
      "en-US": `${SITE_URL}/en`,
    },
  },
  category: "education",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f0e8" },
    { media: "(prefers-color-scheme: dark)", color: "#3d4f3d" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Beslenme Psikolojisi Derneği",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description:
    "Beslenme davranışını beden, zihin ve duygularla bütüncül ele alan bilimsel bir meslek derneği.",
  sameAs: [
    "https://www.instagram.com/beslenmepsikolojisi",
  ],
};

const jsonLdEvent = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Bedene ve Beslenmeye Şefkat Sempozyumu",
  description:
    "Beslenme Psikolojisi Derneği'nin düzenlediği Bedene ve Beslenmeye Şefkat Sempozyumu, beslenmeye yalnızca davranışlar üzerinden değil; bedeni, duyguları ve insanı anlayan bütüncül bir bakışla yaklaşmayı amaçlıyor.",
  organizer: {
    "@type": "Organization",
    name: "Beslenme Psikolojisi Derneği",
    url: SITE_URL,
  },
  offers: [
    {
      "@type": "Offer",
      name: "Genel Katılım - Erken Kayıt",
      price: "2250",
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
    },
    {
      "@type": "Offer",
      name: "Genel Katılım - Standart Kayıt",
      price: "2500",
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
    },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Beslenme Psikolojisi Derneği nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beslenme Psikolojisi Derneği, beslenme davranışını beden, zihin ve duygularla bütüncül ele alan bilimsel bir meslek derneğidir.",
      },
    },
    {
      "@type": "Question",
      name: "Beslenme Psikolojisi Eğitimi nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beslenme Psikolojisi Eğitimi (BPU), beslenme davranışını psikolojik perspektiften ele alan uzmanlık eğitimidir.",
      },
    },
    {
      "@type": "Question",
      name: "Bedene ve Beslenmeye Şefkat Sempozyumu ne zaman?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sempozyum iki gün sürecek olup, ilk gününde alanında uzman isimlerin konuşmaları, ikinci gününde deneyim odaklı atölyeler yer alacaktır.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdEvent) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
