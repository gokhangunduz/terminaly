"use client";

import { disableDevTools } from "@/functions/devtools.function";
import { useEffect, createContext, useState, ReactNode } from "react";
import { getIPwithInfo } from "../apis/apis";
import { IiPInfo, IuseApp } from "../types/types";
import me from "@/constants/me.json";

export const AppContext = createContext<IuseApp | null>(null);

interface IAppProvider {
  children: ReactNode;
}

export default function AppProvider({ children }: IAppProvider) {
  const [ipInfo, setIpInfo] = useState<IiPInfo>();

  useEffect(() => disableDevTools(), []);

  useEffect(() => {
    let isActive = true;

    getIPwithInfo()
      .then((info) => isActive && setIpInfo(info))
      .catch(() => {
        // ip info is optional, the terminal handles the missing value
      });

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <AppContext.Provider value={{ me, ipInfo }}>{children}</AppContext.Provider>
  );
}
