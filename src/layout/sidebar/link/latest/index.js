export default function addEventForLatest() {
  $('#my-latest').click(function(e) {
    e.preventDefault()
    for (const item of window.ajaxStorage) {
      if (item.url === `/${userPath}/ajax/sidecolumn.aspx`) {
        const html = $.parseHTML(`<div>${item.xhr.responseText}</div>`)
        const $html = $(html)
        let $latest = $html.find('#sidebar_recentposts ul')
        let htmlStr = $latest[0].innerHTML
        htmlStr = `<div id="sidebar_recentposts">${htmlStr}</div>`
        showNotice(htmlStr)
      }
    }
  })
}

function showNotice(htmlStr) {
  if (eleNotice.scoreNoticeCount === 1) {
    eleNotice.$notify.closeAll()
    // return
  }
  eleNotice.$notify({
    message: htmlStr,
    title: '最新随笔',
    dangerouslyUseHTMLString: true,
    duration: 0,
    onClose: function() {
      eleNotice.scoreNoticeCount--
    }
  })
  eleNotice.scoreNoticeCount++
  $('.el-notification').css('width', 'auto')
}
