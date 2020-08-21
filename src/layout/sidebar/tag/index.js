require('./_tag.scss')


modifyTag()
$(document).on('ajax-later', function(e, item) {
  if (item.url === `/${userPath}/ajax/sidecolumn.aspx`) {
    modifyTag()
  }
})

function modifyTag() {
  let $li = $('#sidebar_toptags li')
  $li.children('a').each(function() {
    if (/^\$/.test($(this).text())){
      $(this).parent().remove()
    }
  })
  $li.addClass(
    'el-button ' +
    'el-button--info ' +
    'is-plain round ' +
    'el-button--mini ' +
    'is-round')
}
