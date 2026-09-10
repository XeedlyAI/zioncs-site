import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Zion Concrete Specialists — Utah's flatwork contractor, Wasatch Front + St. George";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #1A1814 0%, #26221C 50%, #1A1814 100%)",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            fontFamily: "monospace",
            fontSize: 22,
            color: "#F26B1F",
            letterSpacing: 4,
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: 36,
          }}
        >
          ZIONCS://UTAH-CONCRETE
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            color: "#F5F0E6",
            letterSpacing: -2,
            lineHeight: 1.05,
            marginBottom: 32,
            maxWidth: 980,
          }}
        >
          Concrete that holds up to Utah.
        </div>

        {/* Lead */}
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "rgba(245, 240, 230, 0.78)",
            lineHeight: 1.4,
            maxWidth: 900,
            marginBottom: 48,
          }}
        >
          Driveways, patios, pool decks, commercial flatwork. Wasatch
          Front + St. George.
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
            fontFamily: "monospace",
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              display: "flex",
              fontWeight: 700,
              color: "#F5F0E6",
            }}
          >
            Zion Concrete Specialists
          </div>
          <div
            style={{
              display: "flex",
              color: "#A99F8B",
            }}
          >
            zioncs.com
          </div>
        </div>

        {/* Orange accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 8,
            background: "#F26B1F",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
