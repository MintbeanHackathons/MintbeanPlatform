module.exports = {
    module: {
        settings: {
            "extends": "./node_modules/coding-standard/.pug-lintrc",
            "disallowIdLiterals": null
        },
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