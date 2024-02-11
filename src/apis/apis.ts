"use client";

import { ipToken } from "@/providers/env.provider";
import { IipDetails } from "@/types/types";
import axios from "axios";

export async function getIPAndDetails(): Promise<IipDetails | undefined> {
  return new Promise(async (resolve, reject) => {
    try {
      const publicIP = await getIP();
      const ipDetails = await getIPDetails(publicIP!);

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
        data: { ip: publicIP },
      }: {
        data: { ip: string | undefined };
      } = await axios.get("https://api.ipify.org?format=json");
      resolve(publicIP);
    } catch (error) {
      reject(error);
    }
  });
}

export async function getIPDetails(
  publicIP: string
): Promise<IipDetails | undefined> {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        data: ipDetails,
      }: {
        data: IipDetails | undefined;
      } = await axios.get(`https://ipinfo.io/${publicIP}?token=${ipToken}`);
      resolve(ipDetails);
    } catch (error) {
      reject(error);
    }
  });
}
