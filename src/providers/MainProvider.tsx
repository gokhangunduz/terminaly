"use client";

import { ReactElement } from "react";
import MainProvider from "@/context/MainContext";
import DisableRightClick from "@/utils/DisableRightClick";
import { TerminalContextProvider as TerminalProvider } from "react-terminal";

interface IAppProvider {
  children: ReactElement | ReactElement[];
}

export default function AppProvider({ children }: IAppProvider) {
  return (
    <MainProvider>
      <DisableRightClick />
      <TerminalProvider>{children}</TerminalProvider>
    </MainProvider>
  );
}
