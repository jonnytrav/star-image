const withStyles = require("@webdeb/next-styles");
const withImages = require("next-images");

module.exports = withStyles({
  less: true, // use .less files
  sass: true, // use .scss files
  modules: true, // style.(m|module).css & style.(m|module).scss for module files
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  sassLoaderOptions: {
    sassOptions: {
      includePaths: ["src/styles"] // @import 'variables'; # loads (src/styles/variables.scss), you got it..
    }
  },
  // postcssLoaderOptions: {...},
  miniCssExtractOptions: {
    ignoreOrder: true
  } // ignoreOrder:true for https://github.com/webpack-contrib/mini-css-extract-plugin/issues/250#issuecomment-544898772
});

module.exports = withImages();
