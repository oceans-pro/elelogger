require('./_sidebar.scss')
require('./_hide.scss')
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
$ul.append(`<li><a href="https://www.cnblogs.com/${userPath}/ajax/calendar.aspx?dateStr=">写作日历</a></li>`)
$ul.append(`<li><a href="https://www.cnblogs.com/${userPath}/ajax/sidecolumn.aspx">最新随笔</a></li>`)
// $ul.append(`<li><a href="https://www.cnblogs.com/${userPath}/ajax/sidecolumn.aspx">我的公告</a></li>`)


/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 其他
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
$('#leftcontentcontainer').append($('#footer').text('Copyright-2020 oceans-pro'))
$('#sidebar_search h3').text('站内搜索')
