import React, { ReactElement } from "react";

interface ITerminalPreformattedLine {
  stdout: string;
}

export default function TerminalPreformattedLine({
  stdout,
}: ITerminalPreformattedLine): ReactElement {
  return <pre className="text-sm">{stdout}</pre>;
}
