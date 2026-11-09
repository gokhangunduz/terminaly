"use client";

import { ReactNode } from "react";
import MainProvider from "../contexts/app.context";
import { TerminalContextProvider as TerminalProvider } from "react-terminal";
import VersionViewer from "@/components/versionviewer/versionviewer.component";

interface IMainLayout {
  children: ReactNode;
}

export default function MainLayout({ children }: IMainLayout) {
  return (
    <MainProvider>
      <TerminalProvider>
        {children}
        <VersionViewer />
      </TerminalProvider>
    </MainProvider>
  );
}
