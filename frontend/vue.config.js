// vue.config.js
module.exports = {
  // options...
  devServer: {
    proxy: {
      '^/api/v1': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure:false,
          pathRewrite: {'^/api/v1': '/api/v1'},
          logLevel: 'debug' 
      },
    }
  }
}