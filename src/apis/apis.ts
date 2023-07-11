export async function getIP(): Promise<string> {
  return await fetch("https://api.ipify.org?format=json")
    .then((res) => res.json())
    .then((res) => res.ip);
}
