"use client";

import { ReactElement } from "react";
import MainProvider from "../contexts/main.context";
import { TerminalContextProvider as TerminalProvider } from "react-terminal";
import VersionViewer from "@/components/versionviewer/versionviewer.component";
import "@/styles/global.css";
import "animate.css";

interface IMainLayout {
  children: ReactElement | ReactElement[];
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
