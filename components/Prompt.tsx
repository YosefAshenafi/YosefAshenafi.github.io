import { C, F } from "@/lib/theme";

interface Props {
  path?: string;
  command: string;
}

export default function Prompt({ path = "~", command }: Props) {
  return (
    <div style={{ fontFamily: F.mono, fontSize: 13, color: C.fgMuted, lineHeight: 1.7 }}>
      <span style={{ color: C.accent }}>yosef</span>
      <span style={{ color: C.fgDim }}>@</span>
      <span style={{ color: C.blue }}>addis</span>
      <span style={{ color: C.fgDim }}>:</span>
      <span style={{ color: C.purple }}>{path}</span>
      <span style={{ color: C.fgDim }}>$ </span>
      <span style={{ color: C.fg }}>{command}</span>
    </div>
  );
}
