"use client";

import { useContext } from "react";
import { MainContext } from "../contexts/main.context";
import { IuseApp } from "../types/types";

const useApp = () => {
  const useApp: IuseApp = useContext(MainContext);

  return useApp;
};

export default useApp;