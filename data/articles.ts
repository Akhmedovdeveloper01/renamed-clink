import type { LocalizedText } from "./services";

export type Article = {
  slug: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  body: LocalizedText[];
  relatedServiceSlug?: string;
  readingTimeMinutes: number;
  /** ISO date */
  publishedAt: string;
};

export const articles: Article[] = [
  {
    slug: "lazer-epilyatsiyaga-tayyorgarlik",
    title: {
      uz: "Lazer epilyatsiyaga qanday tayyorlanish kerak?",
      ru: "Что важно знать перед лазерной эпиляцией?",
    },
    excerpt: {
      uz: "Muolajadan oldin bilishingiz kerak bo‘lgan uchta muhim tavsiya.",
      ru: "Три важные рекомендации, которые нужно знать перед процедурой.",
    },
    body: [
      {
        uz: "Lazer epilyatsiyaga tayyorgarlik ko‘rishda bir nechta muhim jihatga e'tibor qaratish kerak. Avvalo, muolajadan oldin kuchli quyosh toblanishidan saqlaning — bu terining sezgirligini oshirishi mumkin.",
        ru: "При подготовке к лазерной эпиляции важно учесть несколько моментов. Прежде всего, перед процедурой стоит избегать сильного загара — он может повысить чувствительность кожи.",
      },
      {
        uz: "Shuningdek, tuklarni ildizi bilan sug‘urmang — mum, epilyator yoki yulish orqali tuk olish lazer epilyatsiya samaradorligiga salbiy ta'sir qilishi mumkin. Muolajadan oldin faqat qirqishdan foydalanish tavsiya etiladi.",
        ru: "Также не стоит удалять волосы с корнем — воском, эпилятором или выщипыванием, так как это может повлиять на эффективность лазерной эпиляции. Перед процедурой рекомендуется только бритьё.",
      },
      {
        uz: "Va eng muhimi — kursni boshlashdan oldin mutaxassis konsultatsiyasidan o‘ting. Bu terining holatini baholash va individual rejani belgilash imkonini beradi.",
        ru: "И самое главное — перед началом курса пройдите консультацию специалиста. Это позволит оценить состояние кожи и составить индивидуальный план.",
      },
    ],
    relatedServiceSlug: "lazer-epilyatsiya",
    readingTimeMinutes: 3,
    publishedAt: "2026-06-01",
  },
  {
    slug: "trenddagi-lablar-hammaga-mosmi",
    title: {
      uz: "Trenddagi lablar hammaga ham mos keladimi?",
      ru: "Трендовые губы подходят не всем",
    },
    excerpt: {
      uz: "Nega filler tanlashda trend emas, yuz proporsiyasi asosiy mezon bo‘lishi kerak.",
      ru: "Почему при выборе филлера главным критерием должны быть пропорции лица, а не тренд.",
    },
    body: [
      {
        uz: "Ijtimoiy tarmoqlarda ko‘rgan lab shaklingiz sizga ham mos kelishiga kafolat yo‘q — har bir yuzning proporsiyasi o‘ziga xos.",
        ru: "Форма губ, увиденная в соцсетях, не гарантированно подойдёт именно вам — пропорции каждого лица индивидуальны.",
      },
      {
        uz: "Shuning uchun fillerda asosiy maqsad — trendni takrorlash emas, balki yuzingizga mos hajm va shaklni tanlash. Chiroyli va tabiiy natija trenddan emas, sizning yuzingizdan boshlanadi.",
        ru: "Поэтому главная задача филлера — не повторить тренд, а подобрать объём и форму, которые подходят именно вашему лицу. Красивый и естественный результат начинается не с тренда, а с ваших особенностей.",
      },
      {
        uz: "Konsultatsiya vaqtida mutaxassis yuz proporsiyalarini baholaydi va aynan sizga mos yechimni tavsiya qiladi.",
        ru: "На консультации специалист оценивает пропорции лица и предлагает решение, подходящее именно вам.",
      },
    ],
    relatedServiceSlug: "filler",
    readingTimeMinutes: 3,
    publishedAt: "2026-06-10",
  },
  {
    slug: "filler-nima",
    title: { uz: "Filler nima?", ru: "Что такое филлер?" },
    excerpt: {
      uz: "Gialuron kislotasi asosidagi gel qanday ishlaydi va nimalarga yordam beradi.",
      ru: "Как работает гель на основе гиалуроновой кислоты и чем он может помочь.",
    },
    body: [
      {
        uz: "Filler — gialuron kislotasidan iborat gel. Gialuron kislotasi organizmimizga tabiiy modda bo‘lib, vaqt o‘tishi bilan asta-sekin so‘riladi va shu jarayonda terini ichidan namlantirishga yordam beradi.",
        ru: "Филлер — это гель на основе гиалуроновой кислоты. Гиалуроновая кислота естественна для нашего организма, со временем постепенно рассасывается и в этом процессе помогает увлажнять кожу изнутри.",
      },
      {
        uz: "RenaMed klinikasida biz tabiiylik tarafdorimiz — mijozni butunlay o‘zgartirmaymiz, balki uning o‘ziga xos go‘zalligini ta'kidlaymiz.",
        ru: "В клинике RenaMed мы за естественность — мы не переделываем клиента полностью, а подчёркиваем его уникальную красоту.",
      },
      {
        uz: "Burun-lab burmalari tufayli charchoq alomatlarini sezyapsizmi yoki lab konturini aniqroq ko‘rishni xohlaysizmi — Direct'ga yozing, mutaxassislarimiz aynan sizga mos yechimni tanlab beradi.",
        ru: "Замечаете усталый вид из-за носогубных складок или мечтаете о более чётком контуре губ? Напишите нам в Direct — наши специалисты подберут решение именно для вас.",
      },
    ],
    relatedServiceSlug: "filler",
    readingTimeMinutes: 2,
    publishedAt: "2026-06-15",
  },
  {
    slug: "gipergidroz-nima-qilish-kerak",
    title: {
      uz: "Gipergidroz: haddan tashqari terlashdan qanday xalos bo‘lish mumkin?",
      ru: "Гипергидроз: что делать при повышенной потливости",
    },
    excerpt: {
      uz: "Ortiqcha terlash nimaga olib keladi va zamonaviy kosmetologiya qanday yordam bera oladi.",
      ru: "К чему приводит повышенная потливость и как может помочь современная косметология.",
    },
    body: [
      {
        uz: "Gipergidroz — organizmning me'yordan ortiq ter ajratishi bilan kechadigan holat bo‘lib, qo‘l kaftlari, oyoqlar, qo‘ltiq osti va yuz sohalarida kuzatilishi mumkin.",
        ru: "Гипергидроз — состояние избыточного потоотделения, которое может проявляться в области ладоней, стоп, подмышек и лица.",
      },
      {
        uz: "Bu holat kiyimda nam dog‘lar paydo bo‘lishiga, qo‘l berib ko‘rishishda noqulaylikka va kundalik hayotda o‘ziga ishonchning pasayishiga olib kelishi mumkin.",
        ru: "Это может приводить к появлению влажных пятен на одежде, дискомфорту при рукопожатии и снижению уверенности в повседневной жизни.",
      },
      {
        uz: "Zamonaviy kosmetologiyada gipergidrozni nazorat qilishga yordam beruvchi samarali usullar mavjud. Muolaja malakali shifokor tomonidan, konsultatsiyadan so‘ng amalga oshiriladi.",
        ru: "В современной косметологии есть эффективные методы, помогающие контролировать гипергидроз. Процедуру проводит квалифицированный врач после консультации.",
      },
    ],
    relatedServiceSlug: "gipergidroz",
    readingTimeMinutes: 3,
    publishedAt: "2026-06-20",
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
