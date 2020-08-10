/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 初始化主题
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
if ($.cookie('theme') == null) {
  $.cookie('theme', 'light', { // 默认为light主题
    expires: 30,
    path: '/',
    domain: 'cnblogs.com',
  })
}
if ($.cookie('theme') === 'dark') {
  document.documentElement.setAttribute('theme', 'dark')
}
