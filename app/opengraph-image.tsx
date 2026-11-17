import { ImageResponse } from "next/og";

export const alt = "Shaik Mohammad Yaseen — Full Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#0e1b2e",
          color: "#e7ecf3",
        }}
      >
        <div style={{ fontSize: 30, color: "#7dd3c0" }}>Portfolio</div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          Shaik Mohammad Yaseen
        </div>
        <div style={{ fontSize: 42, marginTop: 28, color: "#9fb0c6" }}>
          Full Stack Software Engineer
        </div>
        <div style={{ fontSize: 32, marginTop: 20, color: "#9fb0c6" }}>
          React · Next.js · TypeScript · Node.js
        </div>
      </div>
    ),
    size,
  );
}
