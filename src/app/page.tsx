import React, { ReactElement } from "react";
import Terminal from "@/components/Terminal/Terminal";
import TerminalProvider from "@/providers/TerminalProvider";

export default function HomePage(): ReactElement {
  return (
    <div className="w-full h-full animate__animated animate__fadeIn animate__slower">
      <TerminalProvider>
        <Terminal />
      </TerminalProvider>
    </div>
  );
}
