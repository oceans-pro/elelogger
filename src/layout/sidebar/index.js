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
// $ul.append(`<li><a href="https://www.cnblogs.com/${userPath}/ajax/sidecolumn.aspx">我的公告</a></li>`)

$('#my-calendar').click(function(e) {
  e.preventDefault()
  window.ajaxStorage.forEach(item => {
    if (item.url.startsWith(`/${userPath}/ajax/calendar.aspx`)) {
      const $table = $(item.xhr.responseText)
      eleNotice.$alert(item.xhr.responseText, '写作日志', {dangerouslyUseHTMLString: true})
    }
  })
})


/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 其他
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
$('#leftcontentcontainer').append($('#footer').text('Copyright-2020 oceans-pro'))
$('#sidebar_search h3').text('站内搜索')
