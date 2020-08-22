/**
 * 切换代码高亮
 * @param{boolean} isInit
 */
export default function initOrToggleCodeColor(isInit) {
  if (isInit) {
    window.g = window.g || {}
    window.g.color = 'vscode'
    return
  }
  if (!ele) {
    throw new Error('ele未初始化！')
  }
  if ($('.hljs').size() === 0) {
    ele.$notify({
      title: '提示',
      message: '当前页面没有代码块！无法切换代码着色方案。',
      type: 'warning'
    })
    return
  }
  const theme = window.g.color
  const nameList = ['vscode', 'atom', 'solarized', 'vscode']
  const srcList = ['https://blog-static.cnblogs.com/files/oceans/vscode.css',
    'https://blog-static.cnblogs.com/files/oceans/atom.css',
    'https://blog-static.cnblogs.com/files/oceans/solarized.css',
    'https://blog-static.cnblogs.com/files/oceans/vscode.css']
  const index = nameList.indexOf(theme)
  window.g.color = nameList[index + 1]
  $('link[title=code-theme]').remove()
  $('head').append(`<link title='code-theme' type='text/css' rel='stylesheet' href=${srcList[index + 1]}>`)
  ele.$notify({
    title: '提示',
    message: `当前代码高亮主题为 <b>${window.g.color}</b>`,
    dangerouslyUseHTMLString: true,
    duration: 1000,
    type: 'success'
  })
}
