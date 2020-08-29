import {deHighlight, evalSafely} from '@/pages/article/console/util'
import {Logger} from '@/pages/article/console/js/helper'

export default function logAsync(that, index) {

  $(that).parents('.copyItem').append(`
          <div id="js-${index}"></div>` // 设置logger的位置
  )
  const codeWithTags = that.innerHTML
  // 删掉多余的外层hljs标签 注意使用非贪婪匹配
  let js
  js = deHighlight(codeWithTags)

  const logger = new Logger(index, true)
  window.g = window.g || {}
  window.g.loggers = window.g.loggers || []
  window.g.loggers[index] = logger
  js = js.replace(/\/\/ log-async/gm, `
            console.log = value => {
            clearInterval(g.loggers[${index}].timer)
            g.loggers[${index}].tip = ''
            g.loggers[${index}].content += fn.getHtmlStrByValue(value)
          }
        `)
  evalSafely(js)
}
