const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {
    config = rewireCssModules(config, env);

    // config.entry = {
    //     index: [
    //         require.resolve('react-dev-utils/webpackHotDevClient'),
    //         require.resolve('./polyfills'),
    //         require.resolve('react-error-overlay'),
    //         paths.appIndexJs,
    //     ]
    // }

    // config.output = {
    //     path: paths.appBuild,
    //     pathinfo: true,
    //     filename: 'static/js/[name].bundle.js',
    //     chunkFilename: 'static/js/[name].chunk.js',
    //     publicPath: publicPath,
    //     devtoolModuleFilenameTemplate: info =>
    //         path.resolve(info.absoluteResourcePath),
    // }

    

    console.log(config.entry)

    return config;
}