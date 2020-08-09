
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 IE
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
const isIE = function() {
  return !!window.ActiveXObject || 'ActiveXObject' in window
}
if (isIE()) {
  $('body').append(`
    <div id="ie-warning"
         style="font-size: 50px;height:100vh;background:transparent;border: 1px solid red;position:relative;z-index: 9999"
    >
      <h1 style="color: red;">为减小网页体积，本博客决定放弃兼容IE浏览器，请使用高级浏览器以获得最好的浏览效果😊</h1>
      <a style="color: green" href="https://www.google.cn/chrome/">谷歌浏览器官网(https://www.google.cn/chrome/)</a>
    </div>
`)
}

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

