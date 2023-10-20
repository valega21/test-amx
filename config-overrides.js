const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function override(config, env) {

    config.output = {
        ...config.output, // copy all settings
        filename: "static/js/[name].[hash].js",
        chunkFilename: "static/js/[name].[hash].chunk.js",
    };

    // Custom MiniCssExtractPlugin instance to get rid of hash in filename template
    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: 'static/css/[name].[hash].css',
        chunkFilename: 'static/css/[name].[hash].chunk.css',
    });
    // Replace origin MiniCssExtractPlugin instance in config.plugins with the above one
    config.plugins = replacePlugin(config.plugins,
        (name) => /MiniCssExtractPlugin/i.test(name), miniCssExtractPlugin
    );
    
    return config;
};


// Utility function to replace/remove specific plugin in a webpack config
function replacePlugin(plugins, nameMatcher, newPlugin) {
    const i = plugins.findIndex((plugin) => {
        return plugin.constructor && plugin.constructor.name &&
        nameMatcher(plugin.constructor.name);
    });
    return i > -1?
        plugins.slice(0, i).concat(newPlugin || []).concat(plugins.slice(i+1)) :
        plugins;
}
  