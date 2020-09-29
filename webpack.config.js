let path = require("path")

module.exports = {
	entry: {
		index: "./src/index.ts"
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: "ts-loader"
			}
		]
	},
	output: {
		path: path.resolve(__dirname, "static")
	},
	resolve: {
		extensions: [".js", ".ts"]
	}
}
