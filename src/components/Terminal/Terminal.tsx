"use client";

import { ReactElement } from "react";
import { ReactTerminal } from "react-terminal";
import TerminalLine from "../TerminalLine/TerminalLine";
import TerminalPreformattedLine from "../TerminalPreformattedLine/TerminalPreformattedLine";
import useApp from "@/hooks/useApp";

export default function Terminal(): ReactElement {
  const { ipDetails, me } = useApp();

  const commands = {
    whoami: <TerminalPreformattedLine stdout={JSON.stringify(me, null, 1)} />,
    whatsmyip: (
      <TerminalPreformattedLine stdout={JSON.stringify(ipDetails, null, 1)} />
    ),
    reload: () => {
      window.location.reload();
    },
    help: (
      <TerminalLine stdout="Available commands: whoami, whatsmyip, reload, help" />
    ),
  };

  return (
    <ReactTerminal
      prompt={"gokhangunduz@gg:"}
      themes={{
        ggTheme: {
          themeBGColor: "#000",
          themeColor: "#3EF379",
          themePromptColor: "#FFF",
        },
      }}
      theme="ggTheme"
      showControlBar={false}
      showControlButtons={false}
      commands={commands}
      defaultHandler={(command: string) => {
        return `"${command}" command is blocked. If you want to see all commands, type "help".`;
      }}
    />
  );
}
