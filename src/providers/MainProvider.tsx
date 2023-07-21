import React, { ReactElement } from "react";
import MainContext from "@/context/MainContext";
import TerminalProvider from "./TerminalProvider";
import { Toaster } from "sonner";

interface IMainProvider {
  children: ReactElement | ReactElement[];
}

export default function MainProvider({ children }: IMainProvider) {
  return (
    <MainContext>
      <Toaster richColors position="bottom-center" />
      <TerminalProvider>{children}</TerminalProvider>
    </MainContext>
  );
}
