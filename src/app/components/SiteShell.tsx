"use client";

import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { useReveal } from "@/hooks/useReveal";

export default function SiteShell({ children }: { children: ReactNode }) {
  useReveal();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      {children}
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#121614",
            color: "#F5F3EE",
            borderRadius: "999px",
            fontSize: "14px",
            padding: "12px 16px",
          },
        }}
      />
    </>
  );
}
