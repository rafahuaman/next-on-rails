import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3099",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    backend_url: "http://localhost:5099",
  },
});
