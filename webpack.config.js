const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    publicPath: "xuni",
    filename: "bundle.js",
  },
  devServer: {
    port: 8080,
    contentBase: "www",
    open: true,
  },
};
