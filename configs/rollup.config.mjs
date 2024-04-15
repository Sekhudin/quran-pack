// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.mjs",
        format: "es",
        sourcemap: false,
        exports: "named",
      },
      // {
      //   file: "dist/dist.umd.js",
      //   name: "quran",
      //   format: "umd",
      //   sourcemap: false,
      //   exports: "named",
      // },
    ],
    plugins: [
      typescript({
        tsconfig: "./configs/tsconfig.esm.json",
        sourceMap: false,
      }),
      json()
    ],
  },
];