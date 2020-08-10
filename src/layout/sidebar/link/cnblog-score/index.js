require('./_score.scss')
eleNotice.scoreNoticeCount = 0
$('#my-score').click(function(e) {
  e.preventDefault()
  for (const item of window.ajaxStorage) {
    if (item.url === `/${userPath}/ajax/sidecolumn.aspx`) {
      const html = $.parseHTML(`<div>${item.xhr.responseText}</div>`)[0]
      const $html = $(html)
      // .find &.children
      const scoreStr = $html.find('#sidebar_scorerank ul').html()
      console.log(scoreStr)
      showScore(scoreStr)
    }
  }
})

function showScore(htmlStr) {
  if (eleNotice.scoreNoticeCount === 1) {
    eleNotice.$notify.closeAll()
    // return
  }
  eleNotice.$notify({
    message: htmlStr,
    title: '积分与排名',
    dangerouslyUseHTMLString: true,
    duration: 0,
    onClose: function() {
      eleNotice.scoreNoticeCount--
    }
  })
  eleNotice.scoreNoticeCount++
}
