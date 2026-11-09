import { ipToken } from "../providers/env.provider";
import { IiPInfo } from "../types/types";
import axios from "axios";

export async function getIPwithInfo(): Promise<IiPInfo> {
  const publicIP = await getIP();
  return getIpInfo(publicIP);
}

export async function getIP(): Promise<string> {
  const { data } = await axios.get<string>("https://ipinfo.io/ip", {
    params: { token: ipToken },
  });
  return data;
}

export async function getIpInfo(publicIP: string): Promise<IiPInfo> {
  const { data } = await axios.get<IiPInfo>(`https://ipinfo.io/${publicIP}`, {
    params: { token: ipToken },
  });
  return data;
}
