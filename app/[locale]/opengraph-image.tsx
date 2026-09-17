import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #10192f, #1E3A8A)",
          padding: 80,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 24,
            background: "linear-gradient(135deg, #1E40AF, #4d6fff)",
            color: "#ffffff",
            fontSize: 40,
            fontWeight: 600,
            fontFamily: "serif",
            marginBottom: 36,
          }}
        >
          RM
        </div>
        <div
          style={{
            fontFamily: "serif",
            fontSize: 64,
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: 6,
          }}
        >
          RENAMED
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 18,
            letterSpacing: 6,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          — AESTHETIC CLINIC —
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 28,
            color: "rgba(255,255,255,0.9)",
            maxWidth: 820,
          }}
        >
          {t("ogTitle")}
        </div>
      </div>
    ),
    size
  );
}
