import { concatHex, encodePacked, keccak256, toHex } from "viem";

export const getSafeTransactionHash = (event: any, nonce: bigint) => {
  const SAFE_TX_TYPEHASH =
    "0xbb8310d486368db6bd6f849402fdd73ad53d316b5a4b2644ad6efe0f941286d8";
  const DOMAIN_SEPARATOR =
    "0x8929e5946fea0383933dfb05b4d8ab304776765d349f67441da8320d82c3779a";

  const safeTxHash = keccak256(
    encodePacked(
      [
        "bytes32",
        "address",
        "uint256",
        "bytes",
        "uint8",
        "uint256",
        "uint256",
        "uint256",
        "address",
        "address",
        "uint256",
      ],
      [
        SAFE_TX_TYPEHASH,
        event.args.to,
        event.args.value,
        keccak256(event.args.data),
        event.args.operation,
        event.args.safeTxGas,
        event.args.baseGas,
        event.args.gasPrice,
        event.args.gasToken,
        event.args.refundReceiver,
        nonce,
      ]
    )
  );
  const resultEncode = concatHex([
    toHex(0x19, { size: 1 }),
    toHex(0x01, { size: 1 }),
    DOMAIN_SEPARATOR,
    safeTxHash,
  ]);
  return keccak256(resultEncode);
};
