module.exports = {
  title: '生活不止眼前的苟且还有诗和远方',
  description: '不要轻视现在行动的影响力',
  head: [
    // ['link', { rel: 'icon', href: 'https://www.wenboz.com/favicon.ico' }]
  ],
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
