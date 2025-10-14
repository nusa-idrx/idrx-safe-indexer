import { createConfig } from "ponder";

import { Safe } from "./abis/Safe";
import { worldchain } from "viem/chains";

export default createConfig({
  database: {
    kind: "postgres" as const,
    connectionString: process.env.DATABASE_URL || "",
  },
  chains: {
    world: {
      id: worldchain.id,
      rpc: process.env.PONDER_RPC_WORLD || "https://worldchain.drpc.org",
    },
  },
  contracts: {
    SafeIDRX: {
      chain: "world",
      abi: Safe,
      address: "0x546bACCf6498eDCA5dE3519960DB2f576fFc2d53",
      startBlock: 20285110,
    },
  },
});
