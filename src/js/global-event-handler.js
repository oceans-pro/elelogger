window.changeTheme = changeTheme
window.showSide = showSide
window.showContent = showContent
window.sidebarToggle = sidebarToggle
window.changeTheme = changeTheme
window.changeCodeTheme = changeCodeTheme
window.handleFullScreen = handleFullScreen
window.handleWideMode = handleWideMode

function createDownload(
    {
      el = '',
      title = '',
      version = 'v-1.0',
      href = '#'
    }) {
  console.log('da')
  return new Vue({
        el: el,
        template: `
        <div class="source-download">
          <div class="source-type zip">
          </div>
          <div class="source-info">
            <p>{{ title }}</p>
            <p>version:{{ version }}</p>
          </div>
          <div class="download-btn">
            <a :href="href"></a>
          </div>
        </div>`,
        data: {
          title: title,
          version: version,
          href: href
        }
      }
  )
}

/**
 * 切换主题
 */
function changeTheme() {
  if ($.cookie('theme') === 'light') {
    $.cookie('theme', 'dark', {
      expires: 30,
      path: '/',
      domain: 'cnblogs.com',
    })
    document.documentElement.setAttribute('theme', 'dark')
    $('.my-el-card').css('box-shadow', '')
  } else {
    $.cookie('theme', 'light', {
      expires: 30,
      path: '/',
      domain: 'cnblogs.com',
    })
    document.documentElement.removeAttribute('theme')
    $('.my-el-card').css('box-shadow', '0 2px 12px 0 rgba(0,0,0,.1)')
  }
}

/**
 * 切换代码高亮
 */
function changeCodeTheme() {
  if (!window.markdownVue) { // 说明Markdown中没有显式使用Vue
    $('body').append($('<div id="markdown-vue" title="只作为主题切换"></div>>'))
    window.useVue()
  }
  if ($('.hljs').size() === 0) {
    window.markdownVue.$notify({
      title: '提示',
      message: '当前页面没有代码块！无法切换代码着色方案。',
      type: 'warning'
    })
    return
  }
  const theme = window.markdownVue.codeTheme
  const nameList = ['vscode', 'atom', 'solarized', 'vscode']
  const srcList = ['https://blog-static.cnblogs.com/files/oceans/vscode.css',
    'https://blog-static.cnblogs.com/files/oceans/atom.css',
    'https://blog-static.cnblogs.com/files/oceans/solarized.css',
    'https://blog-static.cnblogs.com/files/oceans/vscode.css']
  const index = nameList.indexOf(theme)
  window.markdownVue.codeTheme = nameList[index + 1]
  $('link[title=code-theme]').remove()
  $('head').append(`<link title='code-theme' type='text/css' rel='stylesheet' href=${srcList[index + 1]}>`)
  console.log('debug: ' + window.markdownVue.codeTheme)
  window.markdownVue.$notify({
    title: '提示',
    message: `当前代码高亮主题为 <b>${window.markdownVue.codeTheme}</b>`,
    dangerouslyUseHTMLString: true,
    duration: 1000,
    type: 'success'
  })
}


/**
 * 显示文件
 */
function showSide() {
  $('#sideBarMain').show()
  $('#sidebar_scroller').hide()
  $('#myside').addClass('active')
  $('#mycontent').removeClass('active')
}

/**
 * 显示大纲
 */
function showContent() {
  $('#sideBarMain').hide()
  $('#sidebar_scroller').show()
  $('#myside').removeClass('active')
  $('#mycontent').addClass('active')
}

/**
 * 切换侧边栏
 */
function sidebarToggle() {
  if ($.cookie('is-side-open') === 'open') {
    $.cookie('is-side-open', 'close', {
      expires: 30,
      path: '/',
      domain: 'cnblogs.com',
    })
    $('#main').addClass('main-widthout-sidebar')
    $('.btn-main').removeClass('btn-main-open')
  } else {
    $.cookie('is-side-open', 'open', {
      expires: 30,
      path: '/',
      domain: 'cnblogs.com',
    })
    $('#main').removeClass('main-widthout-sidebar')
    $('.btn-main').addClass('btn-main-open')
  }
}

/**
 * 切换全屏
 */
function handleFullScreen() {
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
function handleWideMode() {
  if (window.wideMode) {
    $('.forFlow').css('max-width', 800)
  } else {
    $('.forFlow').css('max-width', 8000)
  }
  window.wideMode = !window.wideMode
}
