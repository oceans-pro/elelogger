import {deHighlight} from '@/pages/article/console/util'

export default function addPreviewAfterHtmlDemo() {
  const $demos = $('code.language-html')
  // that 为 dom对象
  // index 为当前为第几个代码块
  $demos.each(function(index, that) {
    let html, flag
    const comments = $(this).children('.hljs-comment')
    for (let i = 0; i < comments.length; i++) {
      let value = deHighlight(comments[i].innerHTML)
      value = value.replace(/ /g, '')
      if (value === '<!--log-->') {
        flag = 'logBefore'
        break
      }
      if (value === '<!--log-after-->') {
        flag = 'logAfter'
        break
      }
    }


    const codeWithTags = that.innerHTML
    html = deHighlight(codeWithTags)
    const $to = $(this).parents('.copyItem')
    const content = `<div id="html-${index}">${html}</div>`
    if (flag === 'logAfter') {
      $to.after(content)
      return
    }
    if (flag === 'logBefore') {
      $to.before(content)
    }
  })
}
