import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanPlugin } from "webpack";
import path from "path";
import webpack from "webpack";

module.exports = (env: any, argv: any) => {
    const prod = argv.mode === "production";
    
    return {
        mode: prod ? "production" : "development",
        devtool: prod ? "hidden-source-map" : "eval",
        entry: "./src/index.tsx",
        //> 빌드 출력경로
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "[name].js",
        },
        devServer: {
            port: 3000,
            hot: true,
        },
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        module: {
            rules: [
            {
                test: /\.tsx?$/,
                use: ["babel-loader", "ts-loader"],
            },
            ],
        },
        plugins: [
            new webpack.ProvidePlugin({
                React: "react",
            }),
            new HtmlWebpackPlugin({
                template: './public/index.html',
                minify: process.env.NODE_ENV === 'production' ? {
                    collapseWhitespace: true, // 빈칸 제거
                    removeComments: true, // 주석 제거
                } : false,
            }),
            new CleanPlugin(),
        ],
    }
};
