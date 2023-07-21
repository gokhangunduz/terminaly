"use client";

import { useContext } from "react";
import { MainContext } from "@/context/MainContext";
import { IuseMainContext } from "@/types/types";

const useMainContext = () => {
  const useMainContext: IuseMainContext = useContext(MainContext);

  return useMainContext;
};

export default useMainContext;
