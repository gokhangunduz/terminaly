"use client";

import { AppContext } from "../contexts/app.context";
import { IuseApp } from "@/types/types";
import { useContext } from "react";

const useApp = () => {
  const useApp: IuseApp = useContext(AppContext);

  return useApp;
};

export default useApp;
