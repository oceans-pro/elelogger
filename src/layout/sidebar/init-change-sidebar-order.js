// 不显示谁关注了我，我的圆年龄，但是你仍然可以点击头像看详情
$('#profile_block').hide()
$('#sidebar_news h3').text('关于我')

$('#blogCalendar').unwrap()
const $calendar = $('#blog-calendar').prepend(`<h3 class="catListTitle">写作日历</h3>`)
$('#blog-sidecolumn').append($calendar)

$('#sideBar')
    .append($('#footer'))
    .scrollAlone()
