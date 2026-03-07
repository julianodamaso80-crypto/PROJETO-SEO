import { configure } from "@trigger.dev/sdk";

export function initTrigger() {
  configure({
    secretKey: process.env.TRIGGER_API_KEY,
  });
}
