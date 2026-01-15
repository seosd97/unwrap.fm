import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    vanillaExtractPlugin(),
    {
      name: "remove-ssr-external",
      configResolved(config) {
        // Workaround for vanilla-extract + cloudflare compatibility
        // https://github.com/cloudflare/workers-sdk/issues/10287
        config.environments.ssr.resolve.external = [];
      },
    },
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tanstackStart(),
    viteReact(),
  ],
});

export default config;
