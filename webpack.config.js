const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js",
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack demo",
        }),
    ],
    devServer: {
        // Display only errors to reduce the amount of output.
        stats: "errors-only",

        // Parse host and port from env to allow customization.
        //
        // If you use Docker, Vagrant or Cloud9, set
        // host: "0.0.0.0";
        //
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        host: process.env.HOST, // Defaults to `localhost`
        port: process.env.PORT, // Defaults to 8080
        open: false, // Open the page in browser
        overlay: true,
        watchOptions: {
            // Delay the rebuild after the first change
            aggregateTimeout: 300,

            // Poll using interval (in ms, accepts boolean too)
            poll: 1000,
        },
    },
}