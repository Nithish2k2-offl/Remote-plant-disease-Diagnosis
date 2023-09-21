// frontend/src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // This path should match the FastAPI route
    createProxyMiddleware({
      target: 'http://localhost:8000', // Address of the FastAPI server
      changeOrigin: true,
    })
  );
};
