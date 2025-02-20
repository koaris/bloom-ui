import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "src/tailwind-preset.ts"],
  format: ["esm"],
  tsconfig: "./tsconfig.json",
  outExtension({ format }) {
    return { js: ".mjs" };
  },
  dts: true,
  external: ["react"],

  clean: true,
});
