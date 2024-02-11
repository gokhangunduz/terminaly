"use client";

import { ReactElement } from "react";
import MainProvider from "@/context/main.context";
import { TerminalContextProvider as TerminalProvider } from "react-terminal";
import DisableRightClick from "@/utils/DisableRightClick";
import VersionViewer from "@/components/VersionViewer/VersionViewer";

interface IAppProvider {
  children: ReactElement | ReactElement[];
}

export default function AppProvider({ children }: IAppProvider) {
  return (
    <MainProvider>
      <TerminalProvider>
        <VersionViewer />
        <DisableRightClick />
        {children}
      </TerminalProvider>
    </MainProvider>
  );
}
