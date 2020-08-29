/**
 * 魔法注释
 * 1. log 展示代码 + 执行代码
 * 2. log-after 展示代码 + 执行代码
 * 3. run 不展示代码，将html代码替换到原来的代码显示位置
 */
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


      console.log(value)

      if (value === '<!--log-->' || value === '<!--log-before-->') {
        flag = 'logBefore'
        break
      }
      if (value === '<!--log-after-->') {
        flag = 'logAfter'
        break
      }
      if (value === '<!--run-->') {
        flag = 'run'
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
      return
    }
    if (flag === 'run') {
      $to.replaceWith(content)
    }
  })
}
