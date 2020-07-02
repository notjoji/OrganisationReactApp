const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api/employees', createProxyMiddleware({
            target: process.env['PROXY'],
            changeOrigin: true,
            logLevel: "debug"
        })
    );

    app.use(
        '/api/organisations', createProxyMiddleware({
            target: process.env['PROXY'],
            changeOrigin: true,
            logLevel: "debug"
        })
    );
};