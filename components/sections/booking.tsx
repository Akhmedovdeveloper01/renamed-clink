"use client";

import { useLocale, useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { Controller, useForm } from "react-hook-form";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { z } from "zod";
import { Reveal } from "@/components/motion/reveal";
import { PhoneInput } from "@/components/ui/phone-input";
import { magneticButtonBaseClass } from "@/lib/button-styles";
import { services } from "@/data/services";
import type { Locale } from "@/i18n/routing";

type FormValues = {
  name: string;
  phone: string;
  service: string;
  date: string;
  comment?: string;
  website?: string;
};

export function Booking() {
  return (
    <Suspense fallback={<BookingFallback />}>
      <BookingForm />
    </Suspense>
  );
}

function BookingFallback() {
  const t = useTranslations("booking");
  return (
    <section id="booking" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-2xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {t("eyebrow")}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            {t("title")}
          </h2>
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const t = useTranslations("booking");
  const locale = useLocale() as Locale;
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service");
  const initialService =
    preselectedService && services.some((s) => s.slug === preselectedService)
      ? preselectedService
      : "";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(2, t("errorName")),
        phone: z
          .string()
          .refine((v) => /^998\d{9}$/.test(v), t("errorPhone")),
        service: z.string().min(1, t("errorService")),
        date: z
          .string()
          .min(1, t("errorDate"))
          .refine((v) => {
            const selected = new Date(v);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return selected >= today;
          }, t("errorDatePast")),
        comment: z.string().max(500).optional(),
        website: z.string().max(0).optional(),
      }),
    [t]
  );

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      service: initialService,
      date: "",
      comment: "",
      website: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setStatus("submitting");
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.status === 429) {
        setStatus("error");
        return;
      }
      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const today = new Date().toISOString().slice(0, 10);

  return (
    <section id="booking" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-2xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {t("eyebrow")}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              {t("title")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-foreground-muted">
              {t("subtitle")}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mt-12 rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] sm:p-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft text-brand"
                  >
                    <CheckCircle2 size={32} />
                  </motion.div>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">
                    {t("successTitle")}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-foreground-muted">
                    {t("successMessage")}
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className={magneticButtonBaseClass("ghost") + " mt-7"}
                  >
                    {t("sendAnother")}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-5"
                >
                  {/* Honeypot — hidden from real users, left empty by bots to fail silently server-side */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register("website")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      {t("nameLabel")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder={t("namePlaceholder")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className="w-full rounded-xl border border-border-strong bg-bg-elevated px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted focus-visible:border-brand"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      {t("phoneLabel")}
                    </label>
                    <Controller
                      control={control}
                      name="phone"
                      render={({ field }) => (
                        <PhoneInput
                          id="phone"
                          value={field.value}
                          onChange={field.onChange}
                          onBlur={field.onBlur}
                          placeholder={t("phonePlaceholder")}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                        />
                      )}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1.5 text-xs text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      {t("serviceLabel")}
                    </label>
                    <select
                      id="service"
                      defaultValue={initialService}
                      aria-invalid={!!errors.service}
                      aria-describedby={errors.service ? "service-error" : undefined}
                      className="w-full rounded-xl border border-border-strong bg-bg-elevated px-4 py-3 text-sm text-foreground focus-visible:border-brand"
                      {...register("service")}
                    >
                      <option value="" disabled>
                        {t("servicePlaceholder")}
                      </option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.slug}>
                          {service.title[locale]}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="service-error" className="mt-1.5 text-xs text-red-500">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      {t("dateLabel")}
                    </label>
                    <input
                      id="date"
                      type="date"
                      min={today}
                      aria-invalid={!!errors.date}
                      aria-describedby={errors.date ? "date-error" : undefined}
                      className="w-full rounded-xl border border-border-strong bg-bg-elevated px-4 py-3 text-sm text-foreground focus-visible:border-brand"
                      {...register("date")}
                    />
                    {errors.date && (
                      <p id="date-error" className="mt-1.5 text-xs text-red-500">
                        {errors.date.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="comment"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      {t("commentLabel")}
                    </label>
                    <textarea
                      id="comment"
                      rows={3}
                      placeholder={t("commentPlaceholder")}
                      className="w-full resize-none rounded-xl border border-border-strong bg-bg-elevated px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted focus-visible:border-brand"
                      {...register("comment")}
                    />
                  </div>

                  {status === "error" && (
                    <p role="alert" className="text-sm text-red-500">
                      {t("errorGeneric")}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || status === "submitting"}
                    className={
                      magneticButtonBaseClass("primary") +
                      " w-full disabled:opacity-70"
                    }
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        {t("submitting")}
                      </>
                    ) : (
                      t("submit")
                    )}
                  </button>

                  <p className="text-center text-xs text-foreground-muted">
                    {t("privacyNote")}
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
