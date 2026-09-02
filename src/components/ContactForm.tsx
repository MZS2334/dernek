"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function ContactForm() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const buildWhatsAppUrl = () => {
    const text =
      `${t("contactForm.labels.name")}: ${name}\n\n` +
      `${t("contactForm.labels.email")}: ${email}\n\n` +
      `${t("contactForm.labels.subject")}: ${subject}\n\n` +
      `${t("contactForm.labels.message")}: ${message}`;
    return `https://wa.me/905526043107?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsApp = () => {
    window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-5 p-7 rounded-2xl bg-white/70 border border-sage-100">
      <div>
        <label className="block text-sm font-medium text-sage-600 mb-2">
          {t("contactForm.name")}
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t("contactForm.namePlaceholder")}
          className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-sage-200 text-sage-700 placeholder-sage-300 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-sage-600 mb-2">
          {t("contactForm.email")}
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ornek@email.com"
          className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-sage-200 text-sage-700 placeholder-sage-300 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-sage-600 mb-2">
          {t("contactForm.subject")}
        </label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder={t("contactForm.subjectPlaceholder")}
          className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-sage-200 text-sage-700 placeholder-sage-300 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-sage-600 mb-2">
          {t("contactForm.message")}
        </label>
        <textarea
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("contactForm.messagePlaceholder")}
          className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-sage-200 text-sage-700 placeholder-sage-300 focus:outline-none focus:ring-2 focus:ring-sage-300 focus:border-transparent transition-all resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={handleWhatsApp}
          className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sage-600 text-cream-50 font-medium hover:bg-sage-700 transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          {t("contactForm.whatsapp")}
        </button>
      </div>
    </div>
  );
}
