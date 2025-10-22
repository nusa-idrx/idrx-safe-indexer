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

const safeAddress = {
  staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
  admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
  manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
  staff_kaia: "0x9D2a9d956cA6cCCdd946ebf8bbfc9009C3B444cE",
  manager_kaia: "0x649a2DA7B28E0D54c13D5eFf95d3A660652742cC",
};

const contractAddresses: any = {
  base: {
    development: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
    staging: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
    production: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
  },
  bsc: {
    development: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
    staging: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
    production: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
  },
  kaia: {
    development: {
      staff: "0x9D2a9d956cA6cCCdd946ebf8bbfc9009C3B444cE",
      manager: "0x649a2DA7B28E0D54c13D5eFf95d3A660652742cC",
    },
    staging: {
      staff: "0x9D2a9d956cA6cCCdd946ebf8bbfc9009C3B444cE",
      manager: "0x649a2DA7B28E0D54c13D5eFf95d3A660652742cC",
    },
    production: {
      staff: "0x9D2a9d956cA6cCCdd946ebf8bbfc9009C3B444cE",
      manager: "0x649a2DA7B28E0D54c13D5eFf95d3A660652742cC",
    },
  },
  polygon: {
    development: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
    staging: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
    production: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
  },
  world: {
    development: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
    staging: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
    production: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
  },
  etherlink: {
    development: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
    staging: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
    production: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
  },
  gnosis: {
    development: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
    staging: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
    production: {
      staff: "0x942ca56d502c08E5F2d5dE7097d4fa667FBC6c5f",
      admin: "0xf80fdF246928B7862B23e094b3a14C4E36eE117E",
      manager: "0x3274da26046eED0D315a81050507FF07D3993eb4",
    },
  },
};

// ***** Starting October 1st, 2025 ******
export const chain: any = {
  base: {
    id: base.id,
    rpc: process.env.PONDER_RPC_URL_BASE,
    startBlock: 36250476,
    contractAddress: {
      staff: getAddress(contractAddresses.base[env].staff),
      admin: getAddress(contractAddresses.base[env].admin),
      manager: getAddress(contractAddresses.base[env].manager),
    },
  },
  bsc: {
    id: bsc.id,
    rpc: process.env.PONDER_RPC_URL_BSC,
    startBlock: 63053803,
    contractAddress: {
      staff: getAddress(contractAddresses.bsc[env].staff),
      admin: getAddress(contractAddresses.bsc[env].admin),
      manager: getAddress(contractAddresses.bsc[env].manager),
    },
  },
  kaia: {
    id: kaia.id,
    rpc: process.env.PONDER_RPC_URL_KAIA,
    startBlock: 197040411,
    contractAddress: {
      staff: getAddress(contractAddresses.kaia[env].staff),
      manager: getAddress(contractAddresses.kaia[env].manager),
    },
  },
  polygon: {
    id: polygon.id,
    rpc: process.env.PONDER_RPC_URL_POLYGON,
    startBlock: 77487170,
    contractAddress: {
      staff: getAddress(contractAddresses.polygon[env].staff),
      admin: getAddress(contractAddresses.polygon[env].admin),
      manager: getAddress(contractAddresses.polygon[env].manager),
    },
  },
  world: {
    id: worldchain.id,
    rpc: process.env.PONDER_RPC_URL_WORLD,
    startBlock: 20290685,
    contractAddress: {
      staff: getAddress(contractAddresses.world[env].staff),
      admin: getAddress(contractAddresses.world[env].admin),
      manager: getAddress(contractAddresses.world[env].manager),
    },
  },
  etherlink: {
    id: etherlink.id,
    rpc: process.env.PONDER_RPC_URL_ETHERLINK,
    startBlock: 27533677,
    contractAddress: {
      staff: getAddress(contractAddresses.etherlink[env].staff),
      admin: getAddress(contractAddresses.etherlink[env].admin),
      manager: getAddress(contractAddresses.etherlink[env].manager),
    },
  },
  gnosis: {
    id: gnosis.id,
    rpc: process.env.PONDER_RPC_URL_GNOSIS,
    startBlock: 42396483,
    contractAddress: {
      staff: getAddress(contractAddresses.gnosis[env].staff),
      admin: getAddress(contractAddresses.gnosis[env].admin),
      manager: getAddress(contractAddresses.gnosis[env].manager),
    },
  },
};
