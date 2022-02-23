const path = require('path')
module.exports ={
    mode: "development",
    entry:{
        myfile :'./src/engine.js'// File đầu vào
    },
    output:{
        path: path.resolve(__dirname,'build'),
        filename:'js/main.[hash].js', // Nơi chưa file đầu ra 
        publicPath: '/assets/'
    },
    devServer:{
        port:12134,
        contentBase:path.join(__dirname,'dist'),
        writeToDisk:true
    }
}