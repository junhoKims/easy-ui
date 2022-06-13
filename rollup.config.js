import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

export default {
  input: "./src/index.js",
  output: {
    file: "./build/bundle.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    resolve({ 
      extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    }),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    })
  ]
}