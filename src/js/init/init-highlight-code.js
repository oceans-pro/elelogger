// 高亮
$('pre code')
    .each(function(i, block) {
      hljs.highlightBlock(block)
    })
// .each(function() {
//   const lines = $(this).text().split('\n').length - 1
//   const $numbering = $('<ul/>').addClass('pre-numbering')
//   $(this).addClass('has-numbering').parent().append($numbering)
//   for (let i = 1; i <= lines; i++) {
//     $numbering.append($('<li/>').attr('data-number', i))
//   }
// })
$('code.hljs[class^=language-]').each(function() {
  const lang = $(this).attr('class').split(' ')[0].split('-')[1]
  console.log(lang)
  $(this).parents('.copyItem').before(`
    <span>${lang}</span>
  `)
})
