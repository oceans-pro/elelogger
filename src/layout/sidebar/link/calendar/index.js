/**
 * 首次点击
 */
require('./_calendar.scss')

export default function addEventForCalendar() {
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
}

// global
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
