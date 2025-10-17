import { encodePacked, keccak256, encodeAbiParameters } from "viem";

export const getSafeTransactionHash = (event: any, nonce: bigint) => {
  const SAFE_TX_TYPEHASH =
    "0xbb8310d486368db6bd6f849402fdd73ad53d316b5a4b2644ad6efe0f941286d8";
  const DOMAIN_SEPARATOR =
    "0x8929e5946fea0383933dfb05b4d8ab304776765d349f67441da8320d82c3779a";

  const safeTxHash = keccak256(
    encodeAbiParameters(
      [
        { name: "SAFE_TX_TYPE_HASH", type: "bytes32" },
        { name: "to", type: "address" },
        { name: "value", type: "uint256" },
        { name: "data", type: "bytes32" }, // keccak256(data) in Solidity
        { name: "operation", type: "uint8" },
        { name: "safeTxGas", type: "uint256" },
        { name: "baseGas", type: "uint256" },
        { name: "gasPrice", type: "uint256" },
        { name: "gasToken", type: "address" },
        { name: "refundReceiver", type: "address" },
        { name: "nonce", type: "uint256" },
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
  console.log("nonce = ", nonce);
  console.log("safeTxHash = ", safeTxHash);
  const packedResult = encodePacked(
    ["uint8", "uint8", "bytes32", "bytes32"],
    [0x19, 0x01, DOMAIN_SEPARATOR, safeTxHash]
  );
  const finalHash = keccak256(packedResult);

  return finalHash;
};
