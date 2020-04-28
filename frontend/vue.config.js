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
  },
  chainWebpack: config => {
    // markdown Loader
    config.module
      .rule('markdown')
        .test(/\.md$/)
        .use('html-loader')
          .loader('html-loader')
          .end()
        // Add another loader
        .use('markdown-loader')
          .loader('markdown-loader')
          .end()
        .use('handlebars-resolver')
          .loader('./markdown-routes-loader.js')
          .end()
        .use('ejs-loader')
          .loader('ejs-loader')
          // .tap(options => {
          //   console.log("OPTIONS",options);
          //   return {
          //     render: {
          //       test: 'Test'
          //     }
          //   };
          // });
  },
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
        sassOptions: {
          indentedSyntax: false
        }
      }
    }
  }
}