"use client";

import { useContext } from "react";
import { AppContext } from "../contexts/app.context";
import { IuseApp } from "../types/types";

const useApp = () => {
  const useApp: IuseApp = useContext(AppContext);

  return useApp;
};

export default useApp;
