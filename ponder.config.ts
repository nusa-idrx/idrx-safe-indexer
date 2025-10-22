import { createConfig } from "ponder";
import { getAddress } from "viem";
import { chain } from "./ponder.chains";
import { SafeABI } from "./abis/SafeABI";

export function getMainChainConfig() {
  console.log("admin", chain["world"].contractAddress.admin);
  console.log("startblock", chain["world"].startBlock);
  
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
      SafeIDRXStaff: {
        abi: SafeABI,
        address: [getAddress("0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f")],
        chain: {
          // polygon: {
          //   address: getAddress("0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f"),
          //   startBlock: chain["polygon"].startBlock,
          // },
          // bsc: {
          //   address: getAddress("0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f"),
          //   startBlock: chain["bsc"].startBlock,
          // },
          // kaia: {
          //   address: getAddress("0xac3bB00633f6Ac88aBdCC8eb9601CCe2c56cFe35"),
          //   startBlock: chain["kaia"].startBlock,
          // },
          // base: {
          //   address: getAddress("0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f"),
          //   startBlock: chain["base"].startBlock,
          // },
          world: {
            address: getAddress("0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f"),
            startBlock: chain["world"].startBlock,
          },
          // etherlink: {
          //   address: getAddress("0xac3bB00633f6Ac88aBdCC8eb9601CCe2c56cFe35"),
          //   startBlock: chain["etherlink"].startBlock,
          // },
          // gnosis: {
          //   address: getAddress("0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f"),
          //   startBlock: chain["gnosis"].startBlock,
          // },
        },
      },
      SafeIDRXAdmin: {
        abi: SafeABI,
        address: [getAddress("0xf80fdF246928B7862B23e094b3a14C4E36eE117E")],
        chain: {
          world: {
            address: getAddress("0xf80fdF246928B7862B23e094b3a14C4E36eE117E"),
            startBlock: chain["world"].startBlock,
          },
        },
      },
      SafeIDRXManager: {
        abi: SafeABI,
        address: [getAddress("0x3274da26046eED0D315a81050507FF07D3993eb4")],
        chain: {
          world: {
            address: getAddress("0x3274da26046eED0D315a81050507FF07D3993eb4"),
            startBlock: chain["world"].startBlock,
          },
        },
      },
    },
    ordering: "multichain" as const,
  };

  return config;
}

export default createConfig(getMainChainConfig());
