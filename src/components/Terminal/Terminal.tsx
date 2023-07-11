"use client";

import React, { ReactElement } from "react";
import { ReactTerminal } from "react-terminal";
import TerminalLine from "../TerminalLine/TerminalLine";
import TerminalPreformattedLine from "../TerminalPreformattedLine/TerminalPreformattedLine";
import { me } from "@/types/types";
import { getIP } from "@/apis/apis";

export default function Terminal(): ReactElement {
  const me: me = {
    firstName: "Gökhan",
    lastName: "Gündüz",
    title: "Frontend Developer",
    email: "mail@gokhangunduz.com.tr",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Phyton",
      "React",
      "Next.js",
      "Express.js",
      "WordPress",
      "MySQL",
      "Selenium",
      "Docker",
      "Linux",
    ],
    socials: {
      github: "github.com/gokhangunduz",
      linkedin: "linkedin.com/in/iamgokhangunduz",
      email: "mail@gokhangunduz.com.tr",
    },
  };

  const commands = {
    whoami: <TerminalPreformattedLine stdout={JSON.stringify(me, null, 1)} />,
    whatsmyip: <TerminalLine stdout={getIP() || ""} />,
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
      welcomeMessage={
        <TerminalLine stdout="Hello, if you want to know more about me, type whoami. If you want to see all commands, type help." />
      }
      commands={commands}
      defaultHandler={(command: string) => {
        return `${command} command is blocked.`;
      }}
    />
  );
}
