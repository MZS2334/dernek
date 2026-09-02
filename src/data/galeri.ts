// ============================================================
// GALERİ VERİ DOSYASI
// ============================================================
// Yeni görsel eklemek için:
// 1. Önce görselinizi /public/galeri/ klasörüne koyun
//    - JPG, PNG, JPEG veya WebP formatında olabilir
//    - Sistem görselleri otomatik olarak WebP'ye dönüştürür ve
//      optimize eder, bu yüzden formatı değiştirmenize gerek yok
//    - Büyük görseller (ör. telefonla çekilen 5MB foto) eklenebilir,
//      sistem otomatik olarak uygun boyuta küçültür
// 2. Aşağıdaki örnek nesneyi kopyalayın
// 3. { ... } içindeki bilgileri doldurun
//
// ALANLAR:
//   id:       Benzersiz bir kimlik (türkçe karakter olmadan, tire ile)
//   title:    { tr: "Türkçe başlık", en: "English title" }
//             en alanı opsiyoneldir — eklenmezsa Türkçe gösterilir
//   image:    Görsel yolu (/public klasörü içindeki yol)
//             Örnek: "/galeri/etkinlik-1.jpg"
//             NOT: Uzantı dosyanın gerçek uzantısıyla eşleşmeli
//   category: { tr: "Eğitimler", en: "Training" }
//             Kategori değerleri galeri sayfasındaki filtrelerle eşleşmeli
//   date:     Tarih (YYYY-AA-GG formatında, ör: 2025-09-15)
// ============================================================

export interface GaleriItem {
  id: string;
  title: { tr: string; en?: string };
  image: string;
  category: { tr: string; en?: string };
  date: string;
}

const galeri: GaleriItem[] = [
  // --- Yeni görselleri buraya ekleyin ---
  // Görsel eklemediğinizde sayfada otomatik olarak placeholder gösterilir
  // Örnek:
  // {
  //   id: "egitim-1",
  //   title: { tr: "BPU Eğitimi - 2025", en: "BPU Training - 2025" },
  //   image: "/galeri/egitim-1.jpg",
  //   category: { tr: "Eğitimler", en: "Training" },
  //   date: "2025-09-15",
  // },
];

export default galeri;
