"use client";
import { Suspense } from "react";
import type { ReactNode } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "@/components/ui/sonner";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <NuqsAdapter>
        {children}
        <Toaster
          position="top-center"
          richColors
          toastOptions={{
            classNames: {
              toast: "font-sans rounded-xl shadow-lg",
              title: "font-semibold",
              description: "text-sm",
              success: "!bg-green-500/50 !border-green-500 !text-white",
              error: "!bg-red-500/50 !border-red-500 !text-white",
              warning: "!bg-yellow-400/50 !border-yellow-400 !text-black",
              info: "!bg-blue-500/50 !border-blue-500 !text-white",
            },
          }}
        />
      </NuqsAdapter>
    </Suspense>
  );
}
