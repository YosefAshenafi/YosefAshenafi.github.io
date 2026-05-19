import Prompt from "@/components/Prompt";
import SectionLabel from "@/components/SectionLabel";
import { C, F } from "@/lib/theme";

interface Props {
  email: string;
  emailAlt: string;
  phone: string;
  address: string;
  location: string;
  telegram: string;
}

export default function Contact({ email, emailAlt, phone, address, location, telegram }: Props) {
  const links = [
    { label: "Email", value: email, key: "M", href: `mailto:${email}` },
    { label: "Email (alt)", value: emailAlt, key: "A", href: `mailto:${emailAlt}` },
    { label: "Phone", value: phone, key: "P", href: `tel:${phone.replace(/\s/g, "")}` },
    { label: "GitHub", value: "github.com/yosef", key: "G", href: "https://github.com/yosef" },
    { label: "LinkedIn", value: "linkedin.com/in/yosef-ashenafi", key: "L", href: "https://linkedin.com/in/yosef-ashenafi" },
    { label: "Telegram", value: telegram, key: "T", href: `https://${telegram}` },
    { label: "Address", value: address, key: "@", href: `https://maps.google.com/?q=${encodeURIComponent(address)}` },
  ];

  return (
    <section
      id="contact"
      className="section-pad-contact"
    >
      <SectionLabel n="07" label="contact" />

      <div className="grid-contact">
        {/* Left */}
        <div>
          <h2
            style={{
              fontFamily: F.sans,
              fontSize: 64,
              fontWeight: 600,
              color: C.fg,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
            }}
          >
            Have something
            <br />
            <span style={{ color: C.fgDim }}>to ship?</span>
            <br />
            <span style={{ color: C.accent, fontStyle: "italic" }}>let&apos;s talk.</span>
          </h2>

          <p
            style={{
              fontFamily: F.sans,
              fontSize: 16,
              color: C.fgMuted,
              marginTop: 28,
              maxWidth: 480,
              lineHeight: 1.6,
            }}
          >
            Currently taking on new engagements: contract, full-time remote, or short-term advisory.
            Mornings in Addis (UTC+3), happy to overlap with US or EU teams.
          </p>

          {/* Syntax-highlighted contact.json */}
          <div
            style={{
              marginTop: 40,
              padding: 24,
              background: C.bgInset,
              border: `1px solid ${C.line}`,
              borderRadius: 12,
              fontFamily: F.mono,
              fontSize: 13.5,
              lineHeight: 1.9,
            }}
          >
            <Prompt path="~" command="cat contact.json" />
            <div style={{ marginTop: 12, color: C.fg }}>
              {"{"}
              <div style={{ paddingLeft: 20 }}>
                <div>
                  <span style={{ color: C.pink }}>&quot;email&quot;</span>
                  <span style={{ color: C.fgDim }}>:    </span>
                  <span style={{ color: C.warn }}>&quot;{email}&quot;</span>
                  <span style={{ color: C.fgDim }}>,</span>
                </div>
                <div>
                  <span style={{ color: C.pink }}>&quot;phone&quot;</span>
                  <span style={{ color: C.fgDim }}>:    </span>
                  <span style={{ color: C.warn }}>&quot;{phone}&quot;</span>
                  <span style={{ color: C.fgDim }}>,</span>
                </div>
                <div>
                  <span style={{ color: C.pink }}>&quot;based&quot;</span>
                  <span style={{ color: C.fgDim }}>:    </span>
                  <span style={{ color: C.warn }}>&quot;{location}&quot;</span>
                  <span style={{ color: C.fgDim }}>,</span>
                </div>
                <div>
                  <span style={{ color: C.pink }}>&quot;timezone&quot;</span>
                  <span style={{ color: C.fgDim }}>: </span>
                  <span style={{ color: C.warn }}>&quot;UTC+3&quot;</span>
                  <span style={{ color: C.fgDim }}>,</span>
                </div>
                <div>
                  <span style={{ color: C.pink }}>&quot;status&quot;</span>
                  <span style={{ color: C.fgDim }}>:   </span>
                  <span style={{ color: C.accent }}>&quot;open&quot;</span>
                  <span style={{ color: C.fgDim }}>,</span>
                </div>
              </div>
              {"}"}
            </div>
          </div>
        </div>

        {/* Right — quick links */}
        <div
          style={{
            background: C.bgRaised,
            border: `1px solid ${C.line}`,
            borderRadius: 12,
            padding: 28,
          }}
        >
          <div
            style={{
              fontFamily: F.mono,
              fontSize: 11,
              color: C.fgDim,
              marginBottom: 18,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            // quick links
          </div>

          {links.map((row, i) => (
            <a
              key={row.key}
              href={row.href}
              target={row.href.startsWith("mailto:") || row.href.startsWith("tel:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="quick-link"
              style={{
                borderBottom: i < links.length - 1 ? `1px solid ${C.lineSoft}` : "none",
              }}
            >
              <span
                style={{
                  fontFamily: F.mono,
                  fontSize: 12,
                  color: C.accent,
                  width: 22,
                  height: 22,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${C.accent}18`,
                  borderRadius: 5,
                  flexShrink: 0,
                }}
              >
                {row.key}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: F.mono,
                    fontSize: 10.5,
                    color: C.fgDim,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {row.label}
                </div>
                <div
                  style={{
                    fontFamily: F.sans,
                    fontSize: 14,
                    color: C.fg,
                    marginTop: 2,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.value}
                </div>
              </div>
              <span style={{ color: C.fgDim, fontFamily: F.mono }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
