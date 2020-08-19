require('./style.scss')

$('#home, #page_end_html').show()
$('#loading').hide()
console.log('isBundleJsCome = true')
window.isBundleJSCome = true
$.ajaxSetup({
  global: true,
})

/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 导入
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
require('@/store')
require('@/init')
require('@/components')
require('@/layout')
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
  window.eval($(this).text())
  $(this).parent().remove()
})
