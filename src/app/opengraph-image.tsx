import { ImageResponse } from "next/og";

export const alt = "Tiago Santos — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f4f3f0",
        color: "#0a0a0a",
        padding: "72px",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-220px",
          right: "-120px",
          width: "620px",
          height: "620px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(134,209,154,0.55) 0%, rgba(134,209,154,0) 68%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-260px",
          left: "-140px",
          width: "560px",
          height: "560px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(255,159,110,0.45) 0%, rgba(255,159,110,0) 68%)",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          fontSize: "24px",
          color: "#62605c",
          letterSpacing: "-0.01em",
        }}
      >
        <div
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "9999px",
            backgroundColor: "#1d7a45",
          }}
        />
        Full-stack developer · Portugal
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div
          style={{
            display: "flex",
            fontSize: "132px",
            fontWeight: 700,
            letterSpacing: "-0.065em",
            lineHeight: 0.95,
          }}
        >
          Tiago Santos<span style={{ color: "#1d7a45" }}>.</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "42px",
            color: "#62605c",
            letterSpacing: "-0.035em",
          }}
        >
          Clear, considered software.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          borderTop: "1px solid rgba(10,10,10,0.12)",
          paddingTop: "24px",
          fontSize: "22px",
          color: "#62605c",
        }}
      >
        <span>tiagodevs.net</span>
        <span>@tiagodevs</span>
      </div>
    </div>,
    { ...size },
  );
}
