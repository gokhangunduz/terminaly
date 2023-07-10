"use client";

import React, { ReactElement } from "react";
import { ReactTerminal } from "react-terminal";
import TerminalLine from "../TerminalLine/TerminalLine";
import TerminalPreformattedLine from "../TerminalPreformattedLine/TerminalPreformattedLine";

export default function Terminal(): ReactElement {
  const me = {
    firstName: "Gökhan",
    lastName: "Gündüz",
    age: 24,
    email: "mail@gokhangunduz.com.tr",
    title: "Frontend Developer",
  };

  const commands = {
    whoami: <TerminalPreformattedLine stdout={JSON.stringify(me, null, 1)} />,
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
      welcomeMessage={
        <TerminalLine stdout="Hello, if you want to know more about me, type whoami." />
      }
      commands={commands}
      defaultHandler={(command: string) => {
        return `${command} command is blocked.`;
      }}
    />
  );
}
