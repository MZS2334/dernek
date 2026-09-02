// ============================================================
// ETKİNLİKLER VERİ DOSYASI
// ============================================================
// Yeni etkinlik eklemek için:
// 1. Aşağıdaki örnek nesneyi kopyalayın
// 2. { ... } içindeki bilgileri kendi etkinliğinizle doldurun
// 3. Virgülle birbirinden ayırdığınızdan emin olun
//
// ALANLAR:
//   id:          Benzersiz bir kimlik (türkçe karakter olmadan, tire ile)
//   title:       { tr: "Türkçe başlık", en: "English title" }
//                en alanı opsiyoneldir — eklenmezsa Türkçe gösterilir
//   type:        { tr: "Eğitim", en: "Training" }
//   date:        Tarih (YYYY-AA-GG formatında, ör: 2025-09-15)
//   time:        Saat (ör: "10:00")
//   location:    Mekan / şehir (dil değişmez)
//   description: { tr: "Türkçe açıklama", en: "English description" }
//   details:     { tr: "Türkçe detay", en: "English details" }
//   status:      "yayinda" (aktif göster) veya "yakinda" (yakında badge'i)
// ============================================================

export interface Etkinlik {
  id: string;
  title: { tr: string; en?: string };
  type: { tr: string; en?: string };
  date: string;
  time: string;
  location: string;
  description: { tr: string; en?: string };
  details: { tr: string; en?: string };
  status: "yayinda" | "yakinda";
}

const etkinlikler: Etkinlik[] = [
  // --- Yeni etkinlikleri buraya ekleyin ---
  {
    id: "ornek-etkinlik-1",
    title: { tr: "Örnek Etkinlik Başlığı", en: "Sample Event Title" },
    type: { tr: "Eğitim", en: "Training" },
    date: "2025-09-15",
    time: "10:00",
    location: "İstanbul",
    description: {
      tr: "Bu örnek bir etkinliktir. Gerçek etkinlik eklemek için bu nesneyi kopyalayıp düzenleyin.",
      en: "This is a sample event. Copy and edit this object to add a real event.",
    },
    details: {
      tr: "Etkinlik detayları buraya yazılır. Kullanıcı etkinlik kartına tıkladığında bu alan bir pencerede görüntülenir. İçeriği istediğiniz kadar uzun yazabilirsiniz.",
      en: "Event details go here. When the user clicks the event card, this field is displayed in a modal. You can write as much content as you want.",
    },
    status: "yakinda",
  },
  // --- Örnek etkinliği silmek için yukarıdaki nesneyi kaldırın ---
];

export default etkinlikler;
