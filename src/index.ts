import { ponder } from "ponder:registry";
import { SafeMultiSigTransaction } from "ponder:schema";
import { decodeAbiParameters, decodeFunctionData } from "viem";
import { erc20ABI } from "../abis/erc20ABI";
import { getSafeTransactionHash } from "./helper/getSafeTransactionHash";
import { getChainName } from "./helper/chainName";

ponder.on("SafeIDRX:SafeMultiSigTransaction", async ({ event, context }) => {
  const values = decodeAbiParameters(
    [
      { name: "nonce", type: "uint" },
      { name: "sender", type: "address" },
      { name: "threshold", type: "uint" },
    ],
    event.args.additionalInfo
  );

  const { functionName, args } = decodeFunctionData({
    abi: erc20ABI,
    data: event.args.data,
  });

  if (functionName == "mint") {
    console.log("safeTxHash = ", getSafeTransactionHash(event, values[0]));
    await context.db.insert(SafeMultiSigTransaction).values({
      id: event.id,
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
      safeTxHash: getSafeTransactionHash(event, values[0]),
      txHash: event.transaction.hash,
    });
  }
});
