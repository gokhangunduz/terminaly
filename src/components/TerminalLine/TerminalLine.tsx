import React, { ReactElement } from "react";

interface ITerminalLine {
  stdout: string | Promise<string>;
}

export default function TerminalLine({ stdout }: ITerminalLine): ReactElement {
  return <p className="text-sm">{stdout}</p>;
}
