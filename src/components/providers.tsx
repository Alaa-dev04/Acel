"use client";
import { Suspense } from "react";
import type { ReactNode } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";


export default function Providers({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Suspense fallback={null}>
      <NuqsAdapter>
          {children}
      </NuqsAdapter>
    </Suspense>
  );
}