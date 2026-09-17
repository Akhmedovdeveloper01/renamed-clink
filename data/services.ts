import type { CategorySlug } from "./categories";

export type LocalizedText = { uz: string; ru: string };

export type ServiceIcon =
  | "sparkles"
  | "droplet"
  | "zap"
  | "syringe"
  | "wind"
  | "activity";

export type ServiceStep = {
  title: LocalizedText;
  text: LocalizedText;
};

export type ServiceFaqItem = {
  q: LocalizedText;
  a: LocalizedText;
};

export type ServiceFacts = {
  duration?: string;
  sessions?: string;
  price?: string;
  oldPrice?: string;
};

export type BodyArea = {
  key: string;
  label: LocalizedText;
  description: LocalizedText;
};

export type InteractiveBlock = "trend-vs-face" | "body-area-selector" | "complex-trio";

export type Service = {
  slug: string;
  category: CategorySlug;
  icon: ServiceIcon;
  image: string;
  title: LocalizedText;
  shortDescription: LocalizedText;
  heroTagline: LocalizedText;
  whatIsIt: LocalizedText;
  indications: LocalizedText[];
  benefits: LocalizedText[];
  steps?: ServiceStep[];
  preparation?: LocalizedText[];
  aftercare?: LocalizedText[];
  contraindications?: LocalizedText[];
  facts: ServiceFacts;
  faq: ServiceFaqItem[];
  relatedSlugs: string[];
  interactiveBlock?: InteractiveBlock;
  bodyAreas?: BodyArea[];
  seo: { title: LocalizedText; description: LocalizedText };
};

/**
 * Content rewritten from the clinic's own Instagram posts (see project brief appendix).
 * Facts not present in the source are marked with bracketed placeholders —
 * [PRICE], [DURATION], [SESSIONS], [DEVICE], [CONFIRM], [DOCTOR_TO_FILL] —
 * for the clinic to fill in. Never replace these with invented numbers.
 */
export const services: Service[] = [
  {
    slug: "lazer-epilyatsiya",
    category: "laser",
    icon: "zap",
    image: "/images/services/lazer-epilyatsiya.svg",
    title: { uz: "Lazer epilyatsiya", ru: "Лазерная эпиляция" },
    shortDescription: {
      uz: "Zamonaviy lazer uskunalari yordamida xavfsiz va nazoratli tuk olish protsedurasi.",
      ru: "Безопасная и контролируемая процедура удаления волос на современном лазерном оборудовании.",
    },
    heroTagline: {
      uz: "Silliq va parvarishlangan teri sari qadam.",
      ru: "Шаг к гладкой и ухоженной коже.",
    },
    whatIsIt: {
      uz: "Lazer epilyatsiya — tuk follikulalariga zamonaviy lazer texnologiyasi yordamida ta'sir ko‘rsatib, tuklarning o‘sishini kamaytirishga yordam beruvchi protsedura. Muolaja sertifikatlangan mutaxassislar tomonidan, har bir mijoz uchun individual yondashuv asosida o‘tkaziladi.",
      ru: "Лазерная эпиляция — процедура, при которой современные лазерные технологии воздействуют на волосяные фолликулы и помогают сократить рост волос. Процедуру проводят сертифицированные специалисты с индивидуальным подходом к каждому клиенту.",
    },
    indications: [
      {
        uz: "Keraksiz tuklardan uzoq muddatga xalos bo‘lishni istovchilar",
        ru: "Те, кто хочет надолго сократить количество нежелательных волос",
      },
      {
        uz: "Doimiy qirqish, mum yoki epilyator bilan tuk olishdan charchagan mijozlar",
        ru: "Клиенты, уставшие от постоянного бритья, восковой эпиляции или эпилятора",
      },
      {
        uz: "Teri silliqligini uzoq vaqt saqlab turishni xohlaydiganlar",
        ru: "Те, кто хочет надолго сохранить гладкость кожи",
      },
    ],
    benefits: [
      { uz: "Tuklarning o‘sishini kamaytirishga yordam beradi", ru: "Помогает сократить рост волос" },
      { uz: "Teri silliq va mayin bo‘lib qoladi", ru: "Кожа становится гладкой и мягкой" },
      { uz: "Vaqtni tejaydi", ru: "Экономит время" },
      {
        uz: "Doimiy qirqish va vositalarga ehtiyojni kamaytiradi",
        ru: "Снижает потребность в постоянном бритье и средствах",
      },
      { uz: "Zamonaviy texnologiya yordamida amalga oshiriladi", ru: "Проводится с использованием современных технологий" },
      { uz: "Har bir mijoz uchun individual yondashuv", ru: "Индивидуальный подход к каждому клиенту" },
    ],
    preparation: [
      {
        uz: "Muolajadan oldin kuchli quyosh toblanishidan saqlaning",
        ru: "Перед процедурой избегайте сильного загара",
      },
      {
        uz: "Tuklarni ildizi bilan olib tashlamang — mum, epilyator yoki yulish ishlatmang",
        ru: "Не удаляйте волосы с корнем — не используйте воск, эпилятор или выщипывание",
      },
      {
        uz: "Kursni boshlashdan oldin mutaxassis konsultatsiyasidan o‘ting",
        ru: "Перед началом курса пройдите консультацию специалиста",
      },
    ],
    aftercare: [
      { uz: "[DOCTOR_TO_FILL] — protseduradan keyingi parvarish tavsiyalari", ru: "[DOCTOR_TO_FILL] — рекомендации по уходу после процедуры" },
    ],
    contraindications: [
      { uz: "[DOCTOR_TO_FILL] — qarshi ko‘rsatmalar ro‘yxati", ru: "[DOCTOR_TO_FILL] — список противопоказаний" },
    ],
    facts: { duration: "[DURATION]", sessions: "[SESSIONS]", price: "[PRICE]" },
    faq: [
      {
        q: { uz: "Necha seans kerak bo‘ladi?", ru: "Сколько сеансов потребуется?" },
        a: {
          uz: "Seanslar soni tuk turi va sohaga qarab farq qiladi — aniq rejani mutaxassis konsultatsiyada belgilaydi. [CONFIRM]",
          ru: "Количество сеансов зависит от типа волос и зоны — точный план определяет специалист на консультации. [CONFIRM]",
        },
      },
      {
        q: { uz: "Protsedura qanday uskunada o‘tkaziladi?", ru: "На каком оборудовании проводится процедура?" },
        a: { uz: "Zamonaviy sertifikatlangan lazer uskunasida. [DEVICE]", ru: "На современном сертифицированном лазерном оборудовании. [DEVICE]" },
      },
    ],
    relatedSlugs: ["karbon-piling"],
    seo: {
      title: { uz: "Lazer epilyatsiya Samarqand", ru: "Лазерная эпиляция Самарканд" },
      description: {
        uz: "Samarqandda lazer epilyatsiya — zamonaviy uskunalar va individual yondashuv bilan xavfsiz muolaja.",
        ru: "Лазерная эпиляция в Самарканде — безопасная процедура на современном оборудовании с индивидуальным подходом.",
      },
    },
  },
  {
    slug: "karbon-piling",
    category: "face",
    icon: "droplet",
    image: "/images/services/karbon-piling.svg",
    title: { uz: "Karbon piling", ru: "Карбоновый пилинг" },
    shortDescription: {
      uz: "Terini chuqur tozalash va yorqin ko‘rinish uchun zamonaviy karbon piling protsedurasi.",
      ru: "Современная процедура карбонового пилинга для глубокого очищения и сияния кожи.",
    },
    heroTagline: { uz: "Teringizga yangicha nafas.", ru: "Новое дыхание для вашей кожи." },
    whatIsIt: {
      uz: "Karbonli piling — terini chuqur tozalash, yog‘ ajralishini me'yorlashtirish va yuz rangini bir tekis qilishga yordam beradigan zamonaviy muolaja.",
      ru: "Карбоновый пилинг — современная процедура, которая помогает глубоко очистить кожу, нормализовать выработку кожного сала и выровнять тон лица.",
    },
    indications: [
      {
        uz: "Kengaygan teri teshiklari va yog‘ yaltiroqligidan xijolat bo‘ladiganlar",
        ru: "Тех, кого беспокоят расширенные поры и жирный блеск кожи",
      },
      { uz: "Akne va aknedan qolgan izlar bilan kurashayotganlar", ru: "Тех, кто борется с акне и постакне" },
      { uz: "Teri rangini yorqinlashtirishni xohlaydiganlar", ru: "Тех, кто хочет освежить и выровнять тон кожи" },
    ],
    benefits: [
      { uz: "Qora nuqtalarni kamaytiradi", ru: "Уменьшает чёрные точки" },
      { uz: "Kengaygan teshiklarni toraytirishga yordam beradi", ru: "Помогает сузить расширенные поры" },
      { uz: "Akne va aknedan qolgan izlarni yengillashtirishga yordam beradi", ru: "Помогает облегчить акне и постакне" },
      { uz: "Teri rangini yorqin va sog‘lom ko‘rsatadi", ru: "Делает цвет лица более ярким и здоровым" },
      { uz: "Kollagen ishlab chiqarilishini rag‘batlantiradi", ru: "Стимулирует выработку коллагена" },
      {
        uz: "Muolajadan so‘ng teri yanada silliq, toza va tarang ko‘rinadi",
        ru: "После процедуры кожа выглядит более гладкой, чистой и упругой",
      },
    ],
    preparation: [
      { uz: "[DOCTOR_TO_FILL] — protsedura oldidan tayyorgarlik tavsiyalari", ru: "[DOCTOR_TO_FILL] — рекомендации по подготовке перед процедурой" },
    ],
    aftercare: [
      { uz: "[DOCTOR_TO_FILL] — protseduradan keyingi parvarish tavsiyalari", ru: "[DOCTOR_TO_FILL] — рекомендации по уходу после процедуры" },
    ],
    contraindications: [
      { uz: "[DOCTOR_TO_FILL] — qarshi ko‘rsatmalar ro‘yxati", ru: "[DOCTOR_TO_FILL] — список противопоказаний" },
    ],
    facts: { duration: "[DURATION]", sessions: "[SESSIONS]", price: "[PRICE]" },
    faq: [
      {
        q: { uz: "Necha yoshdan boshlab tavsiya etiladi?", ru: "С какого возраста рекомендуется?" },
        a: { uz: "Aniq tavsiyani konsultatsiyada mutaxassisdan olasiz. [CONFIRM]", ru: "Точную рекомендацию вы получите на консультации у специалиста. [CONFIRM]" },
      },
    ],
    relatedSlugs: ["lazer-epilyatsiya", "yuz-chistkasi-7-bosqich"],
    seo: {
      title: { uz: "Karbon piling Samarqand", ru: "Карбоновый пилинг Самарканд" },
      description: {
        uz: "Karbon piling — terini chuqur tozalash va yorqin ko‘rinish uchun zamonaviy muolaja Samarqandda.",
        ru: "Карбоновый пилинг в Самарканде — глубокое очищение кожи и сияющий вид.",
      },
    },
  },
  {
    slug: "yuz-chistkasi-7-bosqich",
    category: "face",
    icon: "sparkles",
    image: "/images/services/yuz-chistkasi-7-bosqich.svg",
    title: { uz: "7 bosqichli yuz chistkasi", ru: "7-этапная чистка лица" },
    shortDescription: {
      uz: "Barcha yosh toifalari uchun mos, bosqichma-bosqich chuqur yuz tozalash muolajasi.",
      ru: "Глубокая, поэтапная чистка лица, подходящая для всех возрастов.",
    },
    heroTagline: { uz: "O‘zini hurmat qiladigan har bir inson uchun.", ru: "Для каждого, кто заботится о себе." },
    whatIsIt: {
      uz: "7 bosqichli yuz chistkasi — terini bosqichma-bosqich chuqur tozalash, bug‘lash, tozalash va tinchlantirishni o‘z ichiga olgan kompleks muolaja. Muolaja tajribali mutaxassislarimiz tomonidan amalga oshiriladi [CONFIRM] va barcha yoshdagi mijozlar uchun mos.",
      ru: "7-этапная чистка лица — комплексная процедура, включающая последовательное глубокое очищение, распаривание, чистку и успокоение кожи. Процедуру проводят опытные специалисты клиники [CONFIRM], она подходит клиентам всех возрастов.",
    },
    indications: [
      {
        uz: "Terida qora nuqta va kombinatsiyalangan yog‘lilikdan xijolat bo‘ladiganlar",
        ru: "Тех, кого беспокоят чёрные точки и комбинированная жирность кожи",
      },
      { uz: "Muntazam chuqur tozalashga ehtiyoj sezayotganlar", ru: "Тех, кто нуждается в регулярном глубоком очищении" },
      { uz: "Yuzga tarovat va yangilik olib kelishni istovchilar", ru: "Тех, кто хочет освежить и обновить кожу лица" },
    ],
    benefits: [
      { uz: "Terini chuqur va bosqichma-bosqich tozalaydi", ru: "Глубоко и последовательно очищает кожу" },
      {
        uz: "Qora nuqta va kombinatsiyalangan yog‘lilikni kamaytirishga yordam beradi",
        ru: "Помогает уменьшить чёрные точки и комбинированную жирность",
      },
      { uz: "Yuzga tiniqlik va tarovat baxsh etadi", ru: "Придаёт лицу свежесть и сияние" },
      {
        uz: "10 yillik tajribaga ega mutaxassislar tomonidan bajariladi [CONFIRM]",
        ru: "Выполняется специалистами с 10-летним опытом [CONFIRM]",
      },
    ],
    steps: [
      {
        title: { uz: "1. Demakiyaj va dastlabki tozalash [CONFIRM]", ru: "1. Демакияж и первичное очищение [CONFIRM]" },
        text: { uz: "Teridan makiyaj va sirt ifloslanishlar olib tashlanadi.", ru: "С кожи удаляются макияж и поверхностные загрязнения." },
      },
      {
        title: { uz: "2. Terini bug‘lash [CONFIRM]", ru: "2. Распаривание кожи [CONFIRM]" },
        text: { uz: "Teshiklarni ochish uchun teri yumshoq bug‘ ta'siriga olinadi.", ru: "Кожа подвергается мягкому воздействию пара для раскрытия пор." },
      },
      {
        title: { uz: "3. Chuqur tozalash [CONFIRM]", ru: "3. Глубокое очищение [CONFIRM]" },
        text: { uz: "Mexanik yoki uskuna yordamida chuqur tozalash o‘tkaziladi.", ru: "Проводится глубокое очищение вручную или с помощью аппарата." },
      },
      {
        title: { uz: "4. Qora nuqtalarni olib tashlash [CONFIRM]", ru: "4. Удаление чёрных точек [CONFIRM]" },
        text: { uz: "Kengaygan teshiklardagi qora nuqtalar ehtiyotkorlik bilan tozalanadi.", ru: "Чёрные точки в расширенных порах аккуратно удаляются." },
      },
      {
        title: { uz: "5. Tinchlantiruvchi niqob [CONFIRM]", ru: "5. Успокаивающая маска [CONFIRM]" },
        text: { uz: "Teri qizarishini kamaytirish uchun tinchlantiruvchi niqob qo‘llaniladi.", ru: "Наносится успокаивающая маска для снижения покраснения." },
      },
      {
        title: { uz: "6. Seruma va namlantiruvchi vosita [CONFIRM]", ru: "6. Сыворотка и увлажнение [CONFIRM]" },
        text: { uz: "Teri holatiga mos seruma va namlantiruvchi vosita qo‘llaniladi.", ru: "Наносятся сыворотка и увлажняющее средство, подходящие коже." },
      },
      {
        title: { uz: "7. Yakuniy parvarish va SPF himoya [CONFIRM]", ru: "7. Финальный уход и SPF-защита [CONFIRM]" },
        text: { uz: "Muolaja quyoshdan himoya vositasi bilan yakunlanadi.", ru: "Процедура завершается нанесением средства с солнцезащитой." },
      },
    ],
    preparation: [
      { uz: "[DOCTOR_TO_FILL] — protsedura oldidan tayyorgarlik tavsiyalari", ru: "[DOCTOR_TO_FILL] — рекомендации по подготовке перед процедурой" },
    ],
    aftercare: [
      { uz: "[DOCTOR_TO_FILL] — protseduradan keyingi parvarish tavsiyalari", ru: "[DOCTOR_TO_FILL] — рекомендации по уходу после процедуры" },
    ],
    contraindications: [
      { uz: "[DOCTOR_TO_FILL] — qarshi ko‘rsatmalar ro‘yxati", ru: "[DOCTOR_TO_FILL] — список противопоказаний" },
    ],
    facts: { duration: "[DURATION]", sessions: "[SESSIONS]", price: "800 000 so‘m" },
    faq: [
      {
        q: { uz: "Muolaja necha yoshdan boshlab amalga oshiriladi?", ru: "С какого возраста проводится процедура?" },
        a: { uz: "Barcha yoshdagi mijozlar uchun mos, aniq tavsiyani konsultatsiyada olasiz.", ru: "Подходит клиентам всех возрастов, точную рекомендацию вы получите на консультации." },
      },
      {
        q: { uz: "Muolaja qancha davom etadi?", ru: "Сколько длится процедура?" },
        a: { uz: "[DURATION]", ru: "[DURATION]" },
      },
    ],
    relatedSlugs: ["karbon-piling", "lazer-epilyatsiya"],
    seo: {
      title: { uz: "Yuz chistkasi Samarqand", ru: "Чистка лица Самарканд" },
      description: {
        uz: "7 bosqichli yuz chistkasi — Samarqandda barcha yoshdagi mijozlar uchun chuqur tozalash muolajasi.",
        ru: "7-этапная чистка лица в Самарканде — глубокое очищение для клиентов всех возрастов.",
      },
    },
  },
  {
    slug: "filler",
    category: "injection",
    icon: "syringe",
    image: "/images/services/filler.svg",
    title: { uz: "Fillerlar (lablar, burun-lab burmalari)", ru: "Филлеры (губы, носогубные складки)" },
    shortDescription: {
      uz: "Yuzingiz proporsiyasiga mos hajm va shakl — trendni emas, individualligingizni ta'kidlovchi filler.",
      ru: "Объём и форма, подходящие пропорциям именно вашего лица, — филлер, который подчёркивает вашу индивидуальность.",
    },
    heroTagline: {
      uz: "Natija trenddan emas, sizning yuzingizdan boshlanadi.",
      ru: "Результат начинается не с тренда, а с вашего лица.",
    },
    whatIsIt: {
      uz: "Filler — gialuron kislotasidan iborat gel. Gialuron kislotasi organizmimizga tabiiy modda bo‘lib, vaqt o‘tishi bilan asta-sekin so‘riladi va shu jarayonda terini ichidan namlantirishga yordam beradi. RenaMed klinikasida biz tabiiylik tarafdorimiz: mijozni butunlay o‘zgartirmaymiz, balki uning o‘ziga xos go‘zalligini ta'kidlaymiz.",
      ru: "Филлер — это гель на основе гиалуроновой кислоты. Гиалуроновая кислота естественна для нашего организма, со временем постепенно рассасывается и в этом процессе помогает увлажнять кожу изнутри. В клинике RenaMed мы за естественность: мы не переделываем клиента полностью, а подчёркиваем его уникальную красоту.",
    },
    indications: [
      {
        uz: "Burun-lab burmalari tufayli yuzda charchoq alomatlari sezilishi",
        ru: "Усталый вид лица из-за носогубных складок",
      },
      {
        uz: "Lab konturini aniqroq va uyg‘un ko‘rishni istash",
        ru: "Желание видеть более чёткий и гармоничный контур губ",
      },
      {
        uz: "Yuz proporsiyasiga mos, tabiiy natija olishni xohlash",
        ru: "Желание получить естественный результат, подходящий пропорциям лица",
      },
    ],
    benefits: [
      { uz: "Yuz proporsiyasiga individual yondashuv", ru: "Индивидуальный подход к пропорциям лица" },
      { uz: "Tabiiy va uyg‘un ko‘rinishga yordam beradi", ru: "Помогает добиться естественного и гармоничного вида" },
      {
        uz: "Gialuron kislotasi terini ichidan namlantirishga yordam beradi",
        ru: "Гиалуроновая кислота помогает увлажнять кожу изнутри",
      },
      { uz: "Natija trend emas, sizning yuzingiz asosida tanlanadi", ru: "Результат подбирается на основе вашего лица, а не тренда" },
    ],
    preparation: [
      { uz: "[DOCTOR_TO_FILL] — protsedura oldidan tayyorgarlik tavsiyalari", ru: "[DOCTOR_TO_FILL] — рекомендации по подготовке перед процедурой" },
    ],
    aftercare: [
      { uz: "[DOCTOR_TO_FILL] — protseduradan keyingi parvarish tavsiyalari", ru: "[DOCTOR_TO_FILL] — рекомендации по уходу после процедуры" },
    ],
    contraindications: [
      { uz: "[DOCTOR_TO_FILL] — qarshi ko‘rsatmalar ro‘yxati", ru: "[DOCTOR_TO_FILL] — список противопоказаний" },
    ],
    facts: { duration: "[DURATION]", sessions: "[SESSIONS]", price: "[PRICE]" },
    faq: [
      {
        q: { uz: "Filler natijasi qancha vaqt saqlanadi?", ru: "Как долго сохраняется результат филлера?" },
        a: {
          uz: "Gialuron kislotasi vaqt o‘tishi bilan asta-sekin so‘riladi, aniq muddat individual xususiyatlarga bog‘liq. [DOCTOR_TO_FILL]",
          ru: "Гиалуроновая кислота со временем постепенно рассасывается, точный срок зависит от индивидуальных особенностей. [DOCTOR_TO_FILL]",
        },
      },
      {
        q: { uz: "Trenddagi lab shakli menga ham mosmi?", ru: "Подойдёт ли мне трендовая форма губ?" },
        a: {
          uz: "Har bir yuzning proporsiyasi o‘ziga xos — mutaxassis aynan sizga mos hajm va shaklni tanlaydi.",
          ru: "Пропорции каждого лица индивидуальны — специалист подберёт объём и форму именно для вас.",
        },
      },
    ],
    relatedSlugs: ["gipergidroz"],
    interactiveBlock: "trend-vs-face",
    seo: {
      title: { uz: "Filler lab Samarqand", ru: "Филлер губы Самарканд" },
      description: {
        uz: "Gialuron kislotasi asosidagi filler — yuz proporsiyasiga mos, tabiiy natija Samarqandda.",
        ru: "Филлер на основе гиалуроновой кислоты — естественный результат, подходящий пропорциям лица, в Самарканде.",
      },
    },
  },
  {
    slug: "gipergidroz",
    category: "injection",
    icon: "wind",
    image: "/images/services/gipergidroz.svg",
    title: { uz: "Gipergidroz davolash", ru: "Лечение гипергидроза" },
    shortDescription: {
      uz: "Haddan tashqari terlashni nazorat qilishga yordam beruvchi zamonaviy muolaja.",
      ru: "Современная процедура, которая помогает контролировать избыточное потоотделение.",
    },
    heroTagline: { uz: "O‘zingizni erkin va ishonchli his eting.", ru: "Почувствуйте себя свободно и уверенно." },
    whatIsIt: {
      uz: "Gipergidroz — organizmning me'yordan ortiq ter ajratishi bilan kechadigan holat bo‘lib, qo‘l kaftlari, oyoqlar, qo‘ltiq osti va yuz sohalarida kuzatilishi mumkin. Zamonaviy kosmetologiyada gipergidrozni nazorat qilishga yordam beruvchi samarali usullar mavjud — jumladan, botulinum terapiyasi. Muolaja malakali shifokor tomonidan, konsultatsiyadan so‘ng amalga oshiriladi.",
      ru: "Гипергидроз — состояние, при котором организм выделяет избыточное количество пота; может наблюдаться в области ладоней, стоп, подмышек и лица. В современной косметологии есть эффективные методы, помогающие контролировать гипергидроз, — в том числе ботулинотерапия. Процедуру проводит квалифицированный врач после консультации.",
    },
    indications: [
      { uz: "Kiyimda nam dog‘lar paydo bo‘lishi", ru: "Появление влажных пятен на одежде" },
      { uz: "Qo‘l berib ko‘rishishda his qilinadigan noqulaylik", ru: "Дискомфорт при рукопожатии" },
      { uz: "Kundalik hayotda o‘ziga ishonchning pasayishi", ru: "Снижение уверенности в повседневной жизни" },
    ],
    benefits: [
      { uz: "Ter ajralishini kamaytirishga yordam beradi", ru: "Помогает уменьшить потоотделение" },
      {
        uz: "Uzoq muddatli qulaylik hissini ta'minlashga yordam beradi",
        ru: "Помогает обеспечить долговременное чувство комфорта",
      },
      {
        uz: "Malakali shifokor tomonidan konsultatsiyadan so‘ng amalga oshiriladi",
        ru: "Проводится квалифицированным врачом после консультации",
      },
      { uz: "O‘zini erkin va ishonchli his qilishga yordam beradi", ru: "Помогает почувствовать себя свободно и уверенно" },
    ],
    preparation: [
      { uz: "[DOCTOR_TO_FILL] — protsedura oldidan tayyorgarlik tavsiyalari", ru: "[DOCTOR_TO_FILL] — рекомендации по подготовке перед процедурой" },
    ],
    aftercare: [
      {
        uz: "Ta'sir muddati individual bo‘lib, mutaxassis tomonidan konsultatsiyada aniqlanadi. [DOCTOR_TO_FILL]",
        ru: "Длительность эффекта индивидуальна и определяется специалистом на консультации. [DOCTOR_TO_FILL]",
      },
    ],
    contraindications: [
      { uz: "[DOCTOR_TO_FILL] — qarshi ko‘rsatmalar ro‘yxati", ru: "[DOCTOR_TO_FILL] — список противопоказаний" },
    ],
    facts: { duration: "[DURATION]", sessions: "[SESSIONS]", price: "[PRICE]" },
    faq: [
      {
        q: { uz: "Muolaja qancha muddatga ta'sir qiladi?", ru: "На какой срок действует процедура?" },
        a: { uz: "Ta'sir muddati individual bo‘ladi. [DOCTOR_TO_FILL]", ru: "Длительность эффекта индивидуальна. [DOCTOR_TO_FILL]" },
      },
      {
        q: { uz: "Qaysi sohalarda amalga oshiriladi?", ru: "На каких зонах проводится?" },
        a: {
          uz: "Qo‘l kaftlari, oyoqlar, qo‘ltiq osti va yuz sohalarida amalga oshirilishi mumkin.",
          ru: "Может проводиться в области ладоней, стоп, подмышек и лица.",
        },
      },
    ],
    relatedSlugs: ["filler"],
    interactiveBlock: "body-area-selector",
    bodyAreas: [
      {
        key: "palms",
        label: { uz: "Qo‘l kaftlari", ru: "Ладони" },
        description: {
          uz: "Kaftlardagi ortiqcha terlash qo‘l berib ko‘rishish va kundalik ishlarda noqulaylik tug‘dirishi mumkin.",
          ru: "Избыточное потоотделение ладоней может вызывать дискомфорт при рукопожатии и в повседневных делах.",
        },
      },
      {
        key: "feet",
        label: { uz: "Oyoqlar", ru: "Стопы" },
        description: {
          uz: "Oyoq kafti terlashi yopiq poyabzalda noqulaylik va nam hissini kuchaytirishi mumkin.",
          ru: "Потливость стоп может усиливать дискомфорт и чувство влажности в закрытой обуви.",
        },
      },
      {
        key: "underarms",
        label: { uz: "Qo‘ltiq osti", ru: "Подмышки" },
        description: {
          uz: "Qo‘ltiq osti terlashi kiyimda nam dog‘lar qoldirib, o‘ziga ishonchni pasaytirishi mumkin.",
          ru: "Потливость подмышек может оставлять влажные пятна на одежде и снижать уверенность в себе.",
        },
      },
      {
        key: "face",
        label: { uz: "Yuz", ru: "Лицо" },
        description: {
          uz: "Yuz sohasidagi ortiqcha terlash ijtimoiy vaziyatlarda qulaysizlik tug‘dirishi mumkin.",
          ru: "Избыточное потоотделение в области лица может вызывать неловкость в социальных ситуациях.",
        },
      },
    ],
    seo: {
      title: { uz: "Gipergidroz davolash Samarqand", ru: "Лечение гипергидроза Самарканд" },
      description: {
        uz: "Gipergidrozni nazorat qilishga yordam beruvchi zamonaviy muolaja Samarqandda, konsultatsiyadan so‘ng.",
        ru: "Современная процедура для контроля гипергидроза в Самарканде, после консультации специалиста.",
      },
    },
  },
  {
    slug: "tana-korreksiyasi-g5-emslim",
    category: "body",
    icon: "activity",
    image: "/images/services/tana-korreksiyasi-g5-emslim.svg",
    title: { uz: "Tana korreksiyasi: G5 + Emslim + limfodrenaj", ru: "Коррекция фигуры: G5 + Emslim + лимфодренаж" },
    shortDescription: {
      uz: "Yog‘ to‘planishlari, mushak faolligi va shishlarni kamaytirishga qaratilgan kompleks yondashuv.",
      ru: "Комплексный подход к работе с жировыми отложениями, тонусом мышц и отёчностью.",
    },
    heroTagline: { uz: "Tana korreksiyasida kompleks yondashuv.", ru: "Комплексный подход к коррекции фигуры." },
    whatIsIt: {
      uz: "G5 + Emslim + limfodrenaj — uchta protsedurani birlashtirgan kompleks yondashuv. G5 yog‘ to‘planishlarini yumshatishga, Emslim mushaklarni faollashtirishga, limfodrenaj esa shishlarni kamaytirishga yordam beradi.",
      ru: "G5 + Emslim + лимфодренаж — комплексный подход, объединяющий три процедуры. G5 помогает смягчить жировые отложения, Emslim активирует мышцы, а лимфодренаж помогает уменьшить отёчность.",
    },
    indications: [
      { uz: "Tana konturini yaxshilashni istovchilar", ru: "Тех, кто хочет улучшить контур тела" },
      { uz: "Mushak faolligini oshirishni xohlaydiganlar", ru: "Тех, кто хочет повысить тонус мышц" },
      { uz: "Shish va og‘irlik hissidan xalos bo‘lishni istovchilar", ru: "Тех, кто хочет избавиться от отёчности и тяжести" },
    ],
    benefits: [
      { uz: "Yog‘ to‘planishlarini yumshatishga yordam beradi", ru: "Помогает смягчить жировые отложения" },
      { uz: "Mushaklarni faollashtiradi", ru: "Активирует мышцы" },
      { uz: "Shishlarni kamaytirishga yordam beradi", ru: "Помогает уменьшить отёчность" },
      { uz: "Bepul konsultatsiya va maxsus chegirma imkoniyati", ru: "Возможность бесплатной консультации и специальной скидки" },
    ],
    steps: [
      {
        title: { uz: "G5", ru: "G5" },
        text: {
          uz: "Mexanik massaj yog‘ to‘planishlarini yumshatishga yordam beradi.",
          ru: "Механический массаж помогает смягчить жировые отложения.",
        },
      },
      {
        title: { uz: "Emslim", ru: "Emslim" },
        text: { uz: "Elektromagnit ta'sir mushaklarni faollashtiradi.", ru: "Электромагнитное воздействие активирует мышцы." },
      },
      {
        title: { uz: "Limfodrenaj", ru: "Лимфодренаж" },
        text: { uz: "Limfa oqimini yaxshilab, shishlarni kamaytirishga yordam beradi.", ru: "Улучшает отток лимфы и помогает уменьшить отёчность." },
      },
    ],
    preparation: [
      { uz: "[DOCTOR_TO_FILL] — protsedura oldidan tayyorgarlik tavsiyalari", ru: "[DOCTOR_TO_FILL] — рекомендации по подготовке перед процедурой" },
    ],
    aftercare: [
      { uz: "[DOCTOR_TO_FILL] — protseduradan keyingi parvarish tavsiyalari", ru: "[DOCTOR_TO_FILL] — рекомендации по уходу после процедуры" },
    ],
    contraindications: [
      { uz: "[DOCTOR_TO_FILL] — qarshi ko‘rsatmalar ro‘yxati", ru: "[DOCTOR_TO_FILL] — список противопоказаний" },
    ],
    facts: { duration: "[DURATION]", sessions: "[SESSIONS]", price: "[PRICE]" },
    faq: [
      {
        q: { uz: "Necha seans tavsiya etiladi?", ru: "Сколько сеансов рекомендуется?" },
        a: {
          uz: "Seanslar soni tana holati va maqsadga qarab belgilanadi, aniq rejani konsultatsiyada olasiz. [CONFIRM]",
          ru: "Количество сеансов зависит от состояния тела и цели, точный план вы получите на консультации. [CONFIRM]",
        },
      },
    ],
    relatedSlugs: [],
    interactiveBlock: "complex-trio",
    seo: {
      title: { uz: "Tana korreksiyasi Samarqand", ru: "Коррекция фигуры Самарканд" },
      description: {
        uz: "G5 + Emslim + limfodrenaj kompleksi — Samarqandda tana korreksiyasi uchun kompleks yondashuv.",
        ru: "G5 + Emslim + лимфодренаж — комплексный подход к коррекции фигуры в Самарканде.",
      },
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: CategorySlug) {
  return services.filter((s) => s.category === category);
}
