import { createConfig } from "ponder";
import { getAddress } from "viem";
import { chain } from "./ponder.chains";
import { SafeABI } from "./abis/SafeABI";

export function getMainChainConfig() {
  const config = {
    database: {
      kind: "postgres" as const,
      connectionString: process.env.DATABASE_URL || "",
    },
    chains: {
      // polygon: {
      //   id: 137,
      //   rpc: chain["polygon"].rpc,
      // },
      // bsc: {
      //   id: 56,
      //   rpc: chain["bsc"].rpc,
      // },
      // kaia: {
      //   id: 8217,
      //   rpc: chain["kaia"].rpc,
      // },
      // base: {
      //   id: 8453,
      //   rpc: chain["base"].rpc,
      // },
      world: {
        id: 480,
        rpc: chain["world"].rpc,
      },
      // etherlink: {
      //   id: 42793,
      //   rpc: chain["etherlink"].rpc,
      // },
      // gnosis: {
      //   id: 100,
      //   rpc: chain["gnosis"].rpc,
      // },
    },
    contracts: {
      SafeIDRX: {
        abi: SafeABI,
        address: [getAddress("0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53")],
        chain: {
          // polygon: {
          //   address: getAddress("0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53"),
          //   startBlock: chain["polygon"].startBlock,
          // },
          // bsc: {
          //   address: getAddress("0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53"),
          //   startBlock: chain["bsc"].startBlock,
          // },
          // kaia: {
          //   address: getAddress("0xac3bB00633f6Ac88aBdCC8eb9601CCe2c56cFe35"),
          //   startBlock: chain["kaia"].startBlock,
          // },
          // base: {
          //   address: getAddress("0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53"),
          //   startBlock: chain["base"].startBlock,
          // },
          world: {
            address: getAddress("0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53"),
            startBlock: chain["world"].startBlock,
          },
          // etherlink: {
          //   address: getAddress("0xac3bB00633f6Ac88aBdCC8eb9601CCe2c56cFe35"),
          //   startBlock: chain["etherlink"].startBlock,
          // },
          // gnosis: {
          //   address: getAddress("0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53"),
          //   startBlock: chain["gnosis"].startBlock,
          // },
        },
      },
    },
    ordering: "multichain" as const,
  };

  return config;
}

export default createConfig(getMainChainConfig());
