require('./_tag.scss')


modifyTag()
$(document).on('ajaxLater', function(e, item) {
  if (item.url === `/${userPath}/ajax/sidecolumn.aspx`) {
    modifyTag()
  }
})

function modifyTag() {
  let $li = $('#sidebar_toptags li')
  $li.children('a').each(function() {
    if (/^_/.test($(this).text())){
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

$('.catListTag ul li a').each(function() {
  $(this).click(function(e) {
    e.stopPropagation()
    window.location.href = $(this).attr('href')
  })
})
$('.catListTag ul li').each(function(e) {
  $(this).click(function() {
    $(this).children('a').trigger('click')
  })
})

