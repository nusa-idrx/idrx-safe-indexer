import { getChainName } from "../helper/chainName";
import { SafeMultiSigTransaction } from "ponder:schema";
import { getSafeAddress } from "../helper/getSafeAddress";

export const handleExecutionSuccess = async (
  event: any,
  context: any,
  role: "staff" | "admin" | "manager"
) => {
  await context.db
    .insert(SafeMultiSigTransaction)
    .values({
      id: `${getChainName(context.chain.id)}-${getSafeAddress(context, role)}-${
        event.transaction.hash
      }`,
      safeTxHash: event.args.txHash,
    })
    .onConflictDoUpdate(() => ({
      safeTxHash: event.args.txHash,
    }));
};
