"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

const faqKeys = [
  { qKey: "faq.q1", aKey: "faq.a1" },
  { qKey: "faq.q2", aKey: "faq.a2" },
  { qKey: "faq.q3", aKey: "faq.a3" },
  { qKey: "faq.q4", aKey: "faq.a4" },
  { qKey: "faq.q5", aKey: "faq.a5" },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqKeys.map((item, idx) => (
        <div
          key={idx}
          className="rounded-2xl bg-white/70 border border-sage-100 overflow-hidden transition-all duration-200"
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="font-medium text-sage-700 text-lg">
              {t(item.qKey)}
            </span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-sage-400 flex-shrink-0 transition-transform duration-300",
                openIndex === idx && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "grid transition-all duration-300 ease-in-out",
              openIndex === idx
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-5 text-sage-500 leading-relaxed">
                {t(item.aKey)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
