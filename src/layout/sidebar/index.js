require('./_sidebar.scss')
$(document).on('ajax-later', function(e, data) {
  console.log(data)
})
$sidebar = $('#sideBar')
$sidebar.scrollAlone()


$('#profile_block').hide()
$('#sidebar_news h3').text('关于我')

$('#leftcontentcontainer').append($('#footer'))

$('#sidebar_shortcut')
