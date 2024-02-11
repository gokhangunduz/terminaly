"use client";

import { ReactElement } from "react";
import packageJSON from "../../package.json";

export default function VersionViewer(): ReactElement {
  return (
    <p className="fixed bottom-0.5 right-2 z-50 text-xs text-gray-600 pointer-events-none">
      {process.env.NODE_ENV === "production" ? "P" : "D"} {packageJSON?.version}
    </p>
  );
}
