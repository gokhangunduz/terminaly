"use client";

import { getIPwithInfo } from "../apis/apis";
import { IiPInfo } from "../types/types";
import me from "@/constants/me.json";
import { useEffect, createContext, useState } from "react";

export const MainContext: any = createContext<any>(null);

// eslint-disable-next-line
export default ({ children }: any) => {
  const [ipInfo, setIpInfo] = useState<IiPInfo>();

  useEffect(() => {
    if (!ipInfo) {
      getIP();
    }
  }, [ipInfo]);

  async function getIP() {
    setIpInfo(await getIPwithInfo());
  }

  return (
    <MainContext.Provider value={{ me, ipInfo }}>
      {children}
    </MainContext.Provider>
  );
};
