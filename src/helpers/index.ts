import type { IGame } from "@/interfaces";

export * from "./AddressUtils";
export * from "./Validations";

export const jsonToMap = (jsonStr: string) => {
  const result = Object.keys(jsonStr).map((key) => {
    return { [key]: jsonStr[key as keyof typeof jsonStr] };
  });
  return result;
};

export const getNetwork = (network: string, enumNetwork: any) => {
  let res;
  switch (network) {
    case "Polygon":
      res = enumNetwork.MATIC_MUMBAI;
      break;
    case "Ethereum":
      res = enumNetwork.ETH_MAINNET;
      break;
    case "Optimism":
      res = enumNetwork.OPT_MAINNET;
      break;
    case "Arbitrum":
      res = enumNetwork.ARB_MAINNET;
      break;
  }
  return res;
};

export function filterStringsBySubstring(
  substring: string,
  games: IGame[]
): IGame[] {
  return games.filter((game) =>
    game.name.toLowerCase().includes(substring.toLowerCase())
  );
}
