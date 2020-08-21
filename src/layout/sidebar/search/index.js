require('./_search.scss')
$zzk = $('#btnZzk')
$(document).on('themeChange', function(e, data) {
  if (data === 'light') {
    $zzk.addClass('el-button el-button--info is-plain')
  }
  if (data === 'dark') {
    $zzk.addClass('el-button el-button--info')
  }
})
