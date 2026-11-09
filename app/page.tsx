"use client";

import dynamic from "next/dynamic";
import { ReactElement } from "react";

// react-terminal reads browser globals (window, navigator) while rendering
const Terminal = dynamic(
  () => import("@/components/terminal/terminal.component"),
  { ssr: false }
);

export default function HomePage(): ReactElement {
  return <Terminal />;
}
