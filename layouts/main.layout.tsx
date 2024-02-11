"use client";

import { ReactElement } from "react";

interface IMainLayout {
  children: ReactElement | ReactElement[];
}

export default function MainLayout({ children }: IMainLayout) {
  return (
    <div className="w-screen h-screen animate__animated animate__fadeIn animate__slower">
      {children}
    </div>
  );
}
