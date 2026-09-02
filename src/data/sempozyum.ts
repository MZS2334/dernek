// ============================================================
// SEMPOZYUM VERİ DOSYASI
// ============================================================
// Sempozyum bilgilerini güncellemek için aşağıdaki alanları düzenleyin.
//
// ALANLAR:
//   info:        Sempozyum genel bilgileri (tarih, mekan, konuşmacılar, katılım)
//   topics:      Ana odak alanları (kartlar halinde gösterilir)
//   description: Sempozyum açıklaması (PageHeader altında gösterilir)
//
// "Yakında açıklanacak" yazısını gerçek bilgilerle değiştirmek için
// ilgili alanın değerini güncelleyin.
// ============================================================

export interface SempozyumInfo {
  date: { tr: string; en?: string };
  location: { tr: string; en?: string };
  speakers: { tr: string; en?: string };
  participation: { tr: string; en?: string };
}

export interface SempozyumTopic {
  icon: string;
  title: { tr: string; en?: string };
  description: { tr: string; en?: string };
}

export interface SempozyumData {
  description: { tr: string; en?: string };
  info: SempozyumInfo;
  topics: SempozyumTopic[];
}

const sempozyum: SempozyumData = {
  description: {
    tr: "Beslenme psikolojisi alanında bilimsel üretimi desteklemek ve disiplinler arası iş birliğini güçlendirmek amacıyla düzenlenen sempozyum.",
    en: "A symposium organized to support scientific production in the field of nutrition psychology and to strengthen interdisciplinary collaboration.",
  },
  info: {
    date: { tr: "Yakında açıklanacak", en: "To be announced" },
    location: { tr: "Yakında açıklanacak", en: "To be announced" },
    speakers: { tr: "Yakında açıklanacak", en: "To be announced" },
    participation: { tr: "Yakında açıklanacak", en: "To be announced" },
  },
  topics: [
    {
      icon: "Brain",
      title: { tr: "Nörobilim & Sinir Sistemi", en: "Neuroscience & Nervous System" },
      description: {
        tr: "Sinir sistemi regülasyonu, duygu düzenleme ve yeme davranışı arasındaki ilişki",
        en: "The relationship between nervous system regulation, emotion regulation, and eating behavior",
      },
    },
    {
      icon: "Heart",
      title: { tr: "Travma Duyarlı Yaklaşım", en: "Trauma-Informed Approach" },
      description: {
        tr: "Travma ve beden güvenliği bağlamında beslenme davranışının ele alınması",
        en: "Addressing nutritional behavior in the context of trauma and body safety",
      },
    },
    {
      icon: "Leaf",
      title: { tr: "Bütüncül Beslenme Psikolojisi", en: "Holistic Nutrition Psychology" },
      description: {
        tr: "Biyolojik, psikolojik ve sosyal süreçlerin bütüncül bir bakışla değerlendirilmesi",
        en: "Evaluating biological, psychological, and social processes through a holistic perspective",
      },
    },
  ],
};

export default sempozyum;
