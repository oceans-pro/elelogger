require('./_float-button.scss')
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 侧边悬浮按钮
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
$('#home').append(`
        <div class="float-btn"><ul>
        <li class="btn-top"><a href="#header"></a></li>
        <li class="btn-fullscreen"><a href="javascript:toggleFullScreen();toggleWideMode();"></a></li>
        <li class="btn-theme"><a  href="javascript:initOrToggleTheme()"></a></li>
        <li class="btn-theme-code"><a href="javascript:initOrToggleCodeColor()"></a></li>
        <li class="btn-main"><a href="javascript:initOrToggleSidebar()"></a></li>
        </ul></div>`
)
/* 滚动隐藏效果 */
let windowTop = 0
$(window).scroll(function() {
  let scrolls = $(this).scrollTop()
  if (scrolls - windowTop > 10) {
    // 原来是: 当scrolls > windowTop时，表示页面在向下滑动
    // fix: 当切换主题时，会有一点点变化，也会触发隐藏
    $('.float-btn').addClass('float-btn-hide')
    windowTop = scrolls
  }
  if (scrolls - windowTop < 0) {
    $('.float-btn').removeClass('float-btn-hide')
    windowTop = scrolls
  }
})
