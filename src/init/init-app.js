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

