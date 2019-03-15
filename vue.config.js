// vue.config.js
module.exports = {
    publicPath: "/",
    outputDir: "/dist",
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
            }
        }
    },
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        template: {
            // page 的入口
            entry: 'src/samples/template/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'template.html',
            // 当使用 title 选项时，
            title: 'Template Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'template']
        },
        video: {
            // page 的入口
            entry: 'src/samples/video/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'video.html',
            // 当使用 title 选项时，
            title: 'video Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'video']
        },
        travel: {
            // page 的入口
            entry: 'src/samples/travel/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'travel.html',
            // 当使用 title 选项时，
            title: 'travel Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', 'travel']
        }
    },

    pluginOptions: {
        i18n: {
            locale: 'zh_CN',
            fallbackLocale: 'zh_CN',
            localeDir: 'locales',
            enableInSFC: false
        }
    }
}
