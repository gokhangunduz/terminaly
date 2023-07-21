import React, { ReactElement } from "react";
import MainContext from "@/context/MainContext";
import TerminalProvider from "./TerminalProvider";

interface IMainProvider {
  children: ReactElement | ReactElement[];
}

export default function MainProvider({ children }: IMainProvider) {
  return (
    <MainContext>
      <TerminalProvider>{children}</TerminalProvider>
    </MainContext>
  );
}
