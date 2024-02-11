"use client";

import { disableRightClick } from "@/functions/rightclick.function";
import { disableDevTools } from "@/functions/devtools.function";
import { useEffect, createContext, useState } from "react";
import { getIPwithInfo } from "../apis/apis";
import { IiPInfo } from "../types/types";
import me from "@/constants/me.json";

export const MainContext: any = createContext<any>(null);

// eslint-disable-next-line
export default ({ children }: any) => {
  const [ipInfo, setIpInfo] = useState<IiPInfo>();

  useEffect(() => {
    disableRightClick();
    disableDevTools();
    getIP();
  }, []);

  async function getIP() {
    setIpInfo(await getIPwithInfo());
  }

  return (
    <MainContext.Provider value={{ me, ipInfo }}>
      {children}
    </MainContext.Provider>
  );
};
