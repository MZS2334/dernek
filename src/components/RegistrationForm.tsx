"use client";

import { useState, useRef, useCallback } from "react";
import { MessageCircle, ChevronLeft, ChevronRight, Upload, FileCheck2, Check, Loader2, X, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

// Cloudflare Worker URL - deploy sonrası güncellenecek
const UPLOAD_WORKER_URL = process.env.NEXT_PUBLIC_UPLOAD_WORKER_URL || "";

type FormData = {
  name: string;
  email: string;
  phone: string;
  institution: string;
  department: string;
  participationType: string;
  participantGroup: string;
  verificationCode: string;
  invoiceType: string;
  idNumber: string;
  address: string;
  receipt: File | null;
  receiptUrl: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];

function isValidTcNo(value: string): boolean {
  if (!/^[1-9]\d{10}$/.test(value)) return false;
  const digits = value.split("").map(Number);
  const oddSum = digits[0] + digits[2] + digits[4] + digits[6] + digits[8];
  const evenSum = digits[1] + digits[3] + digits[5] + digits[7];
  const d10 = (oddSum * 7 - evenSum) % 10;
  const d11 = digits.slice(0, 10).reduce((a, b) => a + b, 0) % 10;
  return d10 === digits[9] && d11 === digits[10];
}

function isValidPassport(value: string): boolean {
  return /^[A-Za-z][A-Za-z0-9]{5,10}$/.test(value);
}

export default function RegistrationForm() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Errors>({});
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReceiptInfo, setShowReceiptInfo] = useState(false);
  const [inPersonFull, setInPersonFull] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    institution: "",
    department: "",
    participationType: "",
    participantGroup: "",
    verificationCode: "",
    invoiceType: "",
    idNumber: "",
    address: "",
    receipt: null,
    receiptUrl: "",
  });

  const setField = (field: keyof FormData, value: string | File | null) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep = (s: number): boolean => {
    const e: Errors = {};

    if (s === 1) {
      const name = data.name.trim();
      if (!name) e.name = t("kayitForm.errors.required");
      else if (
        !/^[a-zA-ZçÇğĞıİöÖşŞüÜâÂîÎûÛ]+(\s+[a-zA-ZçÇğĞıİöÖşŞüÜâÂîÎûÛ]+)+$/.test(name) ||
        name.length < 5
      )
        e.name = t("kayitForm.errors.name");

      const email = data.email.trim();
      if (!email) e.email = t("kayitForm.errors.required");
      else if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email))
        e.email = t("kayitForm.errors.email");

      const phone = data.phone.replace(/[\s()-]/g, "");
      if (!phone) e.phone = t("kayitForm.errors.required");
      else if (!/^\+?\d{7,15}$/.test(phone))
        e.phone = t("kayitForm.errors.phone");
    }

    if (s === 2) {
      const institution = data.institution.trim();
      if (!institution) e.institution = t("kayitForm.errors.required");
      else if (institution.length < 3 || !/[a-zA-ZçÇğĞıİöÖşŞüÜ]{3,}/.test(institution))
        e.institution = t("kayitForm.errors.institution");

      const department = data.department.trim();
      if (!department) e.department = t("kayitForm.errors.required");
      else if (department.length < 3 || !/[a-zA-ZçÇğĞıİöÖşŞüÜ]{3,}/.test(department))
        e.department = t("kayitForm.errors.department");

      if (!data.participationType) e.participationType = t("kayitForm.errors.required");
      else if (data.participationType === "in-person" && inPersonFull) e.participationType = t("kayitForm.errors.capacityFull");

      if (!data.participantGroup) e.participantGroup = t("kayitForm.errors.required");
      else if ((data.participantGroup === "freya" || data.participantGroup === "cv") && !data.verificationCode.trim())
        e.verificationCode = t("kayitForm.errors.verificationCode");
    }

    if (s === 3) {
      if (!data.invoiceType) e.invoiceType = t("kayitForm.errors.required");

      const id = data.idNumber.trim();
      if (!id) e.idNumber = t("kayitForm.errors.required");
      else if (/^\d+$/.test(id) && id.length === 11) {
        if (!isValidTcNo(id)) e.idNumber = t("kayitForm.errors.id");
      } else if (!isValidPassport(id)) {
        if (/^\d+$/.test(id)) e.idNumber = t("kayitForm.errors.idNumbersOnly");
        else e.idNumber = t("kayitForm.errors.id");
      }

      const address = data.address.trim();
      if (!address) e.address = t("kayitForm.errors.required");
      else if (address.length < 10) e.address = t("kayitForm.errors.address");

      if (!data.receipt) e.receipt = t("kayitForm.errors.required");
      else if (!data.receiptUrl) e.receipt = t("kayitForm.errors.receiptUploadError");
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const uploadToCloud = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(UPLOAD_WORKER_URL, { method: "POST", body: formData });
    if (!res.ok) throw new Error("Upload failed");
    const json = await res.json();
    if (!json.url) throw new Error("No URL returned");
    return json.url as string;
  };

  const handleFileChange = async (file: File | null) => {
    if (!file) {
      setField("receipt", null);
      setField("receiptUrl", "");
      return;
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      setData((prev) => ({ ...prev, receipt: null, receiptUrl: "" }));
      setErrors((prev) => ({ ...prev, receipt: t("kayitForm.errors.fileType") }));
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setData((prev) => ({ ...prev, receipt: null, receiptUrl: "" }));
      setErrors((prev) => ({ ...prev, receipt: t("kayitForm.errors.fileSize") }));
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    setField("receipt", file);
    setField("receiptUrl", "");

    if (UPLOAD_WORKER_URL) {
      setIsUploading(true);
      try {
        const url = await uploadToCloud(file);
        setField("receiptUrl", url);
      } catch {
        setErrors((prev) => ({ ...prev, receipt: t("kayitForm.errors.receiptUploadError") }));
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0] ?? null;
    handleFileChange(file);
  }, []);

  const checkCapacity = async () => {
    if (!UPLOAD_WORKER_URL) return;
    try {
      const res = await fetch(`${UPLOAD_WORKER_URL}/capacity`);
      if (res.ok) {
        const json = await res.json();
        setInPersonFull(json.isFull === true);
      }
    } catch {
      // silently fail — allow registration if capacity check unavailable
    }
  };

  const handleNext = () => {
    if (step === 1 && validateStep(1)) {
      checkCapacity();
      setStep((s) => Math.min(s + 1, 3));
    } else if (validateStep(step)) {
      setStep((s) => Math.min(s + 1, 3));
    }
  };

  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async () => {
    if (!validateStep(3)) return;
    setIsSubmitting(true);

    // Check & reserve capacity for in-person registration BEFORE sending WhatsApp
    if (data.participationType === "in-person" && UPLOAD_WORKER_URL) {
      try {
        const regRes = await fetch(`${UPLOAD_WORKER_URL}/register`, { method: "POST" });
        if (regRes.status === 409) {
          setInPersonFull(true);
          setErrors((prev) => ({ ...prev, participationType: t("kayitForm.errors.capacityFull") }));
          setIsSubmitting(false);
          setStep(2);
          return;
        }
        if (!regRes.ok) {
          // Capacity service error — re-check to be safe
          const capRes = await fetch(`${UPLOAD_WORKER_URL}/capacity`);
          if (capRes.ok) {
            const capJson = await capRes.json();
            if (capJson.isFull) {
              setInPersonFull(true);
              setErrors((prev) => ({ ...prev, participationType: t("kayitForm.errors.capacityFull") }));
              setIsSubmitting(false);
              setStep(2);
              return;
            }
          }
        }
      } catch {
        // Worker unreachable — allow registration to proceed
      }
    }

    let receiptUrl = data.receiptUrl;

    // If file selected but not yet uploaded (e.g. worker URL wasn't set on first select), upload now
    if (data.receipt && !receiptUrl && UPLOAD_WORKER_URL) {
      try {
        receiptUrl = await uploadToCloud(data.receipt);
        setField("receiptUrl", receiptUrl);
      } catch {
        setErrors((prev) => ({ ...prev, receipt: t("kayitForm.errors.receiptUploadError") }));
        setIsSubmitting(false);
        return;
      }
    }

    const participationText =
      data.participationType === "in-person"
        ? t("kayitForm.participationInPerson")
        : t("kayitForm.participationOnline");
    const groupText =
      data.participantGroup === "freya"
        ? t("kayitForm.groupFreya")
        : data.participantGroup === "cv"
          ? t("kayitForm.groupCv")
          : t("kayitForm.groupOther");
    const invoiceText =
      data.invoiceType === "individual"
        ? t("kayitForm.invoiceIndividual")
        : t("kayitForm.invoiceCorporate");
    const text =
      `*${t("kayitForm.labels.title")}*\n\n` +
      `${t("kayitForm.labels.name")}: ${data.name.trim()}\n` +
      `${t("kayitForm.labels.email")}: ${data.email.trim()}\n` +
      `${t("kayitForm.labels.phone")}: ${data.phone.trim()}\n` +
      `${t("kayitForm.labels.institution")}: ${data.institution.trim()}\n` +
      `${t("kayitForm.labels.department")}: ${data.department.trim()}\n` +
      `${t("kayitForm.labels.participationType")}: ${participationText}\n` +
      `${t("kayitForm.labels.participantGroup")}: ${groupText}\n` +
      ((data.participantGroup === "freya" || data.participantGroup === "cv")
        ? `${t("kayitForm.labels.verificationCode")}: ${data.verificationCode.trim()}\n`
        : "") +
      `${t("kayitForm.labels.invoiceType")}: ${invoiceText}\n` +
      `${t("kayitForm.labels.idNumber")}: ${data.idNumber.trim()}\n` +
      `${t("kayitForm.labels.address")}: ${data.address.trim()}\n` +
      `${t("kayitForm.labels.receipt")}: ${receiptUrl || data.receipt?.name || "-"}`;
    window.open(
      `https://wa.me/905526043107?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setIsSubmitting(false);
  };

  const stepTitles = [
    t("kayitForm.step1Title"),
    t("kayitForm.step2Title"),
    t("kayitForm.step3Title"),
  ];

  const inputClass = (hasError?: string) =>
    cn(
      "w-full px-4 py-3 rounded-xl bg-cream-50 border text-sage-700 placeholder-sage-300 focus:outline-none focus:ring-2 focus:border-transparent transition-all",
      hasError
        ? "border-red-300 focus:ring-red-300"
        : "border-sage-200 focus:ring-sage-300"
    );

  const labelClass = "block text-sm font-medium text-sage-600 mb-2";
  const errorClass = "mt-1.5 text-xs text-red-500";

  return (
    <div className="space-y-6 p-7 rounded-2xl bg-white/70 border border-sage-100">
      {/* Stepper */}
      <div className="flex items-center justify-between mb-2">
        {stepTitles.map((title, idx) => {
          const stepNum = idx + 1;
          const isActive = step === stepNum;
          const isDone = step > stepNum;
          return (
            <div key={idx} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                    isDone
                      ? "bg-sage-600 text-cream-50"
                      : isActive
                        ? "bg-sage-600 text-cream-50 ring-4 ring-sage-100"
                        : "bg-sage-100 text-sage-400"
                  )}
                >
                  {isDone ? <Check className="w-4 h-4" /> : stepNum}
                </div>
                <span
                  className={cn(
                    "text-xs font-medium text-center hidden sm:block transition-colors",
                    isActive ? "text-sage-700" : "text-sage-400"
                  )}
                >
                  {title}
                </span>
              </div>
              {idx < 2 && (
                <div
                  className={cn(
                    "flex-1 h-0.5 mx-2 transition-all duration-300",
                    isDone ? "bg-sage-600" : "bg-sage-100"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Step 1: Personal Info */}
      {step === 1 && (
        <div className="space-y-5 animate-fade-in">
          <div>
            <label className={labelClass}>{t("kayitForm.name")}</label>
            <input
              type="text"
              name="full-name"
              autoComplete="name"
              value={data.name}
              onChange={(e) => setField("name", e.target.value)}
              placeholder={t("kayitForm.namePlaceholder")}
              className={inputClass(errors.name)}
            />
            {errors.name && <p className={errorClass}>{errors.name}</p>}
          </div>

          <div>
            <label className={labelClass}>{t("kayitForm.email")}</label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={data.email}
              onChange={(e) => setField("email", e.target.value)}
              placeholder={t("kayitForm.emailPlaceholder")}
              className={inputClass(errors.email)}
            />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>

          <div>
            <label className={labelClass}>{t("kayitForm.phone")}</label>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              value={data.phone}
              onChange={(e) => setField("phone", e.target.value)}
              placeholder={t("kayitForm.phonePlaceholder")}
              className={inputClass(errors.phone)}
            />
            {errors.phone && <p className={errorClass}>{errors.phone}</p>}
          </div>
        </div>
      )}

      {/* Step 2: Institution & Preferences */}
      {step === 2 && (
        <div className="space-y-5 animate-fade-in">
          <div>
            <label className={labelClass}>{t("kayitForm.institution")}</label>
            <input
              type="text"
              name="organization"
              autoComplete="organization"
              value={data.institution}
              onChange={(e) => setField("institution", e.target.value)}
              placeholder={t("kayitForm.institutionPlaceholder")}
              className={inputClass(errors.institution)}
            />
            {errors.institution && <p className={errorClass}>{errors.institution}</p>}
          </div>

          <div>
            <label className={labelClass}>{t("kayitForm.department")}</label>
            <input
              type="text"
              name="organization-title"
              autoComplete="organization-title"
              value={data.department}
              onChange={(e) => setField("department", e.target.value)}
              placeholder={t("kayitForm.departmentPlaceholder")}
              className={inputClass(errors.department)}
            />
            {errors.department && <p className={errorClass}>{errors.department}</p>}
          </div>

          <div>
            <label className={labelClass}>{t("kayitForm.participationType")}</label>
            <select
              name="participation-type"
              value={data.participationType}
              onChange={(e) => setField("participationType", e.target.value)}
              className={inputClass(errors.participationType)}
            >
              <option value="">{t("kayitForm.select")}</option>
              <option value="in-person">{t("kayitForm.participationInPerson")}</option>
              <option value="online">{t("kayitForm.participationOnline")}</option>
            </select>
            {errors.participationType && (
              <p className={errorClass}>{errors.participationType}</p>
            )}
          </div>

          <div>
            <label className={labelClass}>{t("kayitForm.participantGroup")}</label>
            <select
              name="participant-group"
              value={data.participantGroup}
              onChange={(e) => setField("participantGroup", e.target.value)}
              className={inputClass(errors.participantGroup)}
            >
              <option value="">{t("kayitForm.select")}</option>
              <option value="freya">{t("kayitForm.groupFreya")}</option>
              <option value="cv">{t("kayitForm.groupCv")}</option>
              <option value="other">{t("kayitForm.groupOther")}</option>
            </select>
            {errors.participantGroup && (
              <p className={errorClass}>{errors.participantGroup}</p>
            )}
          </div>

          {(data.participantGroup === "freya" || data.participantGroup === "cv") && (
            <div className="animate-fade-in">
              <label className={labelClass}>{t("kayitForm.verificationCode")}</label>
              <input
                type="text"
                name="verification-code"
                autoComplete="off"
                value={data.verificationCode}
                onChange={(e) => setField("verificationCode", e.target.value)}
                placeholder={t("kayitForm.verificationCodePlaceholder")}
                className={inputClass(errors.verificationCode)}
              />
              <p className="text-xs text-sage-400 mt-1.5 leading-relaxed">
                {t("kayitForm.verificationCodeHint")}
              </p>
              {errors.verificationCode && <p className={errorClass}>{errors.verificationCode}</p>}
            </div>
          )}
        </div>
      )}

      {/* Step 3: Billing & Payment */}
      {step === 3 && (
        <div className="space-y-5 animate-fade-in">
          <div>
            <label className={labelClass}>{t("kayitForm.invoiceType")}</label>
            <select
              name="invoice-type"
              value={data.invoiceType}
              onChange={(e) => setField("invoiceType", e.target.value)}
              className={inputClass(errors.invoiceType)}
            >
              <option value="">{t("kayitForm.select")}</option>
              <option value="individual">{t("kayitForm.invoiceIndividual")}</option>
              <option value="corporate">{t("kayitForm.invoiceCorporate")}</option>
            </select>
            {errors.invoiceType && <p className={errorClass}>{errors.invoiceType}</p>}
          </div>

          <div>
            <label className={labelClass}>{t("kayitForm.idNumber")}</label>
            <input
              type="text"
              name="id-number"
              autoComplete="off"
              value={data.idNumber}
              onChange={(e) => {
                const val = e.target.value;
                // If user starts typing digits, enforce digits-only
                if (/^\d/.test(val) && !/^\d*$/.test(val)) return;
                setField("idNumber", val);
              }}
              placeholder={t("kayitForm.idPlaceholder")}
              className={inputClass(errors.idNumber)}
            />
            {errors.idNumber && <p className={errorClass}>{errors.idNumber}</p>}
          </div>

          <div>
            <label className={labelClass}>{t("kayitForm.address")}</label>
            <textarea
              name="address"
              autoComplete="street-address"
              rows={3}
              value={data.address}
              onChange={(e) => setField("address", e.target.value)}
              placeholder={t("kayitForm.addressPlaceholder")}
              className={cn(inputClass(errors.address), "resize-none")}
            />
            {errors.address && <p className={errorClass}>{errors.address}</p>}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <label className={labelClass + " mb-0"}>{t("kayitForm.receipt")}</label>
              <button
                type="button"
                onClick={() => setShowReceiptInfo(!showReceiptInfo)}
                className="p-1 rounded-full text-sage-400 hover:text-sage-600 hover:bg-sage-100 transition-colors"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
            {showReceiptInfo && (
              <div className="mb-3 rounded-xl bg-sage-50 border border-sage-100 p-4 animate-fade-in">
                <p className="text-xs text-sage-500 mb-2">{t("kayitForm.receiptInfoText")}</p>
                <p className="text-sm font-mono font-semibold text-sage-700">{t("kaydolPage.iban")}</p>
                <p className="text-sm text-sage-600 mt-1">{t("kaydolPage.ibanName")}</p>
              </div>
            )}
            <p className="text-xs text-sage-400 mb-2">{t("kayitForm.receiptHint")}</p>
            <div
              onClick={() => !isUploading && fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={cn(
                "cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-all",
                isDragging && "border-sage-500 bg-sage-50 scale-[1.01]",
                errors.receipt
                  ? "border-red-300 hover:border-red-400"
                  : data.receipt
                    ? "border-sage-400 bg-sage-50"
                    : "border-sage-200 hover:border-sage-300 hover:bg-sage-50",
                isUploading && "pointer-events-none opacity-70"
              )}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
                className="hidden"
              />
              {isUploading ? (
                <div className="flex flex-col items-center gap-2 text-sage-500">
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span className="text-sm font-medium">{t("kayitForm.receiptUploading")}</span>
                </div>
              ) : data.receipt ? (
                <div className="flex items-center justify-center gap-2 text-sage-600">
                  {data.receiptUrl ? (
                    <FileCheck2 className="w-5 h-5 text-sage-500" />
                  ) : (
                    <FileCheck2 className="w-5 h-5" />
                  )}
                  <span className="text-sm font-medium">{data.receipt.name}</span>
                  {data.receiptUrl && (
                    <span className="text-xs text-sage-400 ml-1">({t("kayitForm.receiptUploaded")})</span>
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFileChange(null);
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
                    className="ml-1 p-0.5 rounded hover:bg-sage-100 transition-colors"
                  >
                    <X className="w-3.5 h-3.5 text-sage-400" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 text-sage-400">
                  <Upload className="w-6 h-6" />
                  <span className="text-sm">{t("kayitForm.receiptDrop")}</span>
                </div>
              )}
            </div>
            {errors.receipt && <p className={errorClass}>{errors.receipt}</p>}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between pt-2">
        {step > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl text-sm font-medium text-sage-600 hover:bg-sage-50 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            {t("kayitForm.back")}
          </button>
        ) : (
          <div />
        )}

        {step < 3 ? (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl text-sm font-semibold bg-sage-600 text-cream-50 hover:bg-sage-700 transition-all shadow-sm hover:shadow-md"
          >
            {t("kayitForm.next")}
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting || isUploading}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-sage-600 text-cream-50 hover:bg-sage-700 transition-all shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <MessageCircle className="w-4 h-4" />
            )}
            {t("kayitForm.submit")}
          </button>
        )}
      </div>
    </div>
  );
}
