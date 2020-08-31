/**
 * #blog_post_info_block
 * 即支持、收藏、分享区域
 */

/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                            默认自动推荐
1. 如果停留超过一秒，则证明读者是支持我的
2. 该功能主要用于统计 博客园用户的占比
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
setTimeout(autoClick, 1000)

function autoClick() {
  let tip = $('#digg_tips').text()
  if (tip.trim().length > 0) {
    if (tip.indexOf('您已推荐过') !== -1) {
      // 给用户一个取消的机会，就不删掉提示文字了
      return
    }
  }
  if (!fn.getAuthInfo().isBlogOwner && fn.getAuthInfo().isAuthenticated) {
    $('.diggit').trigger('click')
    fn.log('感觉您的支持~若不满意，请刷新后取消支持')
  }
}

