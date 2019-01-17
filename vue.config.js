module.exports = {
    devServer: {
        port: 8080,
        disableHostCheck: true,
    },
    // 'eslint-loader':false,
    // 是否在保存的时候检查
    lintOnSave: true,
    // 基本路径
    publicPath: './',
    // 输出文件目录
    outputDir: 'docs',
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false
};

