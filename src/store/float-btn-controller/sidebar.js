/**
 * 侧边栏
 * @param{boolean} isInit
 */

export default function initOrToggleSidebar(isInit) {
  const flag = $.cookie('sidebar-status')
  // -- init
  if (isInit) {
    if (flag === 'hide') {
      hideSidebar()
      return
    }
    if (flag === 'show') {
      if (fn.isMobile()) {
        hideSidebar()
        saveCookie('hide')
        return
      }
      showSidebar()
      return
    }
    // 首次打开
    if (!fn.isMobile()) {
      showSidebar()
      saveCookie('show')
      return
    }
    return
  }
  // -- toggle
  if (flag === 'hide') {
    saveCookie('show')
    showSidebar()
    return
  }
  if (flag === 'show') {
    saveCookie('hide')
    hideSidebar()
    return
  }
  saveCookie('hide')
  hideSidebar()

  function hideSidebar() {
    $('#main').removeClass('main-widthout-sidebar')
    $('.btn-main').addClass('btn-main-open')
  }

  function showSidebar() {
    $('#main').addClass('main-widthout-sidebar')
    $('.btn-main').removeClass('btn-main-open')
  }

  function saveCookie(flag) {
    $.cookie('sidebar-status', flag, {
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
  $('#sidebar_files').addClass('active')
  $('#sidebar_outline').removeClass('active')
}

/**
 * 显示大纲
 */
export function showContent() {
  $('#sideBarMain').hide()
  $('#sidebar_scroller').show()
  $('#sidebar_files').removeClass('active')
  $('#sidebar_outline').addClass('active')
}
