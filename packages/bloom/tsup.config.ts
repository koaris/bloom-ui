import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["esm", "cjs"],
  tsconfig: "./tsconfig.json",
  outExtension({ format }) {
    return { js: format === "esm" ? ".mjs" : ".cjs" };
  },
  dts: true,
  external: ["react"],
  // tsup drops the source directive, so re-add 'use client' for RSC consumers.
  banner: {
    js: "'use client'",
  },

  clean: true,
});
