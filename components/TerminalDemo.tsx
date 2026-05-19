"use client";

import { useEffect, useState } from "react";
import { C, F } from "@/lib/theme";

const STACK = [".NET", "React", "Django", "React Native", "PostgreSQL"];

function PromptPrefix() {
  return (
    <>
      <span style={{ color: C.accent }}>yosef</span>
      <span style={{ color: C.fgDim }}>@</span>
      <span style={{ color: C.blue }}>addis</span>
      <span style={{ color: C.fgDim }}>:</span>
      <span style={{ color: C.purple }}>~</span>
      <span style={{ color: C.fgDim }}>$ </span>
    </>
  );
}

function BlinkCursor() {
  return (
    <span
      style={{
        display: "inline-block",
        width: 8,
        height: 15,
        background: C.accent,
        marginLeft: 1,
        verticalAlign: "middle",
        animation: "blink 1s steps(1) infinite",
      }}
    />
  );
}

const OUTPUTS: React.ReactNode[] = [
  <>
    <div style={{ color: C.fg, marginTop: 4 }}>
      <span style={{ color: C.warn }}>yosef</span> · senior software engineer
    </div>
    <div style={{ color: C.fgMuted }}>📍 addis ababa, et · UTC+3</div>
  </>,
  <div style={{ color: C.fg, marginTop: 4, display: "flex", flexWrap: "wrap", gap: "0 14px" }}>
    {STACK.map((s) => (
      <span key={s}>
        <span style={{ color: C.fgDim }}>›</span> {s}
      </span>
    ))}
  </div>,
  <div style={{ color: C.accent, marginTop: 4, display: "flex", alignItems: "center", gap: 8 }}>
    <span
      style={{
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: 999,
        background: C.accent,
        boxShadow: `0 0 10px ${C.accent}`,
        flexShrink: 0,
      }}
    />
    open to work · responds in &lt;24h
  </div>,
];

const CMDS = ["whoami", "cat stack.txt", "status"];
const TYPE_SPEED = 65;
const JITTER = 35;
const POST_CMD_PAUSE = 360;
const POST_OUTPUT_PAUSE = 1300;
const IDLE_PAUSE = 1800;
const CLEAR_POST_PAUSE = 280;

type Stage =
  | { kind: "typing" }
  | { kind: "idle" }
  | { kind: "clearing"; chars: number }
  | { kind: "cleared" };

export default function TerminalDemo() {
  const [typed, setTyped] = useState<number[]>([0, 0, 0]);
  const [outputVisible, setOutputVisible] = useState<boolean[]>([false, false, false]);
  const [activeCmd, setActiveCmd] = useState(0);
  const [stage, setStage] = useState<Stage>({ kind: "typing" });
  const [run, setRun] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    async function sequence() {
      // Reset
      setTyped([0, 0, 0]);
      setOutputVisible([false, false, false]);
      setActiveCmd(0);
      setStage({ kind: "typing" });

      for (let i = 0; i < CMDS.length; i++) {
        setActiveCmd(i);
        for (let c = 1; c <= CMDS[i].length; c++) {
          if (cancelled) return;
          setTyped((prev) => { const n = [...prev]; n[i] = c; return n; });
          await sleep(TYPE_SPEED + Math.random() * JITTER);
        }
        await sleep(POST_CMD_PAUSE);
        if (cancelled) return;
        setOutputVisible((prev) => { const n = [...prev]; n[i] = true; return n; });
        setActiveCmd(i + 1 < CMDS.length ? i + 1 : -1);
        await sleep(POST_OUTPUT_PAUSE);
      }

      // Idle cursor
      setStage({ kind: "idle" });
      await sleep(IDLE_PAUSE);
      if (cancelled) return;

      // Type "clear"
      const clearCmd = "clear";
      for (let c = 1; c <= clearCmd.length; c++) {
        if (cancelled) return;
        setStage({ kind: "clearing", chars: c });
        await sleep(TYPE_SPEED + Math.random() * JITTER);
      }

      await sleep(CLEAR_POST_PAUSE);
      if (cancelled) return;

      // Wipe
      setStage({ kind: "cleared" });
      await sleep(120);
      if (!cancelled) setRun((r) => r + 1);
    }

    sequence();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run]);

  if (stage.kind === "cleared") {
    return <div style={{ fontFamily: F.mono, fontSize: 13, lineHeight: 1.8 }} />;
  }

  const clearTyped = stage.kind === "clearing" ? stage.chars : 0;
  const showClearPrompt = stage.kind === "clearing";
  const showIdleCursor = stage.kind === "idle" || (stage.kind === "typing" && activeCmd === -1);

  return (
    <div style={{ fontFamily: F.mono, fontSize: 13, lineHeight: 1.8 }}>
      {CMDS.map((cmd, i) => {
        const isActive = activeCmd === i;
        const hasStarted = typed[i] > 0 || isActive;
        if (!hasStarted && !outputVisible[i]) return null;

        return (
          <div key={i} style={{ marginTop: i === 0 ? 0 : 14 }}>
            <div style={{ color: C.fgMuted, display: "flex", alignItems: "center", flexWrap: "wrap" }}>
              <PromptPrefix />
              <span style={{ color: C.fg }}>{cmd.slice(0, typed[i])}</span>
              {isActive && typed[i] < cmd.length && <BlinkCursor />}
            </div>
            {outputVisible[i] && OUTPUTS[i]}
          </div>
        );
      })}

      {/* Idle cursor row */}
      {showIdleCursor && !showClearPrompt && (
        <div style={{ marginTop: 14, display: "flex", alignItems: "center" }}>
          <PromptPrefix />
          <BlinkCursor />
        </div>
      )}

      {/* "clear" being typed */}
      {showClearPrompt && (
        <div style={{ marginTop: 14, display: "flex", alignItems: "center" }}>
          <PromptPrefix />
          <span style={{ color: C.fg }}>{"clear".slice(0, clearTyped)}</span>
          {clearTyped < 5 && <BlinkCursor />}
        </div>
      )}
    </div>
  );
}
