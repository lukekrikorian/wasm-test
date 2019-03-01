var path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: __dirname + "/dist"
	},
	module: {
    rules: [
      {
        test: /\.rs$/,
        use: [{ loader: "wasm-loader" }, { loader: "rust-native-wasm-loader" }]
      }
    ]
	},
};