/**
 * 侧边栏 - 文件
 * 控制侧边栏，不要出现滚动条
 */
require('./_sidebar.scss')
require('./_hide.scss')
require('./_calendar.scss')
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                           监听后来的Ajax
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
$(document).on('ajax-later', function(e, data) {
  // console.log(data)
})
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                             bug fix
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
$sidebar = $('#sideBar')
$sidebar.scrollAlone() // 防止以小带大
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                              常用连接
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/

$ul = $('#sidebar_shortcut ul')
$ul.append(`<li><a href="https://www.cnblogs.com/${userPath}/ajax/sidecolumn.aspx">我的积分</a></li>`)
$ul.append(`<li><a href="https://www.cnblogs.com/${userPath}/ajax/TopLists.aspx">随笔排行</a></li>`)
$ul.append(`<li><a id="my-calendar" href="https://www.cnblogs.com/${userPath}/ajax/calendar.aspx?dateStr=">写作日历</a></li>`)
$ul.append(`<li><a href="https://www.cnblogs.com/${userPath}/ajax/sidecolumn.aspx">最新随笔</a></li>`)
$ul.children('li:contains(我的评论)').remove()
$ul.children('li:contains(我的评论)').remove()
// $ul.append(`<li><a href="https://www.cnblogs.com/${userPath}/ajax/sidecolumn.aspx">我的公告</a></li>`)

/**
 * 首次点击
 */
eleNotice.calendarNoticeNum = 0
$('#my-calendar').click(function(e) {
  e.preventDefault()
  for (const item of ajaxStorage) {
    if (item.url.startsWith(`/${userPath}/ajax/calendar.aspx`)) {
      showCalendar(item.xhr.responseText)
      // loadBlogCalendar('2020/09/10'); return false;
      // myLoadBlogCalendar('2020/09/10'); return false;
      useMyFunction()
      return
    }
  }
})
window.myLoadBlogCalendar = function(date) {
  $.ajax({
    url: getAjaxBaseUrl() + 'calendar.aspx',
    data: {dateStr: date},
    type: 'get',
    dataType: 'text',
    success: function(html) {
      // eleNotice.$notify({message: html, title: '写作日历', dangerouslyUseHTMLString: true, duration: 0})
      showCalendar(html)
      useMyFunction()
    }
  })
}

function showCalendar(htmlStr) {
  if (eleNotice.calendarNoticeNum === 2) {
    return eleNotice.$message.error('最多显示两个日历哦~')
  }
  eleNotice.$notify({
    message: htmlStr,
    title: '写作日历',
    dangerouslyUseHTMLString: true,
    duration: 0,
    onClose: function() {
      eleNotice.calendarNoticeNum--
    }
  })
  eleNotice.calendarNoticeNum++
}

function useMyFunction() {
  const $arrows = $('.CalNextPrev a')
  $arrows.each(function() {
    const arrowText = $(this).attr('onclick').toString().replace('load', 'myLoad')
    $(this).attr('onclick', arrowText)
  })
}

/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 其他
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
$('#leftcontentcontainer').append($('#footer').text('Copyright-2020 oceans-pro'))
$('#sidebar_search h3').text('站内搜索')
