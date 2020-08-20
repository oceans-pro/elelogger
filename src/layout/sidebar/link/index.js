require('./cnblog-score')
require('./latest')
require('./rank')

import listenCalendarLinkClick from '@/layout/sidebar/link/calendar'
import addUseful from '@/layout/sidebar/link/useful'
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                              常用连接
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
// 如果没有，jquery就不会做任何事情
// $('abc').append('1234567')并不会报错
modifyLinks()
addUseful()
listenCalendarLinkClick()
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                           监听后来的Ajax
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
$(document).on('ajax-later', function(e, item) {
  if (item.url === `/${userPath}/ajax/sidecolumn.aspx`) {
    modifyLinks()
    addUseful()
    listenCalendarLinkClick()
  }
})

function modifyLinks() {
  $('.catListLink h3.catListTitle').text('随笔档案')
  let $ul = $('#sidebar_shortcut ul')
  // --删除一些没有用的
  $ul.find('li:contains(我的评论)').remove()
  $ul.find('li:contains(我的随笔)').remove()  // 我的随笔其实就是主页...没有必要存在啊
  $ul.find('li:contains(我的参与)').remove()
  // --改字
  $ul.find('li:contains(我的标签) a').text('随笔标签')
  $ul.find('li:contains(最新评论) a').text('随笔评论')

  $ul.append(`<li><a id="my-calendar" href="https://www.cnblogs.com/${userPath}/ajax/calendar.aspx?dateStr=">写作日历</a></li>`)
  $ul.append(`<li><a id="my-score" href="https://www.cnblogs.com/${userPath}/ajax/sidecolumn.aspx">我的积分</a></li>`)
  // --新链接
  $ul.append(`<li><a id="my-rank" href="https://www.cnblogs.com/${userPath}/ajax/TopLists.aspx">相关排行</a></li>`)
  $ul.append(`<li><a id="my-latest" href="https://www.cnblogs.com/${userPath}/ajax/sidecolumn.aspx">最新随笔</a></li>`)
  $ul.find('a').attr('target', '_blank')
}
