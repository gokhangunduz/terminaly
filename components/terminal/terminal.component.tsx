"use client";

import PreformattedLine from "@/components/terminal.preformattedline/terminal.preformattedline.component";
import BasicLine from "@/components/terminal.basicline/terminal.basicline.component";
import { ReactTerminal } from "react-terminal";
import themes from "@/themes/themes.json";
import { ReactElement } from "react";
import useApp from "@/hooks/useApp";

export default function Terminal(): ReactElement {
  const { ipInfo, me } = useApp();

  const commands = {
    whoami: <PreformattedLine stdout={JSON.stringify(me, null, 1)} />,
    whatsmyip: <PreformattedLine stdout={JSON.stringify(ipInfo, null, 1)} />,
    reload: () => {
      window.location.reload();
    },
    help: (
      <BasicLine stdout="Available commands: whoami, whatsmyip, reload, help" />
    ),
  };

  return (
    <div className="hw-screen animate__animated animate__fadeIn animate__slower">
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
    </div>
  );
}
