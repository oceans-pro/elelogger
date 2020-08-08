// 高亮
$('pre code').each(function(i, block) {
  hljs.highlightBlock(block)
})
$('pre code[class=language-txt]').addClass('hljs')

$('code.hljs[class^=language-]').each(function() {
  const lang = $(this).attr('class').split(' ')[0].split('-')[1]
  $(this).parents('.copyItem').prepend(`
    <div class="kind-of-lang">${lang}</div>
  `)
})
