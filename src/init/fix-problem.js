$('.catListTag ul li a').each(function() {
  $(this).click(function(e) {
    e.stopPropagation()
    window.location.href = $(this).attr('href')
  })
})
$('.catListTag ul li').each(function(e) {
  $(this).click(function() {
    $(this).children('a').trigger('click')
  })
})

