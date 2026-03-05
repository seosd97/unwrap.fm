import { cloudflare } from "@cloudflare/vite-plugin";
import { reactRouter } from "@react-router/dev/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";
import relay from "vite-plugin-relay";
import viteTsConfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    vanillaExtractPlugin(),
    relay,
    {
      name: "remove-ssr-external",
      configResolved(config) {
        // Workaround for vanilla-extract + cloudflare compatibility
        // https://github.com/cloudflare/workers-sdk/issues/10287
        config.environments.ssr.resolve.external = [];
      },
    },
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    reactRouter(),
  ],
});

export default config;
