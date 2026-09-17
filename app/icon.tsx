import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          background: "linear-gradient(135deg, #1E40AF, #1E3A8A)",
          color: "#ffffff",
          fontSize: 28,
          fontWeight: 600,
          fontFamily: "serif",
          letterSpacing: 1,
        }}
      >
        RM
      </div>
    ),
    size
  );
}
