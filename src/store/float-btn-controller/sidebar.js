/**
 * 侧边栏
 * @param{number} type 若type为0代表初始化
 */
export default function initOrToggleSidebar(type) {
  const flag = $.cookie('is-side-open')
  // -- init
  if (type === 0) {
    if (flag === 'open') {
      makeOpen()
      return
    }
    if (flag === 'close') {
      makeClose()
      return
    }
    // 首次打开
    // 移动端和PC端的策略不同，移动端首次不打开侧边
    if (isMobile()) {
      makeClose()
      saveCookie('close')
      return
    }
    if (!isMobile()) {
      makeOpen()
      saveCookie('open')
      return
    }
    return
  }
  // -- toggle
  if (flag === 'open') {
    saveCookie('close')
    makeClose()
    return
  }
  if (flag === 'close') {
    saveCookie('open')
    makeOpen()
    return
  }
  saveCookie('open')
  makeOpen()

  function makeOpen() {
    $('#main').removeClass('main-widthout-sidebar')
    $('.btn-main').addClass('btn-main-open')
  }

  function makeClose() {
    $('#main').addClass('main-widthout-sidebar')
    $('.btn-main').removeClass('btn-main-open')
  }

  function saveCookie(flag) {
    $.cookie('is-side-open', flag, {
      expires: 30,
      path: '/',
      domain: 'cnblogs.com',
    })
  }
}

/**
 * 显示文件
 */
export function showSide() {
  $('#sideBarMain').show()
  $('#sidebar_scroller').hide()
  $('#myside').addClass('active')
  $('#mycontent').removeClass('active')
}

/**
 * 显示大纲
 */
export function showContent() {
  $('#sideBarMain').hide()
  $('#sidebar_scroller').show()
  $('#myside').removeClass('active')
  $('#mycontent').addClass('active')
}
