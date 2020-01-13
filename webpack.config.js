const HtmlWebPackPlugin = require("html-webpack-plugin");
module.export={
    module: {
        rules:[
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
              }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./build/index.html",
          filename: "./index.html"
        })
      ]

}