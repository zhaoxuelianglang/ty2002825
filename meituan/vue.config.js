const px2vw = require('postcss-px-to-viewport')


module.exports = {
  devServer: {
    proxy: {
      'expectlist': {
        target: 'http://localhost:3000/',
        changeOrigin: true
      },
      'menulist':{
        target: 'http://localhost:3000/',
        changeOrigin: true
      }
    }
  },





    css: {
      loaderOptions: {
        postcss: {
            plugins:[new px2vw({
                unitToConvert: 'px',
                viewportWidth: 750,
                unitPrecision: 5,
                propList: ['*'],
                viewportUnit: 'vw',
                fontViewportUnit: 'vw',
                selectorBlackList: [],
                minPixelValue: 1,
                mediaQuery: false,
                replace: true,
                exclude: /node_modules/,
                include: undefined,
                landscape: false,
                landscapeUnit: 'vw',
                landscapeWidth: 568 
            })]
          // 这里的选项会传递给 postcss-loader
        }
      }
    }
  }