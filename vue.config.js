const path = require('path');
function resolve(dir) {
    return path.join(__dirname, './', dir);
}

const pages = require('./pages.js');

// vue.config.js
module.exports = a = {
    publicPath: "/",
    outputDir: "./dist",
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                '@style': resolve('src/assets/style'),
            }
        }
    },

    // configureWebpack: (config) => {
    //     switch (process.env.NODE_ENV) {
    //         case "production":
    //             // 为生产环境修改配置...
    //             config.mode = 'production'
    //             break;

    //         default:
    //             // 为开发环境修改配置...
    //             config.mode = 'development'
    //             break;
    //     }

    //     Object.assign(config, {
    //         resolve: {
    //             alias: {
    //                 '@': resolve('src'),
    //                 '@style': resolve('src/assets/style'),
    //             }
    //         }
    //     });
    // },
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