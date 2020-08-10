

/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                        初始化主题 close显示侧边栏
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/

if ($.cookie('is-side-open') == null) {
  if (!isMobile()) {
    $.cookie('is-side-open', 'close', {
      expires: 30,
      path: '/',
      domain: 'cnblogs.com',
    })
  } else { // 手机端
    console.log('debug: mobile')
    $.cookie('is-side-open', 'open', {
      expires: 30,
      path: '/',
      domain: 'cnblogs.com',
    })
  }
}
if (isMobile()) {
  $.cookie('is-side-open', 'open', {
    expires: 30,
    path: '/',
    domain: 'cnblogs.com',
  })
}
if ($.cookie('is-side-open') === 'open') {
  $('#main').removeClass('main-widthout-sidebar')
}
if ($.cookie('is-side-open') === 'close') {
  $('#main').addClass('main-widthout-sidebar')
}

