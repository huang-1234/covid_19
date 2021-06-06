const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  /*
app.use("自定义url".proxy({  }))
*/
  app.use(
    '/covid/foreign',
    proxy.createProxyMiddleware({
      target: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_foreign',
      secure: true,
      changeOrigin: true,
      pathRewrite: {
        '^/covid/foreign': '',
      },
      cookieDomainRewrite: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_foreign',
    })
  )

  app.use(
    '/covid/china',
    proxy.createProxyMiddleware({
      target: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5',
      secure: true,
      changeOrigin: true,
      pathRewrite: {
        '^/covid/china': '',
      },
      cookieDomainRewrite: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5',
    })
  )

  app.use(
    '/covid/news',
    proxy.createProxyMiddleware({
      target: 'https://lab.isaaclin.cn/nCoV/api/news',
      secure: true,
      changeOrigin: true,
      pathRewrite: {
        '^/covid/news': '',
      },
      cookieDomainRewrite: 'https://lab.isaaclin.cn/nCoV/api/news',
    })
  )
  // app.use(
  //   '/covid_data',
  //   proxy.createProxyMiddleware({
  //     target: 'https://www.maomin.club/fy/get',
  //     secure: true,
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/covid/news': '',
  //     },
  //     cookieDomainRewrite: 'https://www.maomin.club/fy/get',
  //   })
  // )
}
