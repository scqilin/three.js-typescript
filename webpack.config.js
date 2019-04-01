const path = require('path')
const HtmlWebpalckPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/index.ts',
    output:{
        path:path.resolve(__dirname,'public'),
        filename:'bundle.js'
    },
    devtool:'inlin-source-map',
    devServer:{
        contentBase:'./public',
        open:true,
        port:9001
    },
    plugins:[
        new HtmlWebpalckPlugin({
            template:'./src/index.html'            
        })
    ],    
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            },{
                test:/\.css$/,
                use:[{
                    loader:"style-loader"
                },{
                    loader:"css-loader"
                }] 
            }
        ]
    },
    resolve:{
        extensions:['.tsx','.ts','.js']
    }, 

}