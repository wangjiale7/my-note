module.exports = {
  title: '生活不止眼前的苟且还有诗和远方',
  description: '不要轻视现在行动的影响力',
  head: [['link', { rel: 'icon', href: 'https://ts1.cn.mm.bing.net/th/id/R-C.727eb5aa3ba3f2d01121f0f6578a3886?rik=dOZ3TuDC5EcQGw&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fd%2f8%2fo%2fY%2fD%2fl%2ffavicon-hi.png&ehk=boLZkj9S%2fO7glqWZdxahz7s3XSvFUlt37SQTBYc1PiE%3d&risl=&pid=ImgRaw&r=0' }]],
  base: '/',
  themeConfig: {
    nav: [{ text: 'Github', link: 'https://github.com/wangjiale7' }],
    docsRepo: 'boboidream/note',
    docsDir: '/',
    lastUpdated: 'Last Updated',
  },
  plugins: ['permalink-pinyin', ['autobar', { pinyinNav: true }], 'rpurl'],
  chainWebpack: (config, isServer) => {
    const inlineLimit = 10000
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: inlineLimit,
        name: `/img/[name].[hash:8].[ext]`,
      })
  },
}
