const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    console.log(app)
    app.use(
        //可以配置多个proxy
        "/api",
        createProxyMiddleware({
            target:"https://floral-limit-25e3.139199228.workers.dev/api",
            changeOrigin:true,
            pathRewrite:{
                '^/api':""
            }
        })
    )
}