"use client";

import { ReactElement } from "react";

interface ITerminalBasicLine {
  stdout: string | Promise<string>;
}

export default function TerminalBasicLine({
  stdout,
}: ITerminalBasicLine): ReactElement {
  return <p className="text-sm">{stdout}</p>;
}
