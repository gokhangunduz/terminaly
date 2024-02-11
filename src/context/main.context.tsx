"use client";

import { getIPAndDetails } from "@/apis/apis";
import { IipDetails } from "@/types/types";
import me from "@/constants/me.json";
import { useEffect, createContext, useState } from "react";

export const MainContext: any = createContext<any>(null);

// eslint-disable-next-line
export default ({ children }: any) => {
  const [ipDetails, setIpDetails] = useState<IipDetails>();

  useEffect(() => {
    if (!ipDetails) {
      getIP();
    }
  }, [ipDetails]);

  async function getIP() {
    setIpDetails(await getIPAndDetails());
  }

  return (
    <MainContext.Provider value={{ me, ipDetails }}>
      {children}
    </MainContext.Provider>
  );
};
