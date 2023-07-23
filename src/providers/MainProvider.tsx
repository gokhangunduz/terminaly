import React, { ReactElement } from "react";
import MainContext from "@/context/MainContext";
import TerminalProvider from "./TerminalProvider";
import DisableRightClick from "@/utils/DisableRightClick";

interface IMainProvider {
  children: ReactElement | ReactElement[];
}

export default function MainProvider({ children }: IMainProvider) {
  return (
    <MainContext>
      <DisableRightClick />
      <TerminalProvider>{children}</TerminalProvider>
    </MainContext>
  );
}
