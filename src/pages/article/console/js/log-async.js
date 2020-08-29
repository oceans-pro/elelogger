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

  //                           分隔符          唯一有用的部分     分隔符
  let reg = /(\/\/ log-async)(\s|[\r\n])+(console.log\(.*?\))(;|\s|[\r\n])+/gm
  let before = `
  console.log = function(value) {
    clearInterval(g.loggers[${index}].timer)
    g.loggers[${index}].tip = ''
    g.loggers[${index}].content += fn.getHtmlStrByValue(value)
  }`
  let after = `
  console.log = window.fn.log
  `
  js = js.replace(reg, function(value, $1, $2, $3, $4) {
    return `
    ${before}
    ${$3}
    ${after}
    `
  })
  evalSafely(js)
}
