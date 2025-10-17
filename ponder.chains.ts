import { getAddress } from "viem";
import {
  base,
  bsc,
  etherlink,
  gnosis,
  kaia,
  polygon,
  worldchain,
} from "viem/chains";

type SupportedChains =
  | "base"
  | "bsc"
  | "kaia"
  | "polygon"
  | "world"
  | "etherlink"
  | "gnosis";
type EnvType = "development" | "staging" | "production";

type PonderChainConfig = {
  id: number;
  rpc: string | undefined;
  startBlock: number;
  contractAddress: string;
};

function getEnv(): EnvType {
  const env = process.env.NODE_ENV;
  if (env === "production") return "production";
  if (env === "staging") return "staging";
  return "development";
}

const env: EnvType = getEnv();

const contractAddresses: Record<SupportedChains, Record<EnvType, string>> = {
  base: {
    development: "0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53",
    staging: "0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53",
    production: "0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53",
  },
  bsc: {
    development: "0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53",
    staging: "0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53",
    production: "0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53",
  },
  kaia: {
    development: "0xac3bB00633f6Ac88aBdCC8eb9601CCe2c56cFe35",
    staging: "0xac3bB00633f6Ac88aBdCC8eb9601CCe2c56cFe35",
    production: "0xac3bB00633f6Ac88aBdCC8eb9601CCe2c56cFe35",
  },
  polygon: {
    development: "0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53",
    staging: "0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53",
    production: "0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53",
  },
  world: {
    development: "0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53",
    staging: "0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53",
    production: "0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53",
  },
  etherlink: {
    development: "0xac3bB00633f6Ac88aBdCC8eb9601CCe2c56cFe35",
    staging: "0xac3bB00633f6Ac88aBdCC8eb9601CCe2c56cFe35",
    production: "0xac3bB00633f6Ac88aBdCC8eb9601CCe2c56cFe35",
  },
  gnosis: {
    development: "0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53",
    staging: "0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53",
    production: "0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53",
  },
};

// ***** Starting October 1st, 2025 ******
export const chain: Record<SupportedChains, PonderChainConfig> = {
  base: {
    id: base.id,
    rpc: process.env.PONDER_RPC_URL_BASE,
    startBlock: 36250476,
    contractAddress: getAddress(contractAddresses.base[env]),
  },
  bsc: {
    id: bsc.id,
    rpc: process.env.PONDER_RPC_URL_BSC,
    startBlock: 63053803,
    contractAddress: getAddress(contractAddresses.bsc[env]),
  },
  kaia: {
    id: kaia.id,
    rpc: process.env.PONDER_RPC_URL_KAIA,
    startBlock: 197040411,
    contractAddress: getAddress(contractAddresses.kaia[env]),
  },
  polygon: {
    id: polygon.id,
    rpc: process.env.PONDER_RPC_URL_POLYGON,
    startBlock: 77487170,
    contractAddress: getAddress(contractAddresses.polygon[env]),
  },
  world: {
    id: worldchain.id,
    rpc: process.env.PONDER_RPC_URL_WORLD,
    startBlock: 20259927,
    contractAddress: getAddress(contractAddresses.world[env]),
  },
  etherlink: {
    id: etherlink.id,
    rpc: process.env.PONDER_RPC_URL_ETHERLINK,
    startBlock: 27533677,
    contractAddress: getAddress(contractAddresses.etherlink[env]),
  },
  gnosis: {
    id: gnosis.id,
    rpc: process.env.PONDER_RPC_URL_GNOSIS,
    startBlock: 42396483,
    contractAddress: getAddress(contractAddresses.gnosis[env]),
  },
};
