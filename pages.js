module.exports = {
    index: {
        // page 的入口
        entry: 'src/main.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
        // 当使用 title 选项时，
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
        //注入选项。有四个选项值 true, body, head, false.
        inject: true,
        //作用是对 html 文件进行压缩，默认值为false, 
        minify: {
            removeAttributeQuotes: true // 移除属性的引号
        },
        //默认值是 true。表示只有在内容变化时才生成一个新的文件。
        cache: true,
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['template']
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
        inject: true,
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['video']
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
        inject: true,
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['travel']
    }
}