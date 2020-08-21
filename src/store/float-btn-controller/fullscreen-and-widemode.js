/**
 * 切换全屏
 */
export function toggleFullScreen() {
  let element = document.documentElement
  // 判断是否已经是全屏
  // 如果是全屏，退出
  if (window.fullscreen) {
    $('code.hljs').removeClass('larger-code')
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
  } else {    // 否则，进入全屏
    $('code.hljs').addClass('larger-code')
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen()
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen()
    } else if (element.msRequestFullscreen) {
      // IE11
      element.msRequestFullscreen()
    }
  }
  // 改变当前全屏状态
  window.fullscreen = !window.fullscreen
}

/**
 * 切换宽屏模式
 */
export function toggleWideMode() {
  if (window.wideMode) {
    $('.forFlow').css('max-width', 800)
  } else {
    $('.forFlow').css('max-width', 8000)
  }
  window.wideMode = !window.wideMode
}
