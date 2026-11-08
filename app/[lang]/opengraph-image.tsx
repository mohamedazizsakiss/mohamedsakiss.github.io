import { ImageResponse } from "next/og";
import { hasLocale, defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// Link-preview image shown when the portfolio is shared (LinkedIn, WhatsApp, X, Slack…), one per language.
export const alt = "Mohamed Aziz Sakiss: AI engineer who ships full products, not just models";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#1A1B22";
const ACCENT = "#F9A826";
const TEXT = "#F8F9FA";
const MUTED = "#9BA1A6";

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { meta } = getDictionary(hasLocale(lang) ? lang : defaultLocale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          padding: "72px 80px",
          borderTop: `8px solid ${ACCENT}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: ACCENT,
              color: BG,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            M
          </div>
          <div style={{ display: "flex", color: MUTED, fontSize: 24, letterSpacing: 6 }}>MOHAMEDSAKISS.ME</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: TEXT, fontSize: 96, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>
            Mohamed Aziz Sakiss.
          </div>
          <div style={{ display: "flex", width: 96, height: 10, background: ACCENT, marginTop: 36, marginBottom: 36 }} />
          <div style={{ display: "flex", color: TEXT, fontSize: 38, fontWeight: 600, lineHeight: 1.25 }}>
            {meta.ogTagline}
          </div>
        </div>

        <div style={{ display: "flex", color: MUTED, fontSize: 26, letterSpacing: 2 }}>{meta.ogTopics}</div>
      </div>
    ),
    { ...size }
  );
}
