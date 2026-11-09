"use client";

import { AppContext } from "../contexts/app.context";
import { IuseApp } from "@/types/types";
import { useContext } from "react";

const useApp = (): IuseApp => {
  const app = useContext(AppContext);

  if (!app) {
    throw new Error("useApp must be used within AppProvider");
  }

  return app;
};

export default useApp;
