module.exports = {
  title: 'LZNote',
  description: 'LZNote',
  themeConfig: {
    nav: [
      {
        text: '工具软件',
        items: [
          { text: 'VSCode', link: '/vscode/' },
          { text: 'Git', link: '/git/' }
        ]
      },
      {
        text: '框架类库',
        items: [
          { text: 'Vue', link: '/vue/' },
          { text: 'Vitepress', link: '/vitepress/' }
        ]
      }
    ],
    sidebar: {
      '/git/': [
        { text: 'Git1', link: '/git/git1' },
        { text: 'Git2', link: '/git/git2' }
      ]
      // '/vue/': [{ text: 'Vue', link: '/vue/' }]
    }
  }
}
