const path = require("path");


const config = {
  target: "electron-main",
  devtool: "source-map",
  entry: ["@babel/polyfill", "./src/index.ts"],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  node: {
    __dirname: false,
    __filename: false
  }
};

module.exports = () => {
  return config;
};
