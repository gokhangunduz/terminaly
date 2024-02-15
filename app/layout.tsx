"use client";

import MainLayout from "@/layouts/main.layout";
import DOMProvider from "@/providers/dom.provider";
import { ReactElement } from "react";

export default function HomeLayout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <DOMProvider>
      <MainLayout>{children}</MainLayout>
    </DOMProvider>
  );
}
