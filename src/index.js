// todo
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
require('@/store')  // 函数
require('@/init')
require('@/layout')
require('@/pages')

/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                 防止普通人偷窥，无脑复制粘贴，造成SEO污染
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
// $(document).bind('contextmenu', function() {
//   return false
// })
// $(document).bind('selectstart', function() {
//   return false
// })

