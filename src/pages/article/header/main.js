// 随笔页
if ($('#topics').length > 0) {
  /**
   * 点击随笔页开头的人跳转到用户详情页
   */
  $a = $('.postDesc #post-date').next()
  $a.click(function(e) {
    e.preventDefault()
    location.href = `https://home.cnblogs.com/u/${userPath}/`
  })
}
