import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "42a7ekko",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});