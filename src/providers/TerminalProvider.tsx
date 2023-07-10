"use client";

import React, { ReactElement } from "react";
import { TerminalContextProvider } from "react-terminal";

interface ITerminalProvider {
  children: ReactElement | ReactElement[];
}

export default function TerminalProvider({
  children,
}: ITerminalProvider): ReactElement {
  return <TerminalContextProvider>{children}</TerminalContextProvider>;
}
