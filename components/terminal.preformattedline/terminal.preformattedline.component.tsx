"use client";

import { ReactElement } from "react";

interface ITerminalPreformattedLine {
  stdout: string;
}

export default function TerminalPreformattedLine({
  stdout,
}: ITerminalPreformattedLine): ReactElement {
  return (
    <pre className="text-base whitespace-pre-wrap break-normal w-full">
      {stdout}
    </pre>
  );
}
