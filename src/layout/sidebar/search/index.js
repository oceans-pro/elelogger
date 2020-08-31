require('./_search.scss')

function beautifyZzk() {
  $('#btnZzk').remove()
  const $q = $('#q')
  $q.parent()
    .html($q)
    .append('<span class="search-icon" onclick="zzk_go()"><i class="el-icon-search"></i></span>')
}

beautifyZzk()

$(document).on('ajaxLater', function(e, item) {
  if (item.url === `/${g.userPath}/ajax/sidecolumn.aspx`) {
    beautifyZzk()
  }
})
