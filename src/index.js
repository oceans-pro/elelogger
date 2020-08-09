$('html').show()
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 导入
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
require('./js/jquery-function-extend')
require('./js/global-variables')
require('./js/global-function')
require('./js/global-use-vue')
require('./js/global-event-handler')
require('./js/init')
require('./js/home')
require('./js/vue')
require('./js/init-sidebar-notify')
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                       初始化代码颜色主题
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
window.codeTheme = 'vscode'
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                 防止普通人偷窥，无脑复制粘贴，造成SEO污染
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
// $(document).bind('contextmenu', function() {
//   return false
// })
// $(document).bind('selectstart', function() {
//   return false
// })
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 初始化主题
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
if ($.cookie('theme') == null) {
  $.cookie('theme', 'light', { // 默认为light主题
    expires: 30,
    path: '/',
    domain: 'cnblogs.com',
  })
}
if ($.cookie('theme') === 'dark') {
  document.documentElement.setAttribute('theme', 'dark')
}

/**
 * 在Markdown中运行脚本，为了有高亮和提示效果，这里用了es6
 */
$('code.language-es6').each(function() {
  const start = new Date().getTime()
  window.eval($(this).text())
  const end = new Date().getTime()
  console.log('debug: eval耗时' + (end - start) + '毫秒')
  $(this).parent().remove()
})
