const webpack = require("webpack");

module.exports = {
  chainWebpack: config => {
    config.plugin("provide").use(webpack.ProvidePlugin, [
      {
        Vue: ["vue/dist/vue.runtime.esm.js", "default"]
      }
    ]);
  }
};
