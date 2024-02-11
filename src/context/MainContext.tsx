"use client";

import { getIPAndDetails } from "@/apis/apis";
import { ipDetails } from "@/types/types";
import me from "@/mocks/me.json";
import { useEffect, createContext, useState } from "react";

export const MainContext: any = createContext<any>(null);

// eslint-disable-next-line
export default ({ children }: any) => {
  const [ipDetails, setIpDetails] = useState<ipDetails>();

  useEffect(() => {
    if (!ipDetails) {
      getIPAndDetails().then((res) => {
        setIpDetails(res);
      });
    }
  }, [ipDetails]);

  return (
    <MainContext.Provider value={{ me, ipDetails }}>
      {children}
    </MainContext.Provider>
  );
};
