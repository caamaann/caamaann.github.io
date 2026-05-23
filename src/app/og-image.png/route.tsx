import { ImageResponse } from "next/og";

// Named `og-image.png` so static export emits a real `.png` file — GitHub
// Pages then serves it with the correct image/png MIME type (extensionless
// metadata-image routes are served as application/octet-stream and rejected
// by some social scrapers).
export const dynamic = "force-static";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0f 0%, #14142b 100%)",
          color: "#f0f0f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8b80ff",
            marginBottom: 24,
          }}
        >
          {"<Salman />"}
        </div>
        <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.05 }}>
          Muhammad Salman
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            lineHeight: 1.05,
            background: "linear-gradient(135deg, #6c63ff, #a855f7)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Al Hafizh
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#a0a0b5",
            marginTop: 32,
            display: "flex",
          }}
        >
          Fullstack Engineer · React.js & Next.js
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 80,
            fontSize: 26,
            color: "#6b6b80",
            display: "flex",
          }}
        >
          caamaann.github.io
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
