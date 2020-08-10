require('./_float-button.scss')
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 侧边悬浮按钮
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
$('#home').append(`
        <div class="float-btn"><ul>
        <li class="btn-top"><a href="#header"></a></li>
        <li class="btn-fullscreen"><a href="javascript:handleFullScreen();handleWideMode();"></a></li>
        <li class="btn-theme"><a  href="javascript:changeTheme()"></a></li>
        <li class="btn-theme-code"><a href="javascript:changeCodeTheme()"></a></li>
        <li class="btn-main"><a href="javascript:sidebarToggle()"></a></li>
        </ul></div>`
)
/* 滚动隐藏效果 */
let windowTop = 0
$(window).scroll(function() {
  let scrolls = $(this).scrollTop()
  if (scrolls >= windowTop) {
    // 当scrolls>windowTop时，表示页面在向下滑动
    $('.float-btn').addClass('float-btn-hide')
    windowTop = scrolls
  } else {
    $('.float-btn').removeClass('float-btn-hide')
    windowTop = scrolls
  }
})
