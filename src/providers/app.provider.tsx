"use client";

import { ReactElement, useEffect } from "react";
import MainProvider from "@/context/main.context";
import { TerminalContextProvider as TerminalProvider } from "react-terminal";
import VersionViewer from "@/components/VersionViewer/VersionViewer";
import { disableRightClick } from "@/functions/rightclick.function";

interface IAppProvider {
  children: ReactElement | ReactElement[];
}

export default function AppProvider({ children }: IAppProvider) {
  useEffect(() => {
    disableRightClick();
  }, []);

  return (
    <MainProvider>
      <TerminalProvider>
        {children}
        <VersionViewer />
      </TerminalProvider>
    </MainProvider>
  );
}
