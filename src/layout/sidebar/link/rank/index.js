export default function addEventForRanks() {
  $('#my-rank').click(function(e) {
    /**
     * 有时间可以考虑变为单行文本 ...
     */
    e.preventDefault()
    for (const item of g.ajaxStorage) {
      if (item.url === `/${g.userPath}/ajax/TopLists.aspx`) {
        showNotice(item.xhr.responseText)
      }
    }
  })
}

function showNotice(htmlStr) {
  if (ele.scoreNoticeCount === 1) {
    ele.$notify.closeAll()
    // return
  }
  ele.$notify({
    message: htmlStr,
    title: '相关排行',
    dangerouslyUseHTMLString: true,
    duration: 0,
    onClose: function() {
      ele.scoreNoticeCount--
    }
  })
  ele.scoreNoticeCount++
  $('.el-notification').css('width', 'auto')
}
