import { decodeAbiParameters, decodeFunctionData } from "viem";
import { erc20ABI } from "../../abis/erc20ABI";
import { getChainName } from "../helper/chainName";
import { timestampFormatter } from "../helper/timestampFormatter";
import { SafeMultiSigTransaction } from "ponder:schema";
import { getSafeAddress } from "../helper/getSafeAddress";

export const handleMultisigTransaction = async (
  event: any,
  context: any,
  role: "staff" | "admin" | "manager"
) => {
  if (event.args.data == "0x") return;

  const values = decodeAbiParameters(
    [
      { name: "nonce", type: "uint" },
      { name: "sender", type: "address" },
      { name: "threshold", type: "uint" },
    ],
    event.args.additionalInfo
  );

  try {
    const { functionName, args } = decodeFunctionData({
      abi: erc20ABI,
      data: event.args.data,
    });
    if (functionName == "mint") {
      await context.db
        .insert(SafeMultiSigTransaction)
        .values({
          id: `${getChainName(context.chain.id)}-${getSafeAddress(
            context,
            role
          )}-${event.transaction.hash}`,
          safe_address: getSafeAddress(context, role),
          chain: getChainName(context.chain.id),
          to: event.args.to,
          value: event.args.value,
          data: event.args.data,
          mint_to: args[0],
          mint_amount: args[1],
          operationType: event.args.operation.toString(),
          safeTxGas: event.args.safeTxGas,
          baseGas: event.args.baseGas,
          gasPrice: event.args.gasPrice,
          gasToken: event.args.gasToken,
          refundReceiver: event.args.refundReceiver,
          signatures: event.args.signatures,
          additionalInfo: event.args.additionalInfo,
          nonce: values[0],
          sender: values[1],
          threshold: values[2],
          txHash: event.transaction.hash,
          functionName: functionName,
          timestamp: event.block.timestamp,
          datetime: timestampFormatter(Number(event.block.timestamp)),
        })
        .onConflictDoUpdate(() => ({
          safe_address: getSafeAddress(context, role),
          chain: getChainName(context.chain.id),
          to: event.args.to,
          value: event.args.value,
          data: event.args.data,
          mint_to: args[0],
          mint_amount: args[1],
          operationType: event.args.operation.toString(),
          safeTxGas: event.args.safeTxGas,
          baseGas: event.args.baseGas,
          gasPrice: event.args.gasPrice,
          gasToken: event.args.gasToken,
          refundReceiver: event.args.refundReceiver,
          signatures: event.args.signatures,
          additionalInfo: event.args.additionalInfo,
          nonce: values[0],
          sender: values[1],
          threshold: values[2],
          functionName: functionName,
          timestamp: event.block.timestamp,
          datetime: timestampFormatter(Number(event.block.timestamp)),
        }));
    }
  } catch (error) {
    console.log(
      `Skipping event with data: ${event.args.data} - Error: ${error}`
    );
    return;
  }
};
