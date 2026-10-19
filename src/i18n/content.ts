/**
 * All human-facing copy for the three locales. Structure is identical across
 * locales so a single set of components renders any language. Section and
 * feature `id`s are stable across locales (used to attach the right screenshot
 * and icon). Copy authored/refined by the trilingual content workflow.
 */
import type { Locale } from '@/site.config';

export interface Content {
  locale: Locale;
  dir: 'rtl' | 'ltr';
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  brand: { name: string; nameLatin: string; org: string };
  nav: { features: string; content: string; faq: string; download: string };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaHint: string;
    scanHint: string;
    freeLabel: string;
    platformsLabel: string;
  };
  trust: { items: { value: string; label: string }[] };
  showcase: { eyebrow: string; title: string; lead: string; bullets: string[] };
  sections: { id: 'rights' | 'masnad' | 'ziyarat' | 'sira'; eyebrow: string; title: string; body: string }[];
  featuresHeading: { title: string; subtitle: string };
  features: { id: 'hijri' | 'martyrs' | 'occasions' | 'darkmode' | 'wisdom' | 'library'; title: string; description: string }[];
  faqHeading: string;
  faq: { q: string; a: string }[];
  finalCta: { title: string; subtitle: string };
  footer: { tagline: string; rights: string };
  alt: {
    heroPhone: string;
    sahifaPhone: string;
    masnadPhone: string;
    rightsPhone: string;
    ziyaratPhone: string;
    siraPhone: string;
    appIcon: string;
  };
}

const ar: Content = {
  locale: 'ar',
  dir: 'rtl',
  seo: {
    title: 'أنوار سجادية | موسوعة الإمام السجاد (ع)',
    description:
      'حمّل تطبيق أنوار سجادية مجاناً: الصحيفة السجادية محققة ومشكلة، رسالة الحقوق، مسند الإمام وزياراته. متوفر على App Store وGoogle Play.',
    keywords: [
      'أنوار سجادية',
      'الصحيفة السجادية',
      'الإمام زين العابدين',
      'الإمام السجاد',
      'رسالة الحقوق',
      'مسند الإمام السجاد',
      'زيارات الإمام السجاد',
      'الصحيفة السجادية مشكولة',
      'أدعية أهل البيت',
      'السيرة العطرة للإمام السجاد',
      'تطبيق إسلامي مجاني',
      'الصحيفة السجادية محققة',
    ],
    ogTitle: 'أنوار سجادية | الموسوعة الجامعة للإمام السجاد (عليه السلام)',
    ogDescription:
      'الصحيفة السجادية محققة ومشكولة، رسالة الحقوق، مسند الإمام وزياراته وسيرته العطرة في تطبيق واحد مجاني بلا إعلانات. حمّله الآن من App Store وGoogle Play.',
  },
  brand: {
    name: 'أنوار سجادية',
    nameLatin: 'Anwar Sajjadiya',
    org: 'مؤسسة الإمام زين العابدين (عليه السلام)',
  },
  nav: { features: 'المزايا', content: 'المحتوى', faq: 'الأسئلة الشائعة', download: 'حمّل التطبيق' },
  hero: {
    eyebrow: 'موسوعة الإمام زين العابدين (عليه السلام)',
    title: 'مناجاة السجّاد (عليه السلام) بين يديك في كل حين',
    subtitle:
      'الصحيفة السجادية محققة ومشكولة، ورسالة الحقوق، ومسند الإمام وزياراته وسيرته العطرة، مجموعة في تطبيق واحد مجاني بلا إعلانات.',
    ctaHint: 'حمّل التطبيق مجاناً الآن',
    scanHint: 'امسح الرمز لتحميل التطبيق على جهازك',
    freeLabel: 'مجاني بالكامل',
    platformsLabel: 'متوفر لأجهزة iOS وAndroid',
  },
  trust: {
    items: [
      { value: 'مجاني بالكامل', label: 'بلا رسوم ولا اشتراكات مخفية' },
      { value: 'بلا إعلانات', label: 'تجربة قراءة صافية وخاشعة' },
      { value: 'نصوص محققة', label: 'مقابلة على أوثق النسخ الخطية' },
      { value: 'وضع ليلي', label: 'قراءة مريحة نهاراً وليلاً' },
    ],
  },
  showcase: {
    eyebrow: 'الصحيفة السجادية',
    title: 'زبور آل محمد (صلى الله عليه وآله) بين يديك، محققاً ومشكولاً',
    lead: 'نص الصحيفة السجادية كاملاً، مقابلاً على عدة نسخ خطية معتمدة ومضبوطاً بالتشكيل الكامل، ليصحّ لسانك بالدعاء ويطمئن قلبك بصحة ما تقرأ.',
    bullets: [
      'نص مقابل على عدة نسخ خطية موثوقة لضمان الدقة',
      'تشكيل كامل يعينك على القراءة الصحيحة السليمة',
      'انقر أي كلمة صعبة لتظهر لك معناها في الحال',
      'الآيات القرآنية مميّزة باللون الأخضر لتمييزها بوضوح',
      'تحكّم في حجم الخط وتباعد الأسطر بما يريح عينيك',
    ],
  },
  sections: [
    {
      id: 'rights',
      eyebrow: 'رسالة الحقوق',
      title: 'خريطتك إلى الكمال في رسالة الحقوق',
      body:
        'رسالة الحقوق الخالدة التي رسم فيها الإمام (عليه السلام) طريق الإنسان إلى الكمال، معروضة بوضوح وترتيب، مع إمكانية المشاركة والحفظ في المفضّلة لتعود إليها متى شئت.',
    },
    {
      id: 'masnad',
      eyebrow: 'مسند الإمام',
      title: 'مسند الإمام السجاد (عليه السلام) في موسوعة واحدة',
      body:
        'كل حديث رُوي عن الإمام زين العابدين (عليه السلام) مجموعاً في موسوعة متخصصة واحدة، ليكون معينك الجامع من كلماته النورانية في متناول يدك.',
    },
    {
      id: 'ziyarat',
      eyebrow: 'زيارات الإمام',
      title: 'زيارات الإمام (عليه السلام) الخاصة والعامة',
      body:
        'جميع زيارات الإمام (عليه السلام) الخاصة والعامة مجموعة ومرتّبة، لتزوره بأدب الزيارة الصحيح أينما كنت وحيثما حلّت بك أوقات المناجاة.',
    },
    {
      id: 'sira',
      eyebrow: 'السيرة العطرة',
      title: 'السيرة العطرة للإمام عليه السلام والإمام في الأدب العربي',
      body:
        'سيرة الإمام (عليه السلام) العطرة تعرّفك بحياته ومقامه، مع باب "الإمام في الأدب العربي" يجمع ما نُظم في مدحه ومنزلته من بديع الكلام.',
    },
  ],
  featuresHeading: {
    title: 'مزايا تجعل التطبيق رفيقك اليومي',
    subtitle: 'أدوات تعينك على القرب من الإمام (عليه السلام) وذكر الله في كل يوم من أيام سنتك.',
  },
  features: [
    { id: 'hijri', title: 'تقويم هجري مضبوط', description: 'تقويم هجري متزامن مع الرؤية الشرعية، ليبقى ضبط أيامك ومناسباتك موافقاً للثبوت الشرعي.' },
    { id: 'martyrs', title: 'سير شهداء الدفاع الكفائي', description: 'سير شهداء الدفاع الكفائي مع تذكيرك بيوم استشهادهم، لتحيي ذكراهم وتترحّم عليهم .' },
    { id: 'occasions', title: 'المناسبات الإسلامية', description: 'المناسبات الإسلامية على مدار السنة بين يديك، فلا تفوتك مناسبة عزيزة على قلبك.' },
    { id: 'darkmode', title: 'الوضع الليلي والنهاري', description: 'وضع ليلي ونهاري يمنحك قراءة مريحة للعين في كل وقت، خشوعاً في الليل ووضوحاً في النهار.' },
    { id: 'wisdom', title: 'حكمة اليوم', description: 'حكمة اليوم من كلمات الإمام (عليه السلام) تصلك يومياً، مع إمكانية مشاركتها لتنشر نورها.' },
    { id: 'library', title: 'المكتبة المتخصصة', description: 'مكتبة متخصصة تجمع المزيد من المصادر حول الإمام (عليه السلام)، قريباً بإذن الله.' },
  ],
  faqHeading: 'أسئلة يتكرر طرحها قبل التحميل',
  faq: [
    { q: 'هل التطبيق مجاني؟', a: 'نعم، تطبيق أنوار سجادية مجاني بالكامل بلا رسوم ولا اشتراكات ولا إعلانات. حمّله الآن من App Store أو Google Play واستفد من كل محتواه.' },
    { q: 'هل يعمل التطبيق بدون إنترنت؟', a: 'نعم، بعد تحميل التطبيق تستطيع قراءة الصحيفة السجادية ورسالة الحقوق والزيارات وسائر النصوص من دون حاجة إلى اتصال بالإنترنت.' },
    { q: 'على أي الأجهزة يعمل التطبيق؟', a: 'يعمل التطبيق على أجهزة iOS من متجر App Store، وعلى أجهزة Android من متجر Google Play، بواجهة عربية كاملة ووضعين ليلي ونهاري.' },
    { q: 'ما مصادر النصوص في التطبيق؟', a: 'النصوص مأخوذة من أوثق المصادر المعتمدة وصادرة عن مؤسسة الإمام زين العابدين (عليه السلام)، وقد عُنيت بمقابلتها على النسخ الخطية الموثوقة.' },
    { q: 'هل نص الصحيفة السجادية محقق ومشكل بالكامل؟', a: 'نعم، نص الصحيفة السجادية محقق ومقابل على عدة نسخ خطية معتمدة، ومضبوط بالتشكيل الكامل، مع تمييز الآيات القرآنية وشرح الكلمات الصعبة بلمسة واحدة.' },
    { q: 'ماذا يضمّ التطبيق من محتوى؟', a: 'يضمّ الصحيفة السجادية، ورسالة الحقوق، ومسند الإمام، وزياراته، وسيرته العطرة، مع تقويم هجري وحكمة اليوم ومزايا أخرى، كلها مجاناً في تطبيق واحد.' },
  ],
  finalCta: {
    title: 'ابدأ رحلتك مع أنوار السجّاد (عليه السلام) اليوم',
    subtitle: 'حمّل التطبيق مجاناً الآن من App Store أو Google Play، واجعل الصحيفة والزيارة وحكمة الإمام (عليه السلام) رفيقتك في كل يوم.',
  },
  footer: {
    tagline: 'أنوار سجادية — الموسوعة الجامعة للإمام زين العابدين (عليه السلام)، إصدار مؤسسة الإمام زين العابدين (عليه السلام).',
    rights: 'جميع الحقوق محفوظة لمؤسسة الإمام زين العابدين (عليه السلام).',
  },
  alt: {
    heroPhone: 'الشاشة الرئيسية لتطبيق أنوار سجادية تعرض أقسام الموسوعة عن الإمام زين العابدين (عليه السلام)',
    sahifaPhone: 'شاشة الصحيفة السجادية في التطبيق تعرض نصاً مشكولاً مع تمييز الآيات القرآنية باللون الأخضر',
    masnadPhone: 'شاشة قراءة نصّ داخل تطبيق أنوار سجادية بخطّ واضح وأدوات للتحكّم بالقراءة',
    rightsPhone: 'شاشة «تراث الإمام» تعرض أقسام الصحيفة السجادية ورسالة الحقوق ومسند الإمام وغيرها',
    ziyaratPhone: 'شاشة زيارات الإمام تعرض قائمة الزيارات الخاصة والعامة للإمام زين العابدين (عليه السلام)',
    siraPhone: 'شاشة السيرة العطرة تعرض حياة الإمام زين العابدين (عليه السلام) وباب الإمام في الأدب العربي',
    appIcon: 'أيقونة تطبيق أنوار سجادية بخط عربي أنيق على خلفية داكنة',
  },
};

const en: Content = {
  locale: 'en',
  dir: 'ltr',
  seo: {
    title: 'Anwar Sajjadiya | Al-Sahifa Al-Sajjadiyya App',
    description:
      'Free Anwar Sajjadiya app: Al-Sahifa Al-Sajjadiyya (verified & vowelized), the Treatise on Rights, Musnad & Ziyarat. On the App Store & Google Play.',
    keywords: [
      'Anwar Sajjadiya',
      'Al-Sahifa Al-Sajjadiyya',
      'Sahifa Sajjadiyya',
      'Imam Zayn al-Abidin',
      'Imam Sajjad',
      'Ali ibn al-Husayn',
      'Treatise on Rights',
      'Risalat al-Huquq',
      'supplications of Ahl al-Bayt',
      'Shia dua app',
      'Islamic app free',
      'Psalms of the Household',
    ],
    ogTitle: 'Anwar Sajjadiya | The Complete Encyclopedia of Imam Sajjad (AS)',
    ogDescription:
      "Al-Sahifa Al-Sajjadiyya verified and vowelized, the Treatise on Rights, the Imam's Musnad, his Ziyarat, and his blessed biography in one free, ad-free app. Download now from the App Store and Google Play.",
  },
  brand: {
    name: 'Anwar Sajjadiya',
    nameLatin: 'Anwar Sajjadiya',
    org: 'The Imam Zayn al-Abidin (peace be upon him) Foundation',
  },
  nav: { features: 'Features', content: 'Content', faq: 'FAQ', download: 'Download the App' },
  hero: {
    eyebrow: 'The Encyclopedia of Imam Zayn al-Abidin (peace be upon him)',
    title: 'The Supplications of Al-Sajjad (peace be upon him), With You Wherever You Are',
    subtitle:
      "Al-Sahifa Al-Sajjadiyya (fully verified and vowelized), the Treatise on Rights, the Imam's Musnad, his Ziyarat, and his blessed biography, all gathered in one free, ad-free app.",
    ctaHint: 'Download the app for free now',
    scanHint: 'Scan the code to download the app to your device',
    freeLabel: 'Completely Free',
    platformsLabel: 'Available for iOS and Android',
  },
  trust: {
    items: [
      { value: 'Completely Free', label: 'No fees and no hidden subscriptions' },
      { value: 'Ad-Free', label: 'A pure, devotional reading experience' },
      { value: 'Verified Texts', label: 'Cross-checked against the most reliable manuscripts' },
      { value: 'Dark Mode', label: 'Comfortable reading day and night' },
    ],
  },
  showcase: {
    eyebrow: 'Al-Sahifa Al-Sajjadiyya',
    title: 'The Psalms of the Household of Muhammad (peace be upon him and his family), in Your Hands, Verified and Vowelized',
    lead:
      'The complete text of Al-Sahifa Al-Sajjadiyya ("The Psalms of the Household"), cross-checked against several trusted manuscripts and fully vowelized, so your tongue is sound in supplication and your heart is at ease with the accuracy of what you read.',
    bullets: [
      'Text cross-checked against several trusted manuscripts to ensure accuracy',
      'Full vowelization to guide you toward correct, precise recitation',
      'Tap any difficult word to reveal its meaning instantly',
      "Qur'anic verses highlighted in green so they stand out clearly",
      'Adjust font size and line spacing to whatever rests easiest on your eyes',
    ],
  },
  sections: [
    {
      id: 'rights',
      eyebrow: 'The Treatise on Rights',
      title: 'Your Map to Perfection in Risalat al-Huquq',
      body:
        'The timeless Treatise on Rights (Risalat al-Huquq), in which the Imam (peace be upon him) charted the human path to perfection, presented clearly and in order, with options to share and save to favorites so you can return to it whenever you wish.',
    },
    {
      id: 'masnad',
      eyebrow: "The Imam's Musnad",
      title: 'The Musnad of Imam Sajjad (peace be upon him) in a Single Encyclopedia',
      body:
        'Every narration reported from Imam Zayn al-Abidin (peace be upon him), gathered into one specialized encyclopedia, so his luminous words are within your reach in a single comprehensive source.',
    },
    {
      id: 'ziyarat',
      eyebrow: "The Imam's Ziyarat",
      title: "The Imam's Ziyarat (peace be upon him), Specific and General",
      body:
        "All of the Imam's Ziyarat (visitation supplications), both specific and general, gathered and arranged, so you may visit him with the proper etiquette of ziyara wherever you are, whenever the moments of intimate prayer come upon you.",
    },
    {
      id: 'sira',
      eyebrow: 'The Blessed Biography',
      title: 'The Blessed Biography and the Imam in Arabic Literature',
      body:
        'The Imam\'s blessed biography (sira) introduces you to his life and standing, alongside a section titled "The Imam in Arabic Literature" that gathers the finest verse composed in his praise and honor.',
    },
  ],
  featuresHeading: {
    title: 'Features That Make the App Your Daily Companion',
    subtitle: 'Tools that help you draw near to the Imam (peace be upon him) and remember God every day of your year.',
  },
  features: [
    { id: 'hijri', title: 'Accurate Hijri Calendar', description: 'A Hijri calendar synced with the legitimate moon sighting, so your days and observances stay aligned with what is religiously established.' },
    { id: 'martyrs', title: 'Biographies of the Defenders', description: "Biographies of the martyrs of the Kifa'i Defense, with reminders on the anniversary of their martyrdom, so you may honor their memory and pray for them in its due time." },
    { id: 'occasions', title: 'Islamic Occasions', description: 'Islamic occasions throughout the year at your fingertips, so no occasion dear to your heart ever passes you by.' },
    { id: 'darkmode', title: 'Dark and Light Mode', description: 'Dark and light modes give you eye-comfortable reading at any hour: serenity by night and clarity by day.' },
    { id: 'wisdom', title: 'Wisdom of the Day', description: 'A daily wisdom from the words of the Imam (peace be upon him) reaches you each day, with the option to share it and spread its light.' },
    { id: 'library', title: 'The Specialized Library', description: 'A specialized library gathering more sources about the Imam (peace be upon him), coming soon, God willing.' },
  ],
  faqHeading: 'Questions People Often Ask Before Downloading',
  faq: [
    { q: 'Is the app free?', a: 'Yes, the Anwar Sajjadiya app is completely free, with no fees, no subscriptions, and no ads. Download it now from the App Store or Google Play and benefit from all of its content.' },
    { q: 'Does the app work offline?', a: 'Yes. Once you have downloaded the app, you can read Al-Sahifa Al-Sajjadiyya, the Treatise on Rights, the Ziyarat, and all other texts without needing an internet connection.' },
    { q: 'Which devices does the app work on?', a: 'The app works on iOS devices from the App Store and on Android devices from Google Play, with a full Arabic interface and both dark and light modes.' },
    { q: 'What are the sources of the texts in the app?', a: 'The texts are drawn from the most reliable, authoritative sources and are issued by the Imam Zayn al-Abidin (peace be upon him) Foundation, with careful cross-checking against trusted manuscripts.' },
    { q: 'Is the text of Al-Sahifa Al-Sajjadiyya verified and vowelized?', a: "Yes. The text of Al-Sahifa Al-Sajjadiyya is verified and cross-checked against several authoritative manuscripts, fully vowelized, with Qur'anic verses highlighted and difficult words explained with a single tap." },
    { q: 'What content does the app include?', a: "It includes Al-Sahifa Al-Sajjadiyya, the Treatise on Rights, the Imam's Musnad, his Ziyarat, and his blessed biography, along with a Hijri calendar, a daily wisdom, and other features, all free in a single app." },
  ],
  finalCta: {
    title: 'Begin Your Journey With the Light of Al-Sajjad (peace be upon him) Today',
    subtitle: "Download the app for free now from the App Store or Google Play, and make the Sahifa, the Ziyara, and the Imam's wisdom (peace be upon him) your companion every single day.",
  },
  footer: {
    tagline: 'Anwar Sajjadiya — the comprehensive encyclopedia of Imam Zayn al-Abidin (peace be upon him), published by the Imam Zayn al-Abidin (peace be upon him) Foundation.',
    rights: 'All rights reserved to the Imam Zayn al-Abidin (peace be upon him) Foundation.',
  },
  alt: {
    heroPhone: 'The home screen of the Anwar Sajjadiya app displaying the sections of the encyclopedia on Imam Zayn al-Abidin (peace be upon him)',
    sahifaPhone: "The Al-Sahifa Al-Sajjadiyya screen in the app displaying vowelized text with Qur'anic verses highlighted in green",
    masnadPhone: 'A text reading screen in the Anwar Sajjadiya app with clear typography and reading controls',
    rightsPhone: "The 'Imam's Heritage' screen listing Al-Sahifa Al-Sajjadiyya, the Treatise on Rights, the Musnad and more",
    ziyaratPhone: "The Imam's Ziyarat screen displaying the list of specific and general Ziyarat of Imam Zayn al-Abidin (peace be upon him)",
    siraPhone: 'The Blessed Biography screen displaying the life of Imam Zayn al-Abidin (peace be upon him) and the section on the Imam in Arabic Literature',
    appIcon: 'The Anwar Sajjadiya app icon in elegant Arabic calligraphy on a dark background',
  },
};

const fa: Content = {
  locale: 'fa',
  dir: 'rtl',
  seo: {
    title: 'انوار سجادیه | دانشنامه امام سجاد (ع)',
    description:
      'اپلیکیشن انوار سجادیه را رایگان دانلود کنید: صحیفهٔ سجادیه محقق و اعراب‌گذاری‌شده، رسالهٔ حقوق، مسند و زیارات امام سجاد. موجود در App Store و Google Play.',
    keywords: [
      'انوار سجادیه',
      'صحیفهٔ سجادیه',
      'امام زین‌العابدین',
      'امام سجاد علیه‌السلام',
      'رسالهٔ حقوق',
      'مسند امام سجاد',
      'زیارات امام سجاد',
      'صحیفهٔ سجادیه با اعراب',
      'ادعیهٔ اهل بیت',
      'سیرهٔ امام سجاد',
      'اپلیکیشن مذهبی رایگان',
      'دانلود صحیفهٔ سجادیه',
    ],
    ogTitle: 'انوار سجادیه | دانشنامهٔ جامع امام سجاد (علیه‌السلام)',
    ogDescription:
      'صحیفهٔ سجادیهٔ محقق و اعراب‌گذاری‌شده، رسالهٔ حقوق، مسند و زیارات امام و سیرهٔ عطرآگین آن حضرت در یک اپلیکیشن رایگان و بدون تبلیغات. همین حالا از App Store و Google Play دانلود کنید.',
  },
  brand: {
    name: 'انوار سجادیه',
    nameLatin: 'Anwar Sajjadiya',
    org: 'مؤسسهٔ امام زین‌العابدین (علیه‌السلام)',
  },
  nav: { features: 'ویژگی‌ها', content: 'محتوا', faq: 'پرسش‌های متداول', download: 'دانلود اپلیکیشن' },
  hero: {
    eyebrow: 'دانشنامهٔ امام زین‌العابدین (علیه‌السلام)',
    title: 'مناجات امام سجاد (علیه‌السلام) هر لحظه در دستان شما',
    subtitle:
      'صحیفهٔ سجادیهٔ محقق و اعراب‌گذاری‌شده، رسالهٔ حقوق، مسند و زیارات امام و سیرهٔ عطرآگین آن حضرت، همه در یک اپلیکیشن رایگان و بدون تبلیغات.',
    ctaHint: 'همین حالا رایگان دانلود کنید',
    scanHint: 'برای دانلود روی دستگاه خود، کد را اسکن کنید',
    freeLabel: 'کاملاً رایگان',
    platformsLabel: 'موجود برای iOS و Android',
  },
  trust: {
    items: [
      { value: 'کاملاً رایگان', label: 'بدون هیچ هزینه و اشتراک پنهان' },
      { value: 'بدون تبلیغات', label: 'تجربهٔ مطالعه‌ای پاک و خاشعانه' },
      { value: 'متون محقق', label: 'مقابله‌شده با معتبرترین نسخ خطی' },
      { value: 'حالت شب', label: 'مطالعهٔ راحت در روز و شب' },
    ],
  },
  showcase: {
    eyebrow: 'صحیفهٔ سجادیه',
    title: 'زبور آل محمد (صلی‌الله علیه و آله) در دستان شما، محقق و اعراب‌گذاری‌شده',
    lead:
      'متن کامل صحیفهٔ سجادیه، مقابله‌شده با چند نسخهٔ خطی معتبر و مضبوط با اعراب‌گذاری کامل، تا زبانتان به دعا صحیح گردد و دلتان به درستی آنچه می‌خوانید آرام گیرد.',
    bullets: [
      'متن مقابله‌شده با چند نسخهٔ خطی موثق برای تضمین دقت',
      'اعراب‌گذاری کامل که شما را در قرائت صحیح و درست یاری می‌کند',
      'روی هر واژهٔ دشوار بزنید تا معنایش بی‌درنگ نمایان شود',
      'آیات قرآنی با رنگ سبز متمایز شده تا به‌روشنی بازشناخته شوند',
      'اندازهٔ قلم و فاصلهٔ خطوط را به دلخواه و راحتی چشمانتان تنظیم کنید',
    ],
  },
  sections: [
    {
      id: 'rights',
      eyebrow: 'رسالهٔ حقوق',
      title: 'نقشهٔ راه شما به سوی کمال در رسالهٔ حقوق',
      body:
        'رسالهٔ حقوق جاودانه که امام (علیه‌السلام) در آن راه انسان به سوی کمال را ترسیم فرموده، با نظمی روشن و شیوا عرضه شده است، همراه با امکان اشتراک‌گذاری و ذخیره در علاقه‌مندی‌ها تا هر زمان که خواستید به آن بازگردید.',
    },
    {
      id: 'masnad',
      eyebrow: 'مسند امام',
      title: 'مسند امام سجاد (علیه‌السلام) در یک دانشنامهٔ واحد',
      body:
        'هر حدیثی که از امام زین‌العابدین (علیه‌السلام) روایت شده، در یک دانشنامهٔ تخصصی گرد آمده تا گنجینهٔ جامع کلمات نورانی آن حضرت در دسترس شما باشد.',
    },
    {
      id: 'ziyarat',
      eyebrow: 'زیارات امام',
      title: 'زیارات خاص و عام امام (علیه‌السلام)',
      body:
        'همهٔ زیارات خاص و عام امام (علیه‌السلام) گرد آمده و مرتب شده تا هر کجا که باشید و هر گاه که هنگامهٔ مناجات فرا رسد، با آداب صحیح زیارت به محضر آن حضرت مشرف شوید.',
    },
    {
      id: 'sira',
      eyebrow: 'سیرهٔ عطرآگین',
      title: 'سیرهٔ عطرآگین و امام در ادب عربی',
      body:
        'سیرهٔ عطرآگین امام (علیه‌السلام) شما را با زندگانی و مقام آن حضرت آشنا می‌سازد، همراه با بخش «امام در ادب عربی» که آنچه در مدح و منزلت آن حضرت از سخنان بدیع سروده شده را گرد آورده است.',
    },
  ],
  featuresHeading: {
    title: 'ویژگی‌هایی که اپلیکیشن را همراه هر روز شما می‌کند',
    subtitle: 'ابزارهایی که شما را در قرب به امام (علیه‌السلام) و یاد خدا در هر روز از روزهای سالتان یاری می‌رساند.',
  },
  features: [
    { id: 'hijri', title: 'تقویم هجری دقیق', description: 'تقویم هجری هماهنگ با رؤیت شرعی، تا تنظیم روزها و مناسبت‌هایتان همواره مطابق ثبوت شرعی باشد.' },
    { id: 'martyrs', title: 'سیرهٔ شهدای دفاع کفایی', description: 'سیرهٔ شهدای دفاع کفایی همراه با یادآوری روز شهادتشان، تا یادشان را زنده بدارید و در هنگام آن برایشان طلب رحمت کنید.' },
    { id: 'occasions', title: 'مناسبت‌های اسلامی', description: 'مناسبت‌های اسلامی در سراسر سال در دستان شماست، تا هیچ مناسبت عزیزی از قلبتان از دست نرود.' },
    { id: 'darkmode', title: 'حالت شب و روز', description: 'حالت شب و روز که مطالعه‌ای راحت برای چشم در هر زمان به شما هدیه می‌دهد؛ خشوع در شب و روشنی در روز.' },
    { id: 'wisdom', title: 'حکمت روز', description: 'حکمت روز از کلمات امام (علیه‌السلام) هر روز به شما می‌رسد، همراه با امکان اشتراک‌گذاری تا نورش را بگسترانید.' },
    { id: 'library', title: 'کتابخانهٔ تخصصی', description: 'کتابخانه‌ای تخصصی که منابع بیشتری دربارهٔ امام (علیه‌السلام) را گرد می‌آورد، به‌زودی ان‌شاءالله.' },
  ],
  faqHeading: 'پرسش‌هایی که پیش از دانلود بارها پرسیده می‌شود',
  faq: [
    { q: 'آیا اپلیکیشن رایگان است؟', a: 'بله، اپلیکیشن انوار سجادیه کاملاً رایگان است، بدون هیچ هزینه، اشتراک یا تبلیغات. همین حالا از App Store یا Google Play دانلود کنید و از تمام محتوای آن بهره‌مند شوید.' },
    { q: 'آیا اپلیکیشن بدون اینترنت کار می‌کند؟', a: 'بله، پس از دانلود اپلیکیشن می‌توانید صحیفهٔ سجادیه، رسالهٔ حقوق، زیارات و سایر متون را بدون نیاز به اتصال اینترنت مطالعه کنید.' },
    { q: 'اپلیکیشن روی چه دستگاه‌هایی کار می‌کند؟', a: 'اپلیکیشن روی دستگاه‌های iOS از App Store و روی دستگاه‌های Android از Google Play کار می‌کند، با رابط کاربری کامل و دو حالت شب و روز.' },
    { q: 'منابع متون در اپلیکیشن چیست؟', a: 'متون از موثق‌ترین منابع معتبر برگرفته شده و توسط مؤسسهٔ امام زین‌العابدین (علیه‌السلام) منتشر گردیده و با دقت با نسخ خطی موثق مقابله شده است.' },
    { q: 'آیا متن صحیفهٔ سجادیه محقق و اعراب‌گذاری‌شده است؟', a: 'بله، متن صحیفهٔ سجادیه محقق و مقابله‌شده با چند نسخهٔ خطی معتبر و مضبوط با اعراب‌گذاری کامل است، همراه با متمایزسازی آیات قرآنی و شرح واژه‌های دشوار تنها با یک لمس.' },
    { q: 'اپلیکیشن چه محتوایی را در بر می‌گیرد؟', a: 'اپلیکیشن شامل صحیفهٔ سجادیه، رسالهٔ حقوق، مسند امام، زیارات و سیرهٔ عطرآگین آن حضرت است، همراه با تقویم هجری، حکمت روز و ویژگی‌های دیگر، همه رایگان در یک اپلیکیشن.' },
  ],
  finalCta: {
    title: 'سفر خود را با انوار سجاد (علیه‌السلام) از امروز آغاز کنید',
    subtitle: 'همین حالا اپلیکیشن را رایگان از App Store یا Google Play دانلود کنید و صحیفه، زیارت و حکمت امام (علیه‌السلام) را همراه هر روز خود سازید.',
  },
  footer: {
    tagline: 'انوار سجادیه — دانشنامهٔ جامع امام زین‌العابدین (علیه‌السلام)، منتشرشده توسط مؤسسهٔ امام زین‌العابدین (علیه‌السلام).',
    rights: 'تمامی حقوق برای مؤسسهٔ امام زین‌العابدین (علیه‌السلام) محفوظ است.',
  },
  alt: {
    heroPhone: 'صفحهٔ اصلی اپلیکیشن انوار سجادیه که بخش‌های دانشنامهٔ امام زین‌العابدین (علیه‌السلام) را نمایش می‌دهد',
    sahifaPhone: 'صفحهٔ صحیفهٔ سجادیه در اپلیکیشن که متنی اعراب‌گذاری‌شده را همراه با متمایزسازی آیات قرآنی به رنگ سبز نمایش می‌دهد',
    masnadPhone: 'صفحهٔ مطالعهٔ متن در اپلیکیشن انوار سجادیه با خطی خوانا و ابزارهای کنترل مطالعه',
    rightsPhone: 'صفحهٔ «میراث امام» که بخش‌های صحیفهٔ سجادیه، رسالهٔ حقوق و مسند امام را نمایش می‌دهد',
    ziyaratPhone: 'صفحهٔ زیارات امام که فهرست زیارات خاص و عام امام زین‌العابدین (علیه‌السلام) را نمایش می‌دهد',
    siraPhone: 'صفحهٔ سیرهٔ عطرآگین که زندگانی امام زین‌العابدین (علیه‌السلام) و بخش امام در ادب عربی را نمایش می‌دهد',
    appIcon: 'آیکون اپلیکیشن انوار سجادیه با خط عربی زیبا بر پس‌زمینه‌ای تیره',
  },
};

export const CONTENT: Record<Locale, Content> = { ar, en, fa };
