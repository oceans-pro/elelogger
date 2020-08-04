window.changeTheme = changeTheme
window.showSide = showSide
window.showContent = showContent
window.sidebarToggle = sidebarToggle
window.changeTheme = changeTheme
window.changeCodeTheme = changeCodeTheme

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
    document.documentElement.removeAttribute('theme', 'dark')
    $('.my-el-card').css('box-shadow', '0 2px 12px 0 rgba(0,0,0,.1)')
  }
}

function showSide() {
  // -- 动画有问题
  // $('#sideBarMain').fadeIn()
  // $('#sidebar_scroller').fadeOut()
  $('#sideBarMain').show()
  $('#sidebar_scroller').hide()
  $('#myside').addClass('active')
  $('#mycontent').removeClass('active')
}

function showContent() {
  // $('#sideBarMain').fadeOut()
  // $('#sidebar_scroller').fadeIn()
  $('#sideBarMain').hide()
  $('#sidebar_scroller').show()
  $('#myside').removeClass('active')
  $('#mycontent').addClass('active')
}


function sidebarToggle() {
  if ($.cookie('is-side-open') === 'open') {
    $.cookie('is-side-open', 'close', {
      expires: 30,
      path: '/',
      domain: 'cnblogs.com',
    })
    $('#main').addClass('main-widthout-sidebar')
  } else {
    $.cookie('is-side-open', 'open', {
      expires: 30,
      path: '/',
      domain: 'cnblogs.com',
    })
    $('#main').removeClass('main-widthout-sidebar')
  }
}

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
}
