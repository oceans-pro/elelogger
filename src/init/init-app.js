import initOrToggleSidebar from '@/store/float-btn-controller/sidebar'
import initOrToggleTheme from '@/store/float-btn-controller/theme'

initOrToggleSidebar(true)
initOrToggleTheme(true)
initOrToggleCodeColor(true)

// -------------------------------------------------- ele --------------------------------------------------
if ($('#ele').length === 0) {
  $('body').append('<div id="ele"></div>')
}

window.ele = new Vue({
  el: '#ele',
})

/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                 防止普通人偷窥，无脑复制粘贴，造成SEO污染
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
// $(document).bind('contextmenu', function() {
//   return false
// })
// $(document).bind('selectstart', function() {
//   return false
// })
