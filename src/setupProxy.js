// const proxy = require("http-proxy-middleware");
// module.exports = function(app) {
//   console.log('app', app);
//   app.use(
//     "/api",
//     proxy({
//       target: "https://swapi.co",
//       changeOrigin: true,
//       onProxyReq: (proxyRes, req, res) => {
//         proxyRes.headers = { "Access-Control-Allow-Origin": "*" };
//       }
//     })
//   );
// };
