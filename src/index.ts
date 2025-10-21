import { ponder } from "ponder:registry";
import { handleMultisigTransaction } from "./events/mutisigTransaction";
import { handleExecutionSuccess } from "./events/executionSuccess";

ponder.on(
  "SafeIDRXStaff:SafeMultiSigTransaction",
  async ({ event, context }) => {
    await handleMultisigTransaction(event, context, "staff");
  }
);

ponder.on(
  "SafeIDRXAdmin:SafeMultiSigTransaction",
  async ({ event, context }) => {
    await handleMultisigTransaction(event, context, "admin");
  }
);

ponder.on(
  "SafeIDRXManager:SafeMultiSigTransaction",
  async ({ event, context }) => {
    await handleMultisigTransaction(event, context, "manager");
  }
);
// EXECUTION SUCCESS
ponder.on("SafeIDRXStaff:ExecutionSuccess", async ({ event, context }) => {
  await handleExecutionSuccess(event, context, "staff");
});
ponder.on("SafeIDRXAdmin:ExecutionSuccess", async ({ event, context }) => {
  await handleExecutionSuccess(event, context, "admin");
});
ponder.on("SafeIDRXManager:ExecutionSuccess", async ({ event, context }) => {
  await handleExecutionSuccess(event, context, "manager");
});
