require('./_search.scss')

function beautifyZzk() {
  $('#btnZzk').remove()
  const $q = $('#q')
  $q.parent()
    .html($q)
    .append('<span class="search-icon" onclick="zzk_go()"><i class="el-icon-search"></i></span>')
  $('#sidebar_search h3').text('站内搜索')
}

beautifyZzk()

$(document).on('ajaxLater', function(e, item) {
  if (item.url === `/${g.userPath}/ajax/sidecolumn.aspx`) {
    beautifyZzk()
  }
})
