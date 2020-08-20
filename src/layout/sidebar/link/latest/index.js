eleNotice.latestFlag = false

$('#my-rank').click(function(e) {
  /**
   * 有时间可以考虑变为单行文本 ...
   */
  if (window.isMobile) {
    return
  }
  e.preventDefault()
  for (const item of window.ajaxStorage) {
    if (item.url === `/${userPath}/ajax/TopLists.aspx`) {
      showNotice(item.xhr.responseText)
    }
  }
})

function showNotice(htmlStr) {
  if (eleNotice.scoreNoticeCount === 1) {
    eleNotice.$notify.closeAll()
    // return
  }
  eleNotice.$notify({
    message: htmlStr,
    title: '相关排行',
    dangerouslyUseHTMLString: true,
    duration: 0,
    onClose: function() {
      eleNotice.scoreNoticeCount--
    }
  })
  eleNotice.scoreNoticeCount++
  $('.el-notification').css('width', 'auto')
}
