import {deHighlight, evalSafely} from '@/pages/article/console/util'
import {Logger} from '@/pages/article/console/js/helper'

export default function(that, index) {

  $(that).parents('.copyItem').append(`
          <div id="js-${index}"></div>` // 设置logger的位置
  )
  const codeWithTags = that.innerHTML
  // 删掉多余的外层hljs标签 注意使用非贪婪匹配
  let js
  js = deHighlight(codeWithTags)


  const logger = new Logger(index, false)
  console.log = value => {
    logger.content += fn.getHtmlStrByValue(value)
  }
  js = `
          try {
            ${js}
          } catch (e) {
            console.log('错_错-错[' + e.name + ': ' + e.message + ']')
            fn.error(e.stack)
          }`
  evalSafely(js)

  console.log = window.fn.log
  console.error = window.fn.error
}
