require('./_tag.scss')


modifyTag()
$(document).on('ajax-later', function(e, item) {
  if (item.url === `/${userPath}/ajax/sidecolumn.aspx`) {
    modifyTag()
  }
})

function modifyTag() {
  $('#sidebar_toptags li').addClass(
      'el-button ' +
      'el-button--info ' +
      'is-plain round ' +
      'el-button--mini ' +
      'is-round')
}
