module.exports = {
    module: {
        rules: [
            {
              enforce: 'pre',
              test: /\.(js|vue)$/,
              loader: 'eslint-loader',
              exclude: /node_modules/
            }
          ]          
    },
        plugins: [
            "pug"
        ]
    
}