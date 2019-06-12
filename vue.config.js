module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        // pathRewrite可以做替换
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
