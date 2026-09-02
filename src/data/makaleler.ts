// ============================================================
// MAKALELER VERİ DOSYASI
// ============================================================
// Yeni makale eklemek için:
// 1. Aşağıdaki örnek nesneyi kopyalayın
// 2. { ... } içindeki bilgileri kendi makalenizle doldurun
// 3. Virgülle birbirinden ayırdığınızdan emin olun
//
// ALANLAR:
//   id:          Benzersiz bir kimlik (türkçe karakter olmadan, tire ile)
//   title:       { tr: "Türkçe başlık", en: "English title" }
//                en alanı opsiyoneldir — eklenmezsa Türkçe gösterilir
//   category:    { tr: "Nörobilim", en: "Neuroscience" }
//   date:        Yayın tarihi (YYYY-AA-GG formatında, ör: 2025-09-15)
//   author:      Yazar adı (dil değişmez)
//   excerpt:     { tr: "Türkçe özet", en: "English excerpt" }
//   content:     { tr: "Türkçe içerik", en: "English content" }
//                Satır sonları için \n kullanın
//   status:      "yayinda" (aktif göster) veya "yakinda" (yakında badge'i)
// ============================================================

export interface Makale {
  id: string;
  title: { tr: string; en?: string };
  category: { tr: string; en?: string };
  date: string;
  author: string;
  excerpt: { tr: string; en?: string };
  content: { tr: string; en?: string };
  status: "yayinda" | "yakinda";
}

const makaleler: Makale[] = [
  // --- Yeni makaleleri buraya ekleyin ---
  {
    id: "ornek-makale-1",
    title: { tr: "Örnek Makale Başlığı", en: "Sample Article Title" },
    category: { tr: "Nörobilim", en: "Neuroscience" },
    date: "2025-09-15",
    author: "Uzm. Klinik Psikolog Gülçin Sanlı",
    excerpt: {
      tr: "Bu örnek bir makaledir. Gerçek makale eklemek için bu nesneyi kopyalayıp düzenleyin.",
      en: "This is a sample article. Copy and edit this object to add a real article.",
    },
    content: {
      tr: "Makale içeriği buraya yazılır. Kullanıcı makale kartına tıkladığında bu alan bir pencerede görüntülenir.\n\nSatır sonu yapmak için \\n kullanabilirsiniz.",
      en: "Article content goes here. When the user clicks the article card, this field is displayed in a modal.\n\nUse \\n for line breaks.",
    },
    status: "yakinda",
  },
  {
    id: "ornek-makale-2",
    title: { tr: "Örnek Makale Başlığı", en: "Sample Article Title" },
    category: { tr: "Nörobilim", en: "Neuroscience" },
    date: "2025-09-15",
    author: "Uzm. Klinik Psikolog Gülçin Sanlı",
    excerpt: {
      tr: "Bu örnek bir makaledir. Gerçek makale eklemek için bu nesneyi kopyalayıp düzenleyin.",
      en: "This is a sample article. Copy and edit this object to add a real article.",
    },
    content: {
      tr: "Makale içeriği buraya yazılır. Kullanıcı makale kartına tıkladığında bu alan bir pencerede görüntülenir.\n\nSatır sonu yapmak için \\n kullanabilirsiniz.",
      en: "Article content goes here. When the user clicks the article card, this field is displayed in a modal.\n\nUse \\n for line breaks.",
    },
    status: "yakinda",
  },
  {
    id: "ornek-makale-3",
    title: { tr: "Örnek Makale Başlığı", en: "Sample Article Title" },
    category: { tr: "Nörobilim", en: "Neuroscience" },
    date: "2025-09-15",
    author: "Uzm. Klinik Psikolog Gülçin Sanlı",
    excerpt: {
      tr: "Bu örnek bir makaledir. Gerçek makale eklemek için bu nesneyi kopyalayıp düzenleyin.",
      en: "This is a sample article. Copy and edit this object to add a real article.",
    },
    content: {
      tr: "Makale içeriği buraya yazılır. Kullanıcı makale kartına tıkladığında bu alan bir pencerede görüntülenir.\n\nSatır sonu yapmak için \\n kullanabilirsiniz.",
      en: "Article content goes here. When the user clicks the article card, this field is displayed in a modal.\n\nUse \\n for line breaks.",
    },
    status: "yakinda",
  },
  {
    id: "ornek-makale-4",
    title: { tr: "Örnek Makale Başlığı", en: "Sample Article Title" },
    category: { tr: "Nörobilim", en: "Neuroscience" },
    date: "2025-09-15",
    author: "Uzm. Klinik Psikolog Gülçin Sanlı",
    excerpt: {
      tr: "Bu örnek bir makaledir. Gerçek makale eklemek için bu nesneyi kopyalayıp düzenleyin.",
      en: "This is a sample article. Copy and edit this object to add a real article.",
    },
    content: {
      tr: "Makale içeriği buraya yazılır. Kullanıcı makale kartına tıkladığında bu alan bir pencerede görüntülenir.\n\nSatır sonu yapmak için \\n kullanabilirsiniz.",
      en: "Article content goes here. When the user clicks the article card, this field is displayed in a modal.\n\nUse \\n for line breaks.",
    },
    status: "yakinda",
  },
  {
    id: "ornek-makale-5",
    title: { tr: "Örnek Makale Başlığı", en: "Sample Article Title" },
    category: { tr: "Nörobilim", en: "Neuroscience" },
    date: "2025-09-15",
    author: "Uzm. Klinik Psikolog Gülçin Sanlı",
    excerpt: {
      tr: "Bu örnek bir makaledir. Gerçek makale eklemek için bu nesneyi kopyalayıp düzenleyin.",
      en: "This is a sample article. Copy and edit this object to add a real article.",
    },
    content: {
      tr: "Makale içeriği buraya yazılır. Kullanıcı makale kartına tıkladığında bu alan bir pencerede görüntülenir.\n\nSatır sonu yapmak için \\n kullanabilirsiniz.",
      en: "Article content goes here. When the user clicks the article card, this field is displayed in a modal.\n\nUse \\n for line breaks.",
    },
    status: "yakinda",
  },
  // --- Örnek makaleyi silmek için yukarıdaki nesneyi kaldırın ---
];

export default makaleler;
