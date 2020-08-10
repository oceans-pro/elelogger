window.userPath = null
window.isAuthenticated = null
window.isBlogOwner = null
window.eleNotice = null
window.theme = ''
window.userPath = window.location.pathname.split('/')[1]
window.ajaxStorage.forEach(item => {
  if (item.url === '/oceans/ajax/blogSubscription') {
    window.isAuthenticated = item.xhr.responseJSON.isAuthenticated
    window.isBlogOwner = item.xhr.responseJSON.isBlogOwner
  }
})

// -------------------------------------------------- eleNotice --------------------------------------------------
if ($('#vue-notice').length === 0) {
  $('body').append('<div id="vue-notice"></div>')
}
window.eleNotice = new Vue({
  el: '#vue-notice',
})

// -------------------------------------------------- 初始化主题 --------------------------------------------------
if ($.cookie('theme') == null) {
  window.theme = 'light'
  $.cookie('theme', 'light', { // 默认为light主题
    expires: 30,
    path: '/',
    domain: 'cnblogs.com',
  })
}
if ($.cookie('theme') === 'dark') {
  window.theme = 'dark'
  document.documentElement.setAttribute('theme', 'dark')
}
