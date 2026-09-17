import type { LocalizedText } from "./services";

export type Specialist = {
  id: string;
  name: string;
  /** Placeholder photo — replace with a real, consented staff photo in /public/images/specialists/. */
  photo: string;
  role: LocalizedText;
  bio: LocalizedText;
};

export const specialists: Specialist[] = [
  {
    id: "specialist-1",
    name: "[Ism Familiya]",
    photo: "/images/specialists/placeholder-1.svg",
    role: { uz: "Kosmetolog-dermatolog", ru: "Косметолог-дерматолог" },
    bio: {
      uz: "[Mutaxassis haqida qisqacha ma’lumot — tajriba, malaka va yo‘nalishlar shu yerga qo‘shiladi.]",
      ru: "[Краткая информация о специалисте — опыт, квалификация и направления будут добавлены сюда.]",
    },
  },
  {
    id: "specialist-2",
    name: "[Ism Familiya]",
    photo: "/images/specialists/placeholder-2.svg",
    role: { uz: "Lazer terapevti", ru: "Лазерный терапевт" },
    bio: {
      uz: "[Mutaxassis haqida qisqacha ma’lumot — tajriba, malaka va yo‘nalishlar shu yerga qo‘shiladi.]",
      ru: "[Краткая информация о специалисте — опыт, квалификация и направления будут добавлены сюда.]",
    },
  },
  {
    id: "specialist-3",
    name: "[Ism Familiya]",
    photo: "/images/specialists/placeholder-3.svg",
    role: { uz: "Estetik shifokor", ru: "Врач-эстетист" },
    bio: {
      uz: "[Mutaxassis haqida qisqacha ma’lumot — tajriba, malaka va yo‘nalishlar shu yerga qo‘shiladi.]",
      ru: "[Краткая информация о специалисте — опыт, квалификация и направления будут добавлены сюда.]",
    },
  },
  {
    id: "specialist-4",
    name: "[Ism Familiya]",
    photo: "/images/specialists/placeholder-4.svg",
    role: { uz: "Parvarish mutaxassisi", ru: "Специалист по уходу" },
    bio: {
      uz: "[Mutaxassis haqida qisqacha ma’lumot — tajriba, malaka va yo‘nalishlar shu yerga qo‘shiladi.]",
      ru: "[Краткая информация о специалисте — опыт, квалификация и направления будут добавлены сюда.]",
    },
  },
];
