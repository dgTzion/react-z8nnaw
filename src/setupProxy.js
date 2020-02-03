const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  function onProxyRes(proxyRes, req, res) {
    proxyRes.headers["Access-Control-Allow-Origin"] = "*"; // add new header to response
  }

  app.use(
    "/api",
    proxy({
      target: "https://swapi.co",
      changeOrigin: true,
      onProxyReq: onProxyRes
    })
  );
};
