/**
 * 点击随笔页开头的人跳转到用户详情页
 */
$a = $('.postDesc #post-date').next()
console.log($a.get(0))
$a.click(function(e) {
  e.preventDefault()
  location.href = `https://home.cnblogs.com/u/${userPath}/`
})
