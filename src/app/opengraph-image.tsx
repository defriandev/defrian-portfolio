import { ImageResponse } from "next/og";

export const alt = "Defrian Bagus Dewanta Putra — Frontend Developer | Open for Internship";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFFFFF",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          borderTop: "12px solid #2563EB",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "4px",
              background: "#2563EB",
            }}
          />
          <span style={{ fontSize: "28px", fontWeight: 700, color: "#0F172A" }}>
            Defrian
          </span>
          <span style={{ fontSize: "24px", fontWeight: 600, color: "#2563EB" }}>
            .dev
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              padding: "8px 18px",
              borderRadius: "9999px",
              background: "#ECFDF5",
              border: "1px solid #A7F3D0",
              color: "#047857",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Open for Internship
          </div>

          <div
            style={{
              fontSize: "58px",
              fontWeight: 800,
              color: "#0F172A",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            Defrian Bagus Dewanta Putra
          </div>

          <div
            style={{
              fontSize: "30px",
              fontWeight: 500,
              color: "#475569",
            }}
          >
            Frontend Developer • React, Next.js &amp; TypeScript
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #E2E8F0",
            paddingTop: "24px",
            fontSize: "20px",
            color: "#64748B",
          }}
        >
          <span>D4 Teknik Informatika — Universitas Airlangga</span>
          <span>defrian.dev</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
