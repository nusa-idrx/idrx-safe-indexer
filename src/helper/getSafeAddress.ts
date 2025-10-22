import { chain } from "../../ponder.chains";
import { getChainName } from "./chainName";

export const getSafeAddress = (
  context: any,
  role: "staff" | "admin" | "manager"
) => {
  const chainName =
    context.chain.id === chain["kaia"].id
      ? "kaia"
      : getChainName(context.chain.id);

  if (role === "staff") {
    return chain[chainName].contractAddress.staff;
  } else if (role === "admin") {
    return chain[chainName].contractAddress.admin;
  } else if (role === "manager") {
    return chain[chainName].contractAddress.manager;
  }
};
