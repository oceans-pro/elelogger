/**
 * 借助body的onload调用JS
 * @param cb
 */
window.fn = window.fn || {}
window.fn.invokeMyFunction = function(cb) {
  cb()
}
window.fn.isMobile = window.isMobile
window.isMobile = isMobile
window.clearForHelloPage = clearForHelloPage

function isMobile() {
  const userAgentInfo = navigator.userAgent
  const mobileAgents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let mobile_flag = false
  // 根据userAgent判断是否是手机
  for (let v = 0; v < mobileAgents.length; v++) {
    if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
      mobile_flag = true
      break
    }
  }
  const screen_width = window.screen.width
  const screen_height = window.screen.height
  // 根据屏幕分辨率判断是否是手机
  if (screen_width < 500 && screen_height < 800) {
    mobile_flag = true
  }
  return mobile_flag
}


function clearForHelloPage() {
  $(`h1.postTitle,
  div.postTitle,
  div.postDesc,
  div#blog_post_info_block,
  div#comment_form_container,
  div#comment_form.commentform,
  #Header1_HeaderTitle`).hide()
}

