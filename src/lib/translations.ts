export type Lang = "tr" | "en";

type TranslationEntry = { tr: string; en: string };

type TranslationTree = {
  [key: string]: TranslationTree | TranslationEntry;
};

export const translations = {
  nav: {
    brandName: { tr: "Beslenme Psikolojisi", en: "Psychology of Nutrition" },
    brandSuffix: { tr: "Derneği", en: "Association" },
    hakkimizda: { tr: "Hakkımızda", en: "About Us" },
    egitim: { tr: "Beslenme Psikolojisi Eğitimi", en: "Nutrition Psychology Training" },
    sempozyum: { tr: "Sempozyum", en: "Symposium" },
    galeri: { tr: "Galeri", en: "Gallery" },
    makaleler: { tr: "Makaleler", en: "Articles" },
    etkinlikler: { tr: "Etkinlikler", en: "Events" },
    iletisim: { tr: "İletişim", en: "Contact" },
    kesfet: { tr: "Keşfet", en: "Explore" },
    kaydol: { tr: "Beslenme Psikolojisi Sempozyumu", en: "Nutritional Psychology Symposium" },
    menu: { tr: "Menü", en: "Menu" },
  },

  kaydolPage: {
    title: { tr: "Beslenme Psikolojisi Sempozyumu", en: "Nutritional Psychology Symposium" },
    subtitle: {
      tr: "Kayıt formunu doldurarak sempozyuma katılımınızı sağlayabilirsiniz.",
      en: "You can register for the symposium by filling out the registration form below.",
    },
    description: {
      tr: "Beslenme Psikolojisi Derneği'nin düzenlediği Bedene ve Beslenmeye Şefkat Sempozyumu, beslenmeye yalnızca davranışlar üzerinden değil; bedeni, duyguları ve insanı anlayan bütüncül bir bakışla yaklaşmayı amaçlıyor. İki gün sürecek sempozyumun ilk gününde alanında uzman isimlerin konuşmaları, ikinci gününde ise deneyim odaklı atölyeler yer alacak. Bedene, beslenmeye ve insana şefkatle yaklaşmak için bir araya geliyoruz.",
      en: "The Body and Nutrition Compassion Symposium, organized by the Nutritional Psychology Association, aims to approach nutrition not only through behaviors but with a holistic perspective that understands the body, emotions, and the person. The two-day symposium will feature talks by experts on the first day and experience-based workshops on the second day. We come together to approach the body, nutrition, and the person with compassion.",
    },
    formTitle: { tr: "Kaydol", en: "Sign Up" },
    pricingTitle: { tr: "Sempozyum Kayıt Ücretleri", en: "Symposium Registration Fees" },
    pricingSubtitle: {
      tr: "Katılımcılarımızı özel standart ve erken kayıt seçenekleri",
      en: "Special standard and early registration options for our participants",
    },
    pricingGroup: { tr: "Katılımcı Grubu", en: "Participant Group" },
    pricingStandard: { tr: "Standart Kayıt Ücreti", en: "Standard Registration Fee" },
    pricingEarly: { tr: "Erken Kayıt Ücreti", en: "Early Registration Fee" },
    pricingGeneral: { tr: "Genel Katılım", en: "General Participation" },
    pricingFreya: {
      tr: "Freya Psikoloji Beslenme Psikolojisi Eğitimi mezunları",
      en: "Freya Psychology Nutritional Psychology Training graduates",
    },
    pricingCv: { tr: "CV Akademi katılımcıları", en: "CV Academy participants" },
    pricingNote: {
      tr: "Erken kayıt ücretleri belirtilen tarihe kadar geçerlidir. Katılımcılar yalnızca kendilerine uygun olan tek bir kayıt kategorisinden yararlanabilir.",
      en: "Early registration fees are valid until the specified date. Participants can only benefit from one registration category that applies to them.",
    },
    pricingEarlyDate: { tr: "Erken kayıt tarihi 01.11.2026", en: "Early registration date: 01.11.2026" },
    ibanTitle: { tr: "IBAN Bilgileri", en: "IBAN Information" },
    iban: { tr: "IBAN: TR80 0015 7000 0000 0143 9307 70", en: "IBAN: TR80 0015 7000 0000 0143 9307 70" },
    ibanName: { tr: "Ad Soyad: Rabia Gülçin Sanlı Uyanık", en: "Name Surname: Rabia Gülçin Sanlı Uyanık" },
  },

  kayitForm: {
    step: { tr: "Adım", en: "Step" },
    step1Title: { tr: "Kişisel Bilgiler", en: "Personal Information" },
    step2Title: { tr: "Kurum & Tercihler", en: "Institution & Preferences" },
    step3Title: { tr: "Fatura & Ödeme", en: "Billing & Payment" },
    name: { tr: "Adı Soyadı", en: "Full Name" },
    namePlaceholder: { tr: "Örn: Ayşe Yılmaz", en: "E.g: Jane Smith" },
    email: { tr: "E-Posta Adresi", en: "Email Address" },
    emailPlaceholder: { tr: "mail@ornek.com", en: "mail@example.com" },
    phone: { tr: "Telefon Numarası", en: "Phone Number" },
    phonePlaceholder: { tr: "+90 5XX XXX XX XX", en: "+90 5XX XXX XX XX" },
    institution: { tr: "Okulu / Kurumu", en: "School / Institution" },
    institutionPlaceholder: {
      tr: "Örn: Sağlık Bilimleri Üniversitesi",
      en: "E.g: University of Health Sciences",
    },
    department: { tr: "Bölümü / Unvanı", en: "Department / Title" },
    departmentPlaceholder: {
      tr: "Örn: Ebelik Bölümü / Araştırma Görevlisi",
      en: "E.g: Midwifery Department / Research Assistant",
    },
    participationType: { tr: "Katılım Türü", en: "Participation Type" },
    participationInPerson: { tr: "Yüz Yüze", en: "In Person" },
    participationOnline: { tr: "Online", en: "Online" },
    participantGroup: { tr: "Katılımcı Grubu", en: "Participant Group" },
    groupFreya: {
      tr: "Freya Psikolojisi Beslenme Psikolojisi Eğitimi Mezunları",
      en: "Freya Psychology Nutritional Psychology Training Graduates",
    },
    groupCv: { tr: "CV Akademi Katılımcıları", en: "CV Academy Participants" },
    groupOther: { tr: "Diğer", en: "Other" },
    select: { tr: "Lütfen Seçiniz", en: "Please Select" },
    verificationCode: { tr: "Doğrulama Kodu", en: "Verification Code" },
    verificationCodePlaceholder: { tr: "Doğrulama kodunuzu giriniz", en: "Enter your verification code" },
    verificationCodeHint: { tr: "Seçtiğiniz katılımcı grubu için size iletilen doğrulama kodunu giriniz.", en: "Enter the verification code provided for your selected participant group." },
    yes: { tr: "Evet", en: "Yes" },
    no: { tr: "Hayır", en: "No" },
    receiptInfo: { tr: "Ödeme Bilgileri", en: "Payment Information" },
    receiptInfoText: {
      tr: "Ödemenizi aşağıdaki IBAN numarasına yapınız ve dekontunuzu yükleyiniz.",
      en: "Please make your payment to the IBAN below and upload your receipt.",
    },
    invoiceType: { tr: "Fatura Kesim Türü", en: "Invoice Type" },
    invoiceIndividual: {
      tr: "Faturayı adıma kesin (Bireysel)",
      en: "Issue invoice in my name (Individual)",
    },
    invoiceCorporate: {
      tr: "Faturayı kurum adına kesin (Kurumsal)",
      en: "Issue invoice to institution (Corporate)",
    },
    idNumber: { tr: "T.C. Kimlik / Pasaport No", en: "Turkish ID / Passport No" },
    idPlaceholder: { tr: "Örn: 12345678901", en: "E.g: 12345678901" },
    address: { tr: "Fatura Adresi", en: "Billing Address" },
    addressPlaceholder: {
      tr: "Örn: Barbaros Mah. Halk Cad. No:1 Kat:2 Üsküdar / İstanbul",
      en: "E.g: Barbaros St. No:1 Floor:2 Uskudar / Istanbul",
    },
    receipt: { tr: "Ödeme Dekontu (PDF, JPG, PNG - Maks 5MB)", en: "Payment Receipt (PDF, JPG, PNG - Max 5MB)" },
    receiptHint: {
      tr: "Ödemenizi yaptıktan sonra dekontunuzu (PDF veya Görsel) buraya yükleyiniz.",
      en: "After making your payment, upload your receipt (PDF or Image) here.",
    },
    receiptSelect: { tr: "Dosya Seç", en: "Choose File" },
    receiptEmpty: { tr: "Seçili dosya yok", en: "No file selected" },
    receiptDrop: {
      tr: "Dosyayı buraya sürükleyin veya tıklayarak seçin",
      en: "Drag file here or click to select",
    },
    receiptUploading: { tr: "Yükleniyor...", en: "Uploading..." },
    receiptUploaded: { tr: "Yüklendi", en: "Uploaded" },
    next: { tr: "Devam Et", en: "Continue" },
    back: { tr: "Geri", en: "Back" },
    submit: { tr: "WhatsApp ile Gönder", en: "Send via WhatsApp" },
    errors: {
      required: { tr: "Bu alan zorunludur.", en: "This field is required." },
      name: {
        tr: "Lütfen geçerli bir ad ve soyad giriniz (yalnızca harf).",
        en: "Please enter a valid first and last name (letters only).",
      },
      email: {
        tr: "Lütfen geçerli bir e-posta adresi giriniz.",
        en: "Please enter a valid email address.",
      },
      phone: {
        tr: "Lütfen geçerli bir telefon numarası giriniz (ülke kodu ile, örn: +90 5XX XXX XX XX).",
        en: "Please enter a valid phone number with country code (e.g: +90 5XX XXX XX XX).",
      },
      institution: {
        tr: "Lütfen geçerli bir kurum adı giriniz.",
        en: "Please enter a valid institution name.",
      },
      department: {
        tr: "Lütfen geçerli bir bölüm/unvan giriniz.",
        en: "Please enter a valid department/title.",
      },
      id: {
        tr: "Lütfen geçerli bir T.C. Kimlik No (11 hane) veya Pasaport No giriniz.",
        en: "Please enter a valid Turkish ID (11 digits) or Passport number.",
      },
      idNumbersOnly: {
        tr: "T.C. Kimlik No yalnızca rakamlardan oluşur.",
        en: "Turkish ID number must contain digits only.",
      },
      address: {
        tr: "Lütfen en az 10 karakterlik geçerli bir adres giriniz.",
        en: "Please enter a valid address of at least 10 characters.",
      },
      fileType: {
        tr: "Yalnızca PDF, JPG veya PNG dosyası yükleyebilirsiniz.",
        en: "Only PDF, JPG or PNG files are allowed.",
      },
      fileSize: {
        tr: "Dosya boyutu 5MB'ı aşamaz.",
        en: "File size cannot exceed 5MB.",
      },
      receiptUploadError: {
        tr: "Dosya yüklenirken bir hata oluştu. Lütfen tekrar deneyin.",
        en: "An error occurred while uploading the file. Please try again.",
      },
      capacityFull: {
        tr: "Yüz yüze katılım kontenjanı (200 kişi) dolmuştur. Lütfen online katılımı seçiniz.",
        en: "In-person participation capacity (200 people) is full. Please select online participation.",
      },
      verificationCode: {
        tr: "Lütfen doğrulama kodunuzu giriniz.",
        en: "Please enter your verification code.",
      },
    },
    labels: {
      name: { tr: "Adı Soyadı", en: "Full Name" },
      email: { tr: "E-Posta", en: "Email" },
      phone: { tr: "Telefon", en: "Phone" },
      institution: { tr: "Okul / Kurum", en: "School / Institution" },
      department: { tr: "Bölüm / Unvan", en: "Department / Title" },
      participationType: { tr: "Katılım Türü", en: "Participation Type" },
      participantGroup: { tr: "Katılımcı Grubu", en: "Participant Group" },
      invoiceType: { tr: "Fatura Türü", en: "Invoice Type" },
      idNumber: { tr: "Kimlik / Pasaport No", en: "ID / Passport No" },
      address: { tr: "Fatura Adresi", en: "Billing Address" },
      receipt: { tr: "Dekont", en: "Receipt" },
      title: { tr: "Yeni Kayıt Talebi", en: "New Registration Request" },
      verificationCode: { tr: "Doğrulama Kodu", en: "Verification Code" },
    },
  },

  footer: {
    description: {
      tr: "Beslenme davranışını bedeni, zihni, duyguları, sinir sistemi ve yaşam öyküsüyle bütüncül ele alan bilimsel bir meslek derneği.",
      en: "A professional scientific association that addresses nutritional behavior holistically, integrating body, mind, emotions, nervous system, and life narrative.",
    },
    pages: { tr: "Sayfalar", en: "Pages" },
    contact: { tr: "İletişim", en: "Contact" },
    rights: {
      tr: "Tüm hakları saklıdır.",
      en: "All rights reserved.",
    },
    developedBy: {
      tr: "Erdoai Technology tarafından geliştirilmiştir",
      en: "Developed by Erdoai Technology",
    },
  },

  home: {
    hero: {
      badge: { tr: "Beslenme Psikolojisi Derneği", en: "Psychology of Nutrition Association" },
      title: {
        tr: "Beslenmeyi beden, zihin ve duygularla bütüncül ele alan bir bakış açısı",
        en: "A holistic perspective addressing nutrition through body, mind, and emotions",
      },
      description: {
        tr: "Beslenme davranışının yalnızca irade, bilgi ya da kalori hesabıyla açıklanamayacağına; biyolojik, psikolojik ve sosyal süreçlerin birbiriyle sürekli etkileşim içinde olduğuna inanıyoruz.",
        en: "We believe that nutritional behavior cannot be explained solely by willpower, knowledge, or calorie counting; rather, biological, psychological, and social processes are in constant interaction with one another.",
      },
      ctaPrimary: { tr: "Bizi Tanıyın", en: "Get to Know Us" },
      ctaSecondary: { tr: "Eğitim Programı", en: "Training Program" },
    },
    values: {
      title: { tr: "Değerlerimiz", en: "Our Values" },
      subtitle: { tr: "Çalışmalarımızı şekillendiren temel ilkeler", en: "The core principles shaping our work" },
      sefkat: { tr: "Şefkat", en: "Compassion" },
      sefkatDesc: {
        tr: "Çalışmalarımızın merkezinde şefkat ve insan onuruna saygı yer alır.",
        en: "Compassion and respect for human dignity are at the center of our work.",
      },
      bilimsel: { tr: "Bilimsel Yaklaşım", en: "Scientific Approach" },
      bilimselDesc: {
        tr: "Güncel araştırmaları takip ederek bilimsel bilgi üretir ve alana kazandırırız.",
        en: "We follow current research to produce and contribute scientific knowledge to the field.",
      },
      etik: { tr: "Etik İlkeler", en: "Ethical Principles" },
      etikDesc: {
        tr: "Etik değerlere bağlı, şeffaf ve katılımcı bir yönetim anlayışını benimseriz.",
        en: "We adopt a governance approach committed to ethical values, transparency, and participation.",
      },
      disiplin: { tr: "Disiplinler Arası", en: "Interdisciplinary" },
      disiplinDesc: {
        tr: "Farklı disiplinlerden uzmanların ortak bir bilimsel zeminde buluşmasını destekleriz.",
        en: "We support experts from different disciplines coming together on a shared scientific platform.",
      },
    },
    mission: {
      title: { tr: "Misyonumuz", en: "Our Mission" },
      text: {
        tr: "Beslenme psikolojisi alanında bilimsel bilgi üretmek, nitelikli meslek profesyonelleri yetiştirmek ve toplumda beslenme davranışına ilişkin farkındalığı artırmak. Etik değerlere bağlı ve yaşam boyu öğrenmeyi önemseyen bir anlayışla ülkemizde alana öncülük etmek.",
        en: "To produce scientific knowledge in the field of nutrition psychology, train qualified professionals, and raise public awareness about nutritional behavior. To pioneer the field in our country with an approach committed to ethical values and lifelong learning.",
      },
    },
    vision: {
      title: { tr: "Vizyonumuz", en: "Our Vision" },
      text: {
        tr: "Beslenme psikolojisi alanında ulusal ve uluslararası düzeyde referans kabul edilen, akreditasyon standartlarını oluşturan ve disiplinler arası iş birliklerine öncülük eden saygın bir meslek derneği olmak. Geleceğin uygulayıcılarını yetiştiren öncü bir merkez olmak.",
        en: "To be a respected professional association that is recognized nationally and internationally in the field of nutrition psychology, establishes accreditation standards, and leads interdisciplinary collaborations. To be a pioneering center that trains the practitioners of the future.",
      },
    },
    stats: {
      founding: { tr: "Kuruluş Yılı", en: "Founding Year" },
      program: { tr: "Eğitim Programı", en: "Training Program" },
      boards: { tr: "Çalışma Kurulu", en: "Working Boards" },
      learning: { tr: "Yaşam Boyu Öğrenme", en: "Lifelong Learning" },
    },
    explore: {
      title: { tr: "Keşfedin", en: "Explore" },
      subtitle: {
        tr: "Derneğimizin faaliyet alanları ve içerikleri hakkında daha fazla bilgi edinin",
        en: "Learn more about our association's areas of activity and content",
      },
      hakkimizdaTitle: { tr: "Hakkımızda", en: "About Us" },
      hakkimizdaDesc: {
        tr: "Felsefemiz, misyonumuz, vizyonumuz ve kurucumuz Gülçin Sanlı",
        en: "Our philosophy, mission, vision, and founder Gülçin Sanlı",
      },
      egitimTitle: { tr: "Beslenme Psikolojisi Eğitimi", en: "Nutrition Psychology Training" },
      egitimDesc: { tr: "BPU eğitim programı ve bilgi kitapçığı", en: "BPU training program and information booklet" },
      sempozyumTitle: { tr: "Sempozyum", en: "Symposium" },
      sempozyumDesc: {
        tr: "Beslenme Psikolojisi Sempozyumu hakkında bilgiler",
        en: "Information about the Nutrition Psychology Symposium",
      },
      galeriTitle: { tr: "Galeri", en: "Gallery" },
      galeriDesc: { tr: "Dernek etkinliklerinden kareler", en: "Moments from association events" },
      makalelerTitle: { tr: "Makaleler", en: "Articles" },
      makalelerDesc: {
        tr: "Alanla ilgili bilimsel makaleler ve yazılar",
        en: "Scientific articles and writings related to the field",
      },
      etkinliklerTitle: { tr: "Etkinlikler", en: "Events" },
      etkinliklerDesc: {
        tr: "Yaklaşan eğitim, seminer ve etkinlikler",
        en: "Upcoming training sessions, seminars, and events",
      },
      discover: { tr: "Keşfet", en: "Explore" },
    },
    educationSection: {
      badge: { tr: "BPU Eğitim Programı", en: "BPU Training Program" },
      title: { tr: "Beslenme Psikolojisi Eğitimi", en: "Nutrition Psychology Training" },
      description: {
        tr: "Psikologlar, psikolojik danışmanlar, diyetisyenler ve alan öğrencilerine yönelik kapsamlı bir mesleki gelişim programı. Nörobilim, somatik psikoloji, sinir sistemi regülasyonu, duygu düzenleme ve yeme davranışı arasındaki ilişki disiplinler arası bir bakışla ele alınır.",
        en: "A comprehensive professional development program for psychologists, psychological counselors, dietitians, and students in the field. The relationship between neuroscience, somatic psychology, nervous system regulation, emotion regulation, and eating behavior is addressed through an interdisciplinary perspective.",
      },
      detailBtn: { tr: "Detaylı Bilgi", en: "Detailed Information" },
      downloadBtn: { tr: "Kitapçığı İndir", en: "Download Booklet" },
      targetTitle: { tr: "Hedef Kitle", en: "Target Audience" },
      targetDesc: {
        tr: "Psikologlar, psikolojik danışmanlar, diyetisyenler ve alan öğrencileri",
        en: "Psychologists, psychological counselors, dietitians, and students in the field",
      },
      holisticTitle: { tr: "Bütüncül Yaklaşım", en: "Holistic Approach" },
      holisticDesc: {
        tr: "Sinir sistemi, duygular, bağlanma ilişkileri ve yaşam deneyimleriyle birlikte ele alan bütüncül bir bakış açısı",
        en: "A holistic perspective that integrates the nervous system, emotions, attachment relationships, and life experiences",
      },
      traumaTitle: { tr: "Travma Duyarlı", en: "Trauma-Informed" },
      traumaDesc: {
        tr: "Bireylerin bedenleriyle daha güvenli bir ilişki kurmalarına katkı sağlayan sinir sistemi odaklı yaklaşım",
        en: "A nervous-system-oriented approach that helps individuals build a safer relationship with their bodies",
      },
    },
    faq: {
      title: { tr: "Sık Sorulan Sorular", en: "Frequently Asked Questions" },
      subtitle: { tr: "Merak edilenler hakkında kısa yanıtlar", en: "Brief answers to common questions" },
    },
    contact: {
      title: { tr: "İletişim", en: "Contact" },
      subtitle: {
        tr: "Bizimle iletişime geçmekten çekinmeyin. Sorularınız ve iş birlikleri için aşağıdaki kanalları kullanabilirsiniz.",
        en: "Please do not hesitate to contact us. You can use the following channels for inquiries and collaborations.",
      },
      phone: { tr: "Telefon", en: "Phone" },
      instagram: { tr: "Instagram", en: "Instagram" },
      email: { tr: "E-posta", en: "Email" },
      address: { tr: "Adres", en: "Address" },
      addressValue: { tr: "İstanbul, Türkiye", en: "Istanbul, Türkiye" },
    },
  },

  about: {
    title: { tr: "Hakkımızda", en: "About Us" },
    subtitle: {
      tr: "Beslenme Psikolojisi Derneği olarak insanı yalnızca beslenme davranışlarıyla değil; bedeni, zihni, duyguları, sinir sistemi, yaşam öyküsü ve ilişkileriyle birlikte ele alıyoruz.",
      en: "As the Psychology of Nutrition Association, we address the individual not solely through nutritional behavior, but holistically — encompassing body, mind, emotions, nervous system, life narrative, and relationships.",
    },
    philosophy: {
      title: { tr: "Felsefemiz", en: "Our Philosophy" },
      p1: {
        tr: "Beslenme Psikolojisi Derneği olarak insanı yalnızca beslenme davranışlarıyla değil; bedeni, zihni, duyguları, sinir sistemi, yaşam öyküsü ve ilişkileriyle birlikte ele alıyoruz.",
        en: "As the Psychology of Nutrition Association, we address the individual not solely through nutritional behavior, but holistically — encompassing body, mind, emotions, nervous system, life narrative, and relationships.",
      },
      p2: {
        tr: "Beslenme davranışının yalnızca irade, bilgi ya da kalori hesabıyla açıklanamayacağına; biyolojik, psikolojik ve sosyal süreçlerin birbiriyle sürekli etkileşim içinde olduğuna inanıyoruz. Bu nedenle çalışmalarımızın merkezine şefkati, bilimsel yaklaşımı, etik ilkeleri ve disiplinler arası iş birliğini yerleştiriyoruz.",
        en: "We believe that nutritional behavior cannot be explained solely by willpower, knowledge, or calorie counting; rather, biological, psychological, and social processes are in constant interaction. Therefore, we place compassion, scientific approach, ethical principles, and interdisciplinary collaboration at the center of our work.",
      },
      p3: {
        tr: "Amacımız, bireylerin bedenleriyle daha güvenli bir ilişki kurmalarına katkı sağlayan, güncel bilimsel bilgiler ışığında çalışan, travma duyarlı ve sinir sistemi odaklı bir bakış açısını yaygınlaştırmaktır.",
        en: "Our aim is to promote a trauma-informed and nervous-system-oriented perspective that helps individuals build a safer relationship with their bodies, guided by current scientific knowledge.",
      },
    },
    mission: {
      title: { tr: "Misyonumuz", en: "Our Mission" },
      p1: {
        tr: "Beslenme psikolojisi alanında bilimsel bilgi üretmek, güncel araştırmaları takip ederek alana kazandırmak ve nitelikli meslek profesyonelleri yetiştirmek temel misyonumuzdur.",
        en: "Our core mission is to produce scientific knowledge in the field of nutrition psychology, to follow and contribute current research, and to train qualified professionals.",
      },
      p2: {
        tr: "Farklı disiplinlerden uzmanların ortak bir dil geliştirmesini destekleyen eğitimler, süpervizyonlar, bilimsel etkinlikler ve sosyal sorumluluk projeleri yürütür; toplumda beslenme davranışına ilişkin farkındalığı artırmayı hedefleriz.",
        en: "We conduct training, supervision, scientific events, and social responsibility projects that support experts from different disciplines in developing a shared language; we aim to raise public awareness regarding nutritional behavior.",
      },
      p3: {
        tr: "Etik değerlere bağlı, insan onurunu merkeze alan ve yaşam boyu öğrenmeyi önemseyen bir anlayışla, beslenme psikolojisinin ülkemizde gelişimine öncülük etmeyi amaçlarız.",
        en: "With an approach committed to ethical values, centered on human dignity, and valuing lifelong learning, we aim to pioneer the development of nutrition psychology in our country.",
      },
    },
    vision: {
      title: { tr: "Vizyonumuz", en: "Our Vision" },
      p1: {
        tr: "Beslenme psikolojisi alanında ulusal ve uluslararası düzeyde referans kabul edilen, bilimsel üretimi destekleyen, akreditasyon standartlarını oluşturan ve disiplinler arası iş birliklerine öncülük eden saygın bir meslek derneği olmak.",
        en: "To be a respected professional association that is recognized nationally and internationally in the field of nutrition psychology, supports scientific production, establishes accreditation standards, and leads interdisciplinary collaborations.",
      },
      p2: {
        tr: "Beslenme psikolojisinin koruyucu ruh sağlığı, klinik uygulamalar, gebelik ve doğum, çocuk gelişimi, eğitim ve toplum sağlığı gibi farklı alanlarda bilimsel temellerle yaygınlaşmasına katkı sağlayarak, geleceğin uygulayıcılarını yetiştiren öncü bir merkez olmayı hedefliyoruz.",
        en: "We aim to be a pioneering center that trains future practitioners by contributing to the scientifically grounded expansion of nutrition psychology across diverse areas such as preventive mental health, clinical practice, pregnancy and childbirth, child development, education, and public health.",
      },
    },
    org: {
      title: { tr: "Organizasyon Yapısı", en: "Organizational Structure" },
      p1: {
        tr: "Beslenme Psikolojisi Derneği, beslenme psikolojisi alanında bilimsel üretimi desteklemek, eğitim standartlarını geliştirmek ve disiplinler arası iş birliğini güçlendirmek amacıyla Uzm. Klinik Psikolog Gülçin Sanlı tarafından kurulmuştur.",
        en: "The Psychology of Nutrition Association was founded by Clinical Psychologist Gülçin Sanlı to support scientific production in the field of nutrition psychology, develop educational standards, and strengthen interdisciplinary collaboration.",
      },
      p2: {
        tr: "Dernek; Yönetim Kurulu, Denetim Kurulu, Bilim Kurulu ve çalışma komisyonları aracılığıyla faaliyetlerini yürütmektedir. Eğitim programları, bilimsel araştırmalar, akreditasyon süreçleri, süpervizyon çalışmaları ve toplumsal farkındalık projeleri, ilgili kurul ve komisyonların koordinasyonunda planlanmakta ve uygulanmaktadır.",
        en: "The association operates through its Board of Directors, Audit Board, Science Board, and working commissions. Educational programs, scientific research, accreditation processes, supervision studies, and public awareness projects are planned and implemented under the coordination of the respective boards and commissions.",
      },
      p3: {
        tr: "Beslenme Psikolojisi Derneği, farklı disiplinlerden uzmanların ortak bir bilimsel zeminde buluşmasını destekleyen, şeffaf, etik ve katılımcı bir yönetim anlayışını benimsemektedir.",
        en: "The Psychology of Nutrition Association adopts a transparent, ethical, and participatory governance approach that supports experts from different disciplines coming together on a shared scientific platform.",
      },
    },
    founder: {
      badge: { tr: "Kurucu", en: "Founder" },
      title: { tr: "Gülçin Sanlı Kimdir?", en: "Who is Gülçin Sanlı?" },
      role: { tr: "Uzm. Klinik Psikolog", en: "Clinical Psychologist" },
      p1: {
        tr: "Uzm. Klinik Psikolog Gülçin Sanlı, 2016 yılında Aydın Üniversitesi Psikoloji Bölümü'nden mezun olmuş, yüksek lisans eğitimini ise 2019 yılında Arel Üniversitesi Klinik Psikoloji Programı'nda tamamlamıştır.",
        en: "Clinical Psychologist Gülçin Sanlı graduated from the Department of Psychology at Aydın University in 2016 and completed her master's degree in the Clinical Psychology Program at Arel University in 2019.",
      },
      p2: {
        tr: "Meslek hayatının ilk yıllarında İnsan Sağlığı ve Eğitim Vakfı bünyesinde faaliyet gösteren Limon Ağacı Çocuk Danışma Merkezi'nde yaklaşık dört yıl görev almıştır. Bu süreçte çocuklarla gelişimsel değerlendirme çalışmaları yürütmüş, gelişim taramaları, zeka testleri ve terapötik uygulamalar gerçekleştirmiştir.",
        en: "In the early years of her career, she worked for approximately four years at the Lemon Tree Child Counseling Center, which operates under the Human Health and Education Foundation. During this period, she conducted developmental assessments with children, including developmental screenings, intelligence testing, and therapeutic interventions.",
      },
      p3: {
        tr: "2019 yılında kendi mesleki oluşumu olan Aykuşağı Enstitüsü'nü kurmuş, bu yapı daha sonra Freya Psikoloji adıyla çalışmalarına devam etmiştir. 2019 yılından bu yana psikologlar, psikolojik danışmanlar, diyetisyenler ve alan öğrencilerine yönelik eğitimler, süpervizyonlar ve mesleki gelişim programları yürütmektedir.",
        en: "In 2019, she founded her own professional organization, Aykuşağı Institute, which later continued its work under the name Freya Psychology. Since 2019, she has been conducting training, supervision, and professional development programs for psychologists, psychological counselors, dietitians, and students in the field.",
      },
      p4: {
        tr: "Çalışmalarının önemli bir bölümünü beslenme psikolojisi alanına ayıran Sanlı, bu alanda nörobilim, somatik psikoloji, sinir sistemi regülasyonu, duygu düzenleme ve yeme davranışı arasındaki ilişkiyi incelemektedir. Geliştirdiği eğitimlerde ve mesleki çalışmalarında beslenme davranışını yalnızca biyolojik bir süreç olarak değil; sinir sistemi, duygular, bağlanma ilişkileri ve yaşam deneyimleri ile birlikte ele alan bütüncül bir yaklaşım benimsemektedir.",
        en: "Devoting a significant portion of her work to the field of nutrition psychology, Sanlı investigates the relationship between neuroscience, somatic psychology, nervous system regulation, emotion regulation, and eating behavior. In her training and professional practice, she adopts a holistic approach that addresses nutritional behavior not merely as a biological process, but in conjunction with the nervous system, emotions, attachment relationships, and life experiences.",
      },
      p5: {
        tr: "İstanbul Psikodrama Enstitüsü'nden Psikodrama Eğitimi ve Gesellschaft für Neuropsychologie (GNP) klinik nöropsikoloji eğitimleri ile klinik bakışını güçlendirmiştir.",
        en: "She has strengthened her clinical perspective through Psychodrama Training from the Istanbul Psychodrama Institute and clinical neuropsychology training from the Gesellschaft für Neuropsychologie (GNP).",
      },
      p6: {
        tr: "Perinatal ve erken dönem gelişim alanında da uzmanlaşan Sanlı, İstanbul Doğum Akademisi'nden Doğuma Hazırlık Eğitmenliği, Doula Eğitimi ve Doğum Psikolojisi eğitimlerini tamamlamıştır. Ayrıca International Society for Pre and Perinatal Psychology and Medicine (ISPPM) kapsamında prenatal ve perinatal psikoloji alanında eğitimler almıştır.",
        en: "Specializing also in perinatal and early development, Sanlı completed Childbirth Preparation Instructor Training, Doula Training, and Birth Psychology training at the Istanbul Birth Academy. She has also received training in prenatal and perinatal psychology through the International Society for Pre and Perinatal Psychology and Medicine (ISPPM).",
      },
      p7: {
        tr: "Çalışmalarını yetişkin ruh sağlığı, beslenme psikolojisi, prenatal-perinatal psikoloji, ebeveynlik ve erken çocukluk gelişimi alanlarında sürdürmekte; eğitim, danışmanlık ve bilimsel içerik üretimi yoluyla alana katkı sunmaya devam etmektedir.",
        en: "She continues her work in adult mental health, nutrition psychology, prenatal-perinatal psychology, parenting, and early childhood development; she contributes to the field through education, counseling, and scientific content production.",
      },
    },
  },

  education: {
    title: { tr: "Beslenme Psikolojisi Eğitimi", en: "Nutrition Psychology Training" },
    subtitle: {
      tr: "BPU eğitim programı, beslenme psikolojisi alanında nitelikli meslek profesyonelleri yetiştirmek amacıyla tasarlanmıştır.",
      en: "The BPU training program is designed to train qualified professionals in the field of nutrition psychology.",
    },
    about: {
      title: { tr: "Eğitim Programı Hakkında", en: "About the Training Program" },
      p1: {
        tr: "Beslenme Psikolojisi Eğitimi (BPU), psikologlar, psikolojik danışmanlar, diyetisyenler ve alan öğrencilerine yönelik kapsamlı bir mesleki gelişim programıdır.",
        en: "The Nutrition Psychology Training (BPU) is a comprehensive professional development program designed for psychologists, psychological counselors, dietitians, and students in the field.",
      },
      p2: {
        tr: "Eğitim programı, beslenme davranışını yalnızca biyolojik bir süreç olarak değil; sinir sistemi, duygular, bağlanma ilişkileri ve yaşam deneyimleri ile birlikte ele alan bütüncül bir yaklaşım benimser. Nörobilim, somatik psikoloji, sinir sistemi regülasyonu, duygu düzenleme ve yeme davranışı arasındaki ilişki disiplinler arası bir bakışla ele alınır.",
        en: "The training program adopts a holistic approach that addresses nutritional behavior not merely as a biological process, but in conjunction with the nervous system, emotions, attachment relationships, and life experiences. The relationship between neuroscience, somatic psychology, nervous system regulation, emotion regulation, and eating behavior is examined through an interdisciplinary perspective.",
      },
    },
    target: { title: { tr: "Hedef Kitle", en: "Target Audience" }, desc: {
      tr: "Psikologlar, psikolojik danışmanlar, diyetisyenler ve alan öğrencileri",
      en: "Psychologists, psychological counselors, dietitians, and students in the field",
    }},
    duration: { title: { tr: "Süre", en: "Duration" }, desc: {
      tr: "Detaylı bilgi için eğitim kitapçığını inceleyebilirsiniz",
      en: "Please refer to the training booklet for detailed information",
    }},
    certificate: { title: { tr: "Sertifika", en: "Certificate" }, desc: {
      tr: "Eğitim sonunda Beslenme Psikolojisi Derneği sertifikası",
      en: "Psychology of Nutrition Association certificate upon completion",
    }},
    booklet: {
      badge: { tr: "BPU Bilgi Kitapçığı", en: "BPU Information Booklet" },
      title: { tr: "Eğitim Kitapçığını İnceleyin", en: "Review the Training Booklet" },
      desc: {
        tr: "Beslenme Psikolojisi Eğitimi hakkında detaylı bilgi, müfredat, başvuru koşulları ve tüm süreçler kitapçıkta yer almaktadır.",
        en: "Detailed information about the Nutrition Psychology Training, including the curriculum, application requirements, and all processes, is available in the booklet.",
      },
      download: { tr: "Kitapçığı İndir (PDF)", en: "Download Booklet (PDF)" },
    },
  },

  symposium: {
    title: { tr: "Beslenme Psikolojisi Sempozyumu", en: "Nutrition Psychology Symposium" },
    description: {
      tr: "Beslenme psikolojisi alanında bilimsel üretimi desteklemek ve disiplinler arası iş birliğini güçlendirmek amacıyla düzenlenen sempozyum.",
      en: "A symposium organized to support scientific production in the field of nutrition psychology and to strengthen interdisciplinary collaboration.",
    },
    focusBadge: { tr: "Ana Odak Alanları", en: "Key Focus Areas" },
    scopeTitle: { tr: "Sempozyum Kapsamı", en: "Symposium Scope" },
    scopeDesc: {
      tr: "Beslenme psikolojisinin farklı boyutlarını disiplinler arası bir bakışla ele alan bilimsel bir program hazırlanıyor",
      en: "A scientific program addressing the various dimensions of nutrition psychology through an interdisciplinary perspective is being prepared",
    },
    date: { tr: "Tarih", en: "Date" },
    venue: { tr: "Mekan", en: "Venue" },
    speakers: { tr: "Konuşmacılar", en: "Speakers" },
    participation: { tr: "Katılım", en: "Participation" },
    tba: { tr: "Yakında açıklanacak", en: "To be announced" },
    topics: {
      t1: { tr: "Nörobilim & Sinir Sistemi", en: "Neuroscience & Nervous System" },
      t1Desc: {
        tr: "Sinir sistemi regülasyonu, duygu düzenleme ve yeme davranışı arasındaki ilişki",
        en: "The relationship between nervous system regulation, emotion regulation, and eating behavior",
      },
      t2: { tr: "Travma Duyarlı Yaklaşım", en: "Trauma-Informed Approach" },
      t2Desc: {
        tr: "Travma ve beden güvenliği bağlamında beslenme davranışının ele alınması",
        en: "Addressing nutritional behavior in the context of trauma and body safety",
      },
      t3: { tr: "Bütüncül Beslenme Psikolojisi", en: "Holistic Nutrition Psychology" },
      t3Desc: {
        tr: "Biyolojik, psikolojik ve sosyal süreçlerin bütüncül bir bakışla değerlendirilmesi",
        en: "Evaluating biological, psychological, and social processes through a holistic perspective",
      },
    },
    cta: {
      title: {
        tr: "Sempozyum tarihleri açıklandığında ilk siz haberdar olun",
        en: "Be the first to know when symposium dates are announced",
      },
      desc: {
        tr: "Kayıt süreçleri, konuşmacı listesi ve program detayları yayınlandığında bilgilendirilmek için bizimle iletişime geçin.",
        en: "Contact us to be notified when registration processes, speaker list, and program details are published.",
      },
      btn: { tr: "Bilgilendirme İste", en: "Request Notifications" },
    },
  },

  gallery: {
    title: { tr: "Galeri", en: "Gallery" },
    subtitle: {
      tr: "Dernek etkinliklerinden, eğitimlerden ve sempozyumlardan kareler.",
      en: "Moments from association events, training sessions, and symposia.",
    },
    categories: {
      all: { tr: "Tümü", en: "All" },
      education: { tr: "Eğitimler", en: "Training" },
      symposium: { tr: "Sempozyum", en: "Symposium" },
      events: { tr: "Etkinlikler", en: "Events" },
      supervision: { tr: "Süpervizyon", en: "Supervision" },
    },
    photoPending: { tr: "Fotoğraf hazırlanıyor", en: "Photo coming soon" },
    comingSoon: { tr: "Yakında", en: "Coming Soon" },
    contentTitle: { tr: "Galeri İçeriği Hazırlanıyor", en: "Gallery Content Coming Soon" },
    contentDesc: {
      tr: "Eğitimlerimiz, sempozyumlarımız ve etkinliklerimizden fotoğraflar yakında bu sayfada yer alacaktır. Derneğimizin faaliyetlerinden haberdar olmak için bizi sosyal medyadan takip edebilirsiniz.",
      en: "Photographs from our training sessions, symposia, and events will soon be available on this page. Follow us on social media to stay informed about our association's activities.",
    },
    followInstagram: { tr: "Instagram'da Takip Et", en: "Follow on Instagram" },
  },

  articles: {
    title: { tr: "Makaleler", en: "Articles" },
    subtitle: {
      tr: "Beslenme psikolojisi alanında bilimsel makaleler, yazılar ve içerikler.",
      en: "Scientific articles, essays, and content in the field of nutrition psychology.",
    },
    topicBadge: { tr: "Konu Alanları", en: "Topic Areas" },
    scopeTitle: { tr: "İçerik Kapsamı", en: "Content Scope" },
    scopeDesc: {
      tr: "Beslenme psikolojisinin farklı boyutlarını ele alan bilimsel makaleler ve yazılar hazırlanıyor",
      en: "Scientific articles and essays addressing the various dimensions of nutrition psychology are being prepared",
    },
    topics: {
      t1: { tr: "Nörobilim & Sinir Sistemi", en: "Neuroscience & Nervous System" },
      t1Desc: {
        tr: "Sinir sistemi regülasyonu, duygu düzenleme ve yeme davranışı üzerine araştırmalar",
        en: "Research on nervous system regulation, emotion regulation, and eating behavior",
      },
      t2: { tr: "Travma & Beslenme", en: "Trauma & Nutrition" },
      t2Desc: {
        tr: "Travma duyarlı yaklaşım bağlamında beslenme davranışının incelenmesi",
        en: "Examining nutritional behavior within a trauma-informed framework",
      },
      t3: { tr: "Bütüncül Yaklaşım", en: "Holistic Approach" },
      t3Desc: {
        tr: "Biyolojik, psikolojik ve sosyal süreçlerin bütüncül değerlendirilmesi",
        en: "Holistic evaluation of biological, psychological, and social processes",
      },
    },
    comingSoon: { tr: "Yakında", en: "Coming Soon" },
    contentPending: { tr: "İçerik hazırlanıyor", en: "Content coming soon" },
    ctaTitle: { tr: "Bilimsel içeriklerimiz hazırlanıyor", en: "Our scientific content is being prepared" },
    ctaDesc: {
      tr: "Beslenme psikolojisi alanında güncel araştırmaları takip eden, disiplinler arası bakış açısıyla hazırlanan makaleler ve yazılar yakında bu sayfada yayınlanacaktır.",
      en: "Articles and essays prepared with an interdisciplinary perspective, following current research in the field of nutrition psychology, will soon be published on this page.",
    },
    ctaBtn: { tr: "İçeriklerden Haberdar Ol", en: "Stay Informed" },
    close: { tr: "Kapat", en: "Close" },
  },

  events: {
    title: { tr: "Etkinlikler", en: "Events" },
    subtitle: {
      tr: "Derneğimizin düzenlediği eğitimler, seminerler, süpervizyonlar ve bilimsel etkinlikler.",
      en: "Training sessions, seminars, supervisions, and scientific events organized by our association.",
    },
    typeBadge: { tr: "Etkinlik Tipleri", en: "Event Types" },
    scopeTitle: { tr: "Faaliyet Alanlarımız", en: "Our Areas of Activity" },
    scopeDesc: {
      tr: "Derneğimiz beslenme psikolojisi alanında farklı formatlarda bilimsel ve mesleki etkinlikler düzenlemektedir",
      en: "Our association organizes scientific and professional events in various formats within the field of nutrition psychology",
    },
    types: {
      t1: { tr: "Eğitimler", en: "Training" },
      t1Desc: {
        tr: "Psikologlar, psikolojik danışmanlar, diyetisyenler ve alan öğrencilerine yönelik mesleki gelişim programları",
        en: "Professional development programs for psychologists, psychological counselors, dietitians, and students in the field",
      },
      t2: { tr: "Seminerler", en: "Seminars" },
      t2Desc: {
        tr: "Beslenme psikolojisi alanında güncel araştırmaları paylaşan bilimsel seminerler ve sunumlar",
        en: "Scientific seminars and presentations sharing current research in the field of nutrition psychology",
      },
      t3: { tr: "Süpervizyon", en: "Supervision" },
      t3Desc: {
        tr: "Meslek profesyonellerine yönelik süpervizyon çalışmaları ve mesleki gelişim destekleri",
        en: "Supervision studies and professional development support for professionals",
      },
    },
    upcoming: { tr: "Yaklaşan Etkinlikler", en: "Upcoming Events" },
    upcomingDesc: {
      tr: "Planlanan etkinliklerimiz yakında bu sayfada duyurulacaktır",
      en: "Our planned events will be announced on this page soon",
    },
    comingSoon: { tr: "Yakında", en: "Coming Soon" },
    datePending: { tr: "Tarih yakında açıklanacak", en: "Date to be announced" },
    ctaTitle: {
      tr: "Etkinlik tarihleri açıklandığında ilk siz haberdar olun",
      en: "Be the first to know when event dates are announced",
    },
    ctaDesc: {
      tr: "Eğitimler, seminerler ve süpervizyon programları hakkında bilgilendirilmek için bizimle iletişime geçin.",
      en: "Contact us to be notified about training, seminars, and supervision programs.",
    },
    ctaBtn: { tr: "Bilgilendirme İste", en: "Request Notifications" },
    close: { tr: "Kapat", en: "Close" },
  },

  faq: {
    q1: { tr: "Beslenme psikolojisi nedir?", en: "What is nutrition psychology?" },
    a1: {
      tr: "Beslenme psikolojisi, beslenme davranışını yalnızca biyolojik bir süreç olarak değil; sinir sistemi, duygular, bağlanma ilişkileri ve yaşam deneyimleri ile birlikte ele alan bütüncül bir alandır. Beslenme davranışının irade, bilgi veya kalori hesabıyla tek başına açıklanamayacağı temel kabulünden yola çıkar.",
      en: "Nutrition psychology is a holistic field that addresses nutritional behavior not merely as a biological process, but in conjunction with the nervous system, emotions, attachment relationships, and life experiences. It is grounded in the premise that nutritional behavior cannot be explained solely by willpower, knowledge, or calorie counting.",
    },
    q2: { tr: "Eğitim programına kimler katılabilir?", en: "Who can participate in the training program?" },
    a2: {
      tr: "BPU eğitim programı psikologlar, psikolojik danışmanlar, diyetisyenler ve alan öğrencilerine yöneliktir. Farklı disiplinlerden uzmanların ortak bir bilimsel dil geliştirmesini destekleyen kapsamlı bir mesleki gelişim programıdır.",
      en: "The BPU training program is designed for psychologists, psychological counselors, dietitians, and students in the field. It is a comprehensive professional development program that supports experts from different disciplines in developing a shared scientific language.",
    },
    q3: { tr: "Dernek ne amaçla kurulmuştur?", en: "For what purpose was the association founded?" },
    a3: {
      tr: "Beslenme Psikolojisi Derneği, beslenme psikolojisi alanında bilimsel üretimi desteklemek, eğitim standartlarını geliştirmek ve disiplinler arası iş birliğini güçlendirmek amacıyla Uzm. Klinik Psikolog Gülçin Sanlı tarafından kurulmuştur.",
      en: "The Psychology of Nutrition Association was founded by Clinical Psychologist Gülçin Sanlı to support scientific production in the field of nutrition psychology, develop educational standards, and strengthen interdisciplinary collaboration.",
    },
    q4: { tr: "BPU eğitim kitapçığını nasıl edinebilirim?", en: "How can I obtain the BPU training booklet?" },
    a4: {
      tr: "BPU bilgi kitapçığını 'Beslenme Psikolojisi Eğitimi' sayfamızdan PDF olarak indirebilirsiniz. Kitapçıkta eğitim müfredatı, başvuru koşulları ve tüm süreçler hakkında detaylı bilgi yer almaktadır.",
      en: "You can download the BPU information booklet as a PDF from our 'Nutrition Psychology Training' page. The booklet contains detailed information about the training curriculum, application requirements, and all processes.",
    },
    q5: { tr: "Derneğin çalışma alanları nelerdir?", en: "What are the association's areas of work?" },
    a5: {
      tr: "Derneğimiz koruyucu ruh sağlığı, klinik uygulamalar, gebelik ve doğum, çocuk gelişimi, eğitim ve toplum sağlığı gibi farklı alanlarda beslenme psikolojisinin bilimsel temellerle yaygınlaşmasına katkı sağlamaktadır. Eğitimler, süpervizyonlar, bilimsel etkinlikler ve sosyal sorumluluk projeleri yürütmektedir.",
      en: "Our association contributes to the scientifically grounded expansion of nutrition psychology across diverse areas such as preventive mental health, clinical practice, pregnancy and childbirth, child development, education, and public health. It conducts training, supervision, scientific events, and social responsibility projects.",
    },
  },

  contactForm: {
    name: { tr: "Ad Soyad", en: "Full Name" },
    namePlaceholder: { tr: "Adınız ve soyadınız", en: "Your full name" },
    email: { tr: "E-posta", en: "Email" },
    subject: { tr: "Konu", en: "Subject" },
    subjectPlaceholder: { tr: "Mesaj konunuz", en: "Your message subject" },
    message: { tr: "Mesaj", en: "Message" },
    messagePlaceholder: { tr: "Mesajınızı buraya yazın...", en: "Write your message here..." },
    whatsapp: { tr: "WhatsApp ile Gönder", en: "Send via WhatsApp" },
    emailBtn: { tr: "E-posta ile Gönder", en: "Send via Email" },
    defaultSubject: { tr: "İletişim Formu", en: "Contact Form" },
    labels: {
      name: { tr: "Ad Soyad", en: "Full Name" },
      email: { tr: "E-posta", en: "Email" },
      subject: { tr: "Konu", en: "Subject" },
      message: { tr: "Mesaj", en: "Message" },
    },
  },

  pagination: {
    prev: { tr: "Önceki sayfa", en: "Previous page" },
    next: { tr: "Sonraki sayfa", en: "Next page" },
  },

  lightbox: {
    close: { tr: "Kapat", en: "Close" },
    prev: { tr: "Önceki", en: "Previous" },
    next: { tr: "Sonraki", en: "Next" },
  },
} as const;

export type TranslationKey = string;
