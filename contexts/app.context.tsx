"use client";

import { disableDevTools } from "@/functions/devtools.function";
import { useEffect, createContext, useState } from "react";
import { getIPwithInfo } from "../apis/apis";
import { IiPInfo } from "../types/types";
import me from "@/constants/me.json";

export const AppContext: any = createContext<any>(null);

// eslint-disable-next-line
export default ({ children }: any) => {
  const [ipInfo, setIpInfo] = useState<IiPInfo>();

  useEffect(() => {
    disableDevTools();
    getIP();
  }, []);

  async function getIP() {
    setIpInfo(await getIPwithInfo());
  }

  return (
    <AppContext.Provider value={{ me, ipInfo }}>{children}</AppContext.Provider>
  );
};
