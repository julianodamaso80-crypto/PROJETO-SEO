import { configure } from "@trigger.dev/sdk";

// Configure Trigger.dev v3
configure({
  secretKey: process.env.TRIGGER_API_KEY,
});
