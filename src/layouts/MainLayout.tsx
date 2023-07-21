import VersionViewer from "@/components/VersionViewer/VersionViewer";
import React, { ReactElement } from "react";

interface IMainLayout {
  children: ReactElement | ReactElement[];
}

export default function MainLayout({ children }: IMainLayout) {
  return (
    <div className="w-full h-full animate__animated animate__fadeIn animate__slower">
      <VersionViewer />
      {children}
    </div>
  );
}
