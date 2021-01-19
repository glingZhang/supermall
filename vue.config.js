module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // '@': 'src' // 这个是默认配置了
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
