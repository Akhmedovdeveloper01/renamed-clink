import { z } from "zod";
import { services } from "@/data/services";

const serviceSlugs = services.map((s) => s.slug) as [string, ...string[]];

/** Server-side validation shape. Client-facing error copy lives in messages/*.json. */
export const bookingApiSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/\D/g, ""))
    .refine((v) => /^998\d{9}$/.test(v), "invalid_phone"),
  service: z.enum(serviceSlugs),
  date: z.string().min(1),
  comment: z.string().trim().max(500).optional().or(z.literal("")),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
});

export type BookingApiInput = z.infer<typeof bookingApiSchema>;
