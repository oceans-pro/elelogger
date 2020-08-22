window.userPath = null
window.isAuthenticated = null
window.isBlogOwner = null
window.ele = null
window.userPath = window.location.pathname.split('/')[1]
window.ajaxStorage.forEach(item => {
  if (item.url === '/oceans/ajax/blogSubscription') {
    window.isAuthenticated = item.xhr.responseJSON.isAuthenticated
    window.isBlogOwner = item.xhr.responseJSON.isBlogOwner
  }
})

// -------------------------------------------------- ele --------------------------------------------------
if ($('#ele').length === 0) {
  $('body').append('<div id="ele"></div>')
}

window.ele= new Vue({
  el: '#ele',
})

