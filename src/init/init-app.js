import initOrToggleSidebar from '@/store/float-btn-controller/sidebar'
import initOrToggleTheme from '@/store/float-btn-controller/theme'

// -------------------------------------------------- ele --------------------------------------------------
if ($('#ele').length === 0) {
  $('body').append('<div id="ele"></div>')
}

window.ele = new Vue({
  el: '#ele',
})

initOrToggleSidebar(true)
initOrToggleTheme(true)
initOrToggleCodeColor(true)

