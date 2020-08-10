window.userPath = null
window.isAuthenticated = null
window.isBlogOwner = null
window.eleNotice = null

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
