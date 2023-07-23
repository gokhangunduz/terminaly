import React, { ReactElement } from "react";

interface ITerminalPreformattedLine {
  stdout: string;
}

export default function TerminalPreformattedLine({
  stdout,
}: ITerminalPreformattedLine): ReactElement {
  return (
    <pre class="text-sm whitespace-pre-wrap break-normal w-full">{stdout}</pre>
  );
}
