import { ipDetails } from "@/types/types";

export async function getIPAndDetails(): Promise<ipDetails | undefined> {
  try {
    const { ip }: { ip: string } = await fetch(
      "https://api.ipify.org?format=json"
    ).then((res) => res.json());

    return fetch(`https://ipinfo.io/${ip}?token=${process.env.IP_TOKEN}`).then(
      (res) => res.json()
    );
  } catch (error: any) {
    return undefined;
  }
}
