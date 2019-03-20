const path = require('path');
function resolve(dir) {
    return path.join(__dirname, './', dir)
}

const pages = require('./pages.js');

// vue.config.js
module.exports = {
    publicPath: "./",
    outputDir: "./dist",
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                '@style': resolve('src/assets/style'),
            }
        },
    },
    pages: pages,
    pluginOptions: {
        i18n: {
            locale: 'zh_CN',
            fallbackLocale: 'zh_CN',
            localeDir: 'locales',
            enableInSFC: false
        }
    }
}
