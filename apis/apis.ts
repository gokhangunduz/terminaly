"use client";

import { ipToken } from "../providers/env.provider";
import { IiPInfo } from "../types/types";
import axios from "axios";

export async function getIPwithInfo(): Promise<IiPInfo | undefined> {
  return new Promise(async (resolve, reject) => {
    try {
      const publicIP = await getIP();
      const ipDetails = await getIpInfo(publicIP!);

      resolve(ipDetails);
    } catch (error) {
      reject(error);
    }
  });
}

export async function getIP(): Promise<string | undefined> {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        data: publicIP,
      }: {
        data: string | undefined;
      } = await axios.get(`https://ipinfo.io/ip?token=${ipToken}`);
      resolve(publicIP);
    } catch (error) {
      reject(error);
    }
  });
}

export async function getIpInfo(
  publicIP: string
): Promise<IiPInfo | undefined> {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        data: ipInfo,
      }: {
        data: IiPInfo | undefined;
      } = await axios.get(`https://ipinfo.io/${publicIP}?token=${ipToken}`);
      resolve(ipInfo);
    } catch (error) {
      reject(error);
    }
  });
}
