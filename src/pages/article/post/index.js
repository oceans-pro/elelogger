// 随笔页
if ($('#topics').length > 0) {

  // 表格滚动
  $('table').each(function() {
    $(this).css('cssText', 'width:100%!important;display:table;')
    $(this).wrapAll('<div class="tablebox"></div>')
    $('.tablebox').css('overflow', 'auto')
  })

  // 新窗口打开
  $('#cnblogs_post_body a[href^="http"]').each(function() {
    $(this).attr('target', '_blank')
  })

  // fancybox
  $('.cnblogs-markdown img').each(function() {
    const element = document.createElement('a')
    $(element).attr('data-fancybox', 'gallery')
    $(element).attr('href', $(this).attr('src'))
    $(element).attr('data-caption', $(this).attr('alt'))
    $(this).wrap(element)
    if ($(this).attr('alt') !== '') {
      $(this)
        .parent()
        .after('<div class="img-caption">' + $(this).attr('alt') + '</div>')
    }
  })
}

