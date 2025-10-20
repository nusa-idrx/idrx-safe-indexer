import {
  base,
  bsc,
  etherlink,
  gnosis,
  kaia,
  lisk,
  polygon,
  worldchain,
} from "viem/chains";

const chainNameMap: Record<string, string> = {
  [base.id]: "base",
  [bsc.id]: "bsc",
  [kaia.id]: "kaia",
  [lisk.id]: "lisk",
  [polygon.id]: "polygon",
  [worldchain.id]: "world",
  [etherlink.id]: "etherlink",
  [gnosis.id]: "gnosis",
};

export function getChainName(chainId: number): string {
  return chainNameMap[chainId] || "Unknown Chain";
}
