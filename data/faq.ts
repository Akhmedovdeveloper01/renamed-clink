import type { LocalizedText } from "./services";

export type FaqItem = {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
};

export const faq: FaqItem[] = [
  {
    id: "faq-1",
    question: {
      uz: "Qabulga qanday yozilsam bo‘ladi?",
      ru: "Как записаться на приём?",
    },
    answer: {
      uz: "Sayt pastidagi shakl orqali, telefon raqamimizga qo‘ng‘iroq qilib yoki Instagram/Telegram orqali murojaat qilib yozilishingiz mumkin.",
      ru: "Вы можете записаться через форму на сайте, позвонив по телефону или написав нам в Instagram/Telegram.",
    },
  },
  {
    id: "faq-2",
    question: {
      uz: "Protsedura oldidan konsultatsiya kerakmi?",
      ru: "Нужна ли консультация перед процедурой?",
    },
    answer: {
      uz: "Ha, har bir protsedura oldidan mutaxassis bilan konsultatsiya va teri/holat baholanadi, shundan so‘ng individual reja tuziladi.",
      ru: "Да, перед каждой процедурой проводится консультация со специалистом и оценка состояния, после чего составляется индивидуальный план.",
    },
  },
  {
    id: "faq-3",
    question: {
      uz: "Narxlar haqida ma’lumotni qayerdan bilsam bo‘ladi?",
      ru: "Где узнать стоимость процедур?",
    },
    answer: {
      uz: "Narxlar protsedura turi va individual rejaga qarab farq qiladi — aniq narxni konsultatsiya vaqtida yoki qo‘ng‘iroq orqali bilib olishingiz mumkin.",
      ru: "Стоимость зависит от вида процедуры и индивидуального плана — точную цену можно уточнить на консультации или по телефону.",
    },
  },
  {
    id: "faq-4",
    question: {
      uz: "Klinika qayerda joylashgan?",
      ru: "Где находится клиника?",
    },
    answer: {
      uz: "Klinikamiz Samarqand shahrida joylashgan. Aniq manzil va yo‘nalish uchun “Manzil” bo‘limiga qarang.",
      ru: "Наша клиника находится в Самарканде. Точный адрес и маршрут — в разделе «Контакты».",
    },
  },
  {
    id: "faq-5",
    question: {
      uz: "Protseduradan keyin qanday parvarish talab qilinadi?",
      ru: "Какой уход нужен после процедуры?",
    },
    answer: {
      uz: "Har bir protsedura uchun individual parvarish tavsiyalari mutaxassis tomonidan beriladi, bu terining holati va protsedura turiga bog‘liq.",
      ru: "Рекомендации по уходу после процедуры даёт специалист индивидуально — в зависимости от состояния кожи и вида процедуры.",
    },
  },
];
