/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                              常用连接
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
// 如果没有，jquery就不会做任何事情
// $('abc').append('1234567')并不会报错
modifyLinks()
$(document).on('ajax-later', function(e, item) {
  if (item.url === `/${userPath}/ajax/sidecolumn.aspx`) {
    modifyLinks()
  }
})

function modifyLinks() {
  $ul = $('#sidebar_shortcut ul')
  $ul.append(`<li><a id="my-score" href="https://www.cnblogs.com/${userPath}/ajax/sidecolumn.aspx">我的积分</a></li>`)
  $ul.append(`<li><a href="https://www.cnblogs.com/${userPath}/ajax/TopLists.aspx">随笔排行</a></li>`)
  $ul.append(`<li><a id="my-calendar" href="https://www.cnblogs.com/${userPath}/ajax/calendar.aspx?dateStr=">写作日历</a></li>`)
  $ul.append(`<li><a href="https://www.cnblogs.com/${userPath}/ajax/sidecolumn.aspx">最新随笔</a></li>`)
  $ul.append(`<li><a href="https://element.eleme.cn/#/zh-CN/component/message">实用工具</a></li>`)
  $ul.find('li:contains(我的评论)').remove()
  $ul.find('li:contains(我的参与)').remove()
  $ul.find('a').attr('target', '_blank')
// $ul.append(`<li><a href="https://www.cnblogs.com/${userPath}/ajax/sidecolumn.aspx">我的公告</a></li>`)
}
