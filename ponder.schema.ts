import { onchainTable } from "ponder";

export const SafeMultiSigTransaction = onchainTable(
  "SafeMultiSigTransaction",
  (t) => ({
    id: t.text().primaryKey(),
    chain: t.text(),
    to: t.text(),
    value: t.bigint(),
    data: t.text(),
    mint_to: t.text(),
    mint_amount: t.bigint(),
    operationType: t.text(),
    safeTxGas: t.bigint(),
    baseGas: t.bigint(),
    gasPrice: t.bigint(),
    gasToken: t.text(),
    refundReceiver: t.text(),
    signatures: t.text(),
    additionalInfo: t.text(),
    nonce: t.bigint(),
    sender: t.text(),
    threshold: t.bigint(),
    txHash: t.text(),
    safeTxHash: t.text(),
    timestamp: t.bigint(),
    datetime: t.text(),
  })
);
