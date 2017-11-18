const path=require('path');
const htmlWP=require("html-webpack-plugin");
const htmlCleanWP=require('clean-webpack-plugin');

module.exports={
    // 配置入口文件
    entry:path.resolve(__dirname,"./src/js/main.js"),
    // 配置输出文件
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:"bundle_[chunkhash:8].js"
    },
    // 配置插件文件
    plugins:[
        new htmlWP({
            template:"./src/index.html",
            filename:'index.html',
            inject:'body'
        }),
        

    ],
    // 配置规则文件
    module:{
        rules:[
            // 打包css文件
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            // 打包less文件
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            // 打包HTML文件
            {
                test:/\.html|tpl$/,
                use:['html-loader']
            },
            // 打包URl文件
            {
                test:/\.(png|jpeg|jpg|svg|gif|mp3|ttf)$/,
                use:[{loader:'url-loader', options: {limit: 8192}}]
            },
            // 打包babel文件
            {
                test:/\.js$/,
                exclude:path.resolve(__dirname,'../node_modules'),
                use:{loader:'babel-loader'}
            },
            // 打包vue文件
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
        ]
    }
}