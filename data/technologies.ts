import type { LocalizedText } from "./services";

export type Technology = {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
};

/** Placeholder equipment — replace with the clinic's actual certified devices. */
export const technologies: Technology[] = [
  {
    id: "tech-1",
    name: { uz: "[Uskuna nomi]", ru: "[Название оборудования]" },
    description: {
      uz: "[Uskuna haqida qisqacha tavsif shu yerga qo‘shiladi.]",
      ru: "[Краткое описание оборудования будет добавлено сюда.]",
    },
  },
  {
    id: "tech-2",
    name: { uz: "[Uskuna nomi]", ru: "[Название оборудования]" },
    description: {
      uz: "[Uskuna haqida qisqacha tavsif shu yerga qo‘shiladi.]",
      ru: "[Краткое описание оборудования будет добавлено сюда.]",
    },
  },
  {
    id: "tech-3",
    name: { uz: "[Uskuna nomi]", ru: "[Название оборудования]" },
    description: {
      uz: "[Uskuna haqida qisqacha tavsif shu yerga qo‘shiladi.]",
      ru: "[Краткое описание оборудования будет добавлено сюда.]",
    },
  },
  {
    id: "tech-4",
    name: { uz: "[Uskuna nomi]", ru: "[Название оборудования]" },
    description: {
      uz: "[Uskuna haqida qisqacha tavsif shu yerga qo‘shiladi.]",
      ru: "[Краткое описание оборудования будет добавлено сюда.]",
    },
  },
  {
    id: "tech-5",
    name: { uz: "[Uskuna nomi]", ru: "[Название оборудования]" },
    description: {
      uz: "[Uskuna haqida qisqacha tavsif shu yerga qo‘shiladi.]",
      ru: "[Краткое описание оборудования будет добавлено сюда.]",
    },
  },
];
