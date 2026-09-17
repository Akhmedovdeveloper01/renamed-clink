import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1E40AF, #1E3A8A)",
          color: "#ffffff",
          fontSize: 76,
          fontWeight: 600,
          fontFamily: "serif",
          letterSpacing: 2,
        }}
      >
        RM
      </div>
    ),
    size
  );
}
