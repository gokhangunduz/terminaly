"use client";

import { ReactElement } from "react";
import { ReactTerminal } from "react-terminal";
import TerminalBasicLine from "../TerminalBasicLine/TerminalBasicLine";
import TerminalPreformattedLine from "../TerminalPreformattedLine/TerminalPreformattedLine";
import useApp from "@/hooks/useApp";
import themes from "@/themes/themes.json";

export default function Terminal(): ReactElement {
  const { ipInfo, me } = useApp();

  const commands = {
    whoami: <TerminalPreformattedLine stdout={JSON.stringify(me, null, 1)} />,
    whatsmyip: (
      <TerminalPreformattedLine stdout={JSON.stringify(ipInfo, null, 1)} />
    ),
    reload: () => {
      window.location.reload();
    },
    help: (
      <TerminalBasicLine stdout="Available commands: whoami, whatsmyip, reload, help" />
    ),
  };

  return (
    <ReactTerminal
      prompt={"gokhangunduz@gg:"}
      themes={themes}
      theme="gg"
      showControlBar={false}
      showControlButtons={false}
      commands={commands}
      defaultHandler={(command: string) => {
        return `"${command}" command is blocked. If you want to see all commands, type "help".`;
      }}
    />
  );
}
