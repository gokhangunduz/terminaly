"use client";

import { ReactElement } from "react";

interface ITerminalBasicLine {
  stdout: string;
}

export default function TerminalBasicLine({
  stdout,
}: ITerminalBasicLine): ReactElement {
  return <p className="text-base">{stdout}</p>;
}
