/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 txt
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
$('pre code[class=language-txt]').addClass('hljs')
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                       代码复制
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
// -------------------------------------------------- ui --------------------------------------------------
for (let i = 0; i <= $('pre').length; i++) {
  $('pre')
    .eq(i)
    .wrapAll('<div class="copyItem"></div>')
    .before('<div class="clipboard-button" id="copy_btn_' + i + ' " data-clipboard-target="#copy_target_' + i + '"title="复制"></div>')
    .attr('id', 'copy_target_' + i)

  $('.copyItem').css('position', 'relative')
}
"dfa".trim()
// -------------------------------------------------- event --------------------------------------------------
const ClipboardJS = require('clipboard')
const clipboard = new ClipboardJS('.clipboard-button')
clipboard.on('success', function(e) {
  window.eleNotice.$notify({
    title: '成功',
    message: '复制成功',
    type: 'success',
    duration: '500',
  })
  e.clearSelection()
})
clipboard.on('error', function(e) {
  window.eleNotice.this.$notify.error({
    title: '错误',
    message: '复制失败，请尝试使用PC端'
  })
  e.clearSelection()
})
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                       显示为何种语言
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
$('code.hljs[class^=language-]').each(function() {
  const lang = $(this).attr('class').split(' ')[0].split('-')[1]
  $(this).parents('.copyItem').prepend(`
    <div class="kind-of-lang">${lang}</div>
  `)
})
