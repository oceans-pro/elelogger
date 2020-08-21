/**
 * 切换代码高亮
 */
export default function changeCodeTheme() {
  if (!window.markdownVue) { // 说明Markdown中没有显式使用Vue
    $('body').append($('<div id="markdown-vue" title="只作为主题切换"></div>>'))
    window.useVue()
  }
  if ($('.hljs').size() === 0) {
    window.markdownVue.$notify({
      title: '提示',
      message: '当前页面没有代码块！无法切换代码着色方案。',
      type: 'warning'
    })
    return
  }
  const theme = window.markdownVue.codeTheme
  const nameList = ['vscode', 'atom', 'solarized', 'vscode']
  const srcList = ['https://blog-static.cnblogs.com/files/oceans/vscode.css',
    'https://blog-static.cnblogs.com/files/oceans/atom.css',
    'https://blog-static.cnblogs.com/files/oceans/solarized.css',
    'https://blog-static.cnblogs.com/files/oceans/vscode.css']
  const index = nameList.indexOf(theme)
  window.markdownVue.codeTheme = nameList[index + 1]
  $('link[title=code-theme]').remove()
  $('head').append(`<link title='code-theme' type='text/css' rel='stylesheet' href=${srcList[index + 1]}>`)
  console.log('debug: ' + window.markdownVue.codeTheme)
  window.markdownVue.$notify({
    title: '提示',
    message: `当前代码高亮主题为 <b>${window.markdownVue.codeTheme}</b>`,
    dangerouslyUseHTMLString: true,
    duration: 1000,
    type: 'success'
  })
}
