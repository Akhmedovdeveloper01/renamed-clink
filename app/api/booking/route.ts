import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { bookingApiSchema } from "@/lib/schemas/booking-schema";
import { isRateLimited } from "@/lib/rate-limit";
import { getServiceBySlug } from "@/data/services";
import { getPromotionForService } from "@/data/promotions";

export async function POST(request: Request) {
  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headerList.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      { status: 429 }
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_body" },
      { status: 400 }
    );
  }

  const parsed = bookingApiSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation_error" },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Honeypot: bots fill hidden fields. Pretend success without notifying.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const service = getServiceBySlug(data.service);
  const serviceName = service ? service.title.uz : data.service;
  const promo = getPromotionForService(data.service);
  const formattedPhone = `+${data.phone}`;

  const text = [
    "🔔 Yangi so'rov — RENAMED Aesthetic Clinic",
    `👤 Ism: ${data.name}`,
    `📞 Telefon: ${formattedPhone}`,
    `💼 Yo'nalish: ${serviceName}`,
    `📅 Sana: ${data.date}`,
    data.comment ? `💬 Izoh: ${data.comment}` : undefined,
    promo ? `🏷️ Aksiya: ${promo.title.uz}` : undefined,
  ]
    .filter(Boolean)
    .join("\n");

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.log("[booking] TELEGRAM_BOT_TOKEN/TELEGRAM_CHAT_ID not set. Submission:\n" + text);
    return NextResponse.json({ ok: true });
  }

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      }
    );

    if (!telegramResponse.ok) {
      console.error("[booking] Telegram API error", await telegramResponse.text());
      return NextResponse.json(
        { ok: false, error: "telegram_error" },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("[booking] Failed to reach Telegram API", error);
    return NextResponse.json(
      { ok: false, error: "telegram_error" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({ ok: false, error: "method_not_allowed" }, { status: 405 });
}
