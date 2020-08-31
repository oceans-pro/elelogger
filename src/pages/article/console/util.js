/**
 *
 * @param codeWithTags
 * @returns string 原始代码
 */
export function deHighlight(codeWithTags) {
  let result = codeWithTags
  // 删掉多余的外层hljs标签 注意使用非贪婪匹配
  result = result.replace(/&gt;/mg, '>')
  // result = result.replace(/&lt;/mg, '<')
  result = $.parseHTML(`<div>${result}</div>`)[0]
  result = $(result).text()
  return result
}

/**
 * 1. 提供独立作用域
 * 2. 保证eval执行失败也不会影响后面的代码
 * @param js 要执行的JS代码
 */
export function evalSafely(js) {
  const javascript = `
    !function(){
    ${js}
    }()
  `
  try {
    window.eval(javascript)
  } catch (e) {
    window.console.error('eval报错了 => evalSafely => // log-async or // log')
    window.console.error(e)
  }
}


/**
 * @param value 要输入的值
 * @return {string} 转换的HTML字符串 | 或不转换
 */
export function getHtmlStrByValue(value) {
  let result = ''
  if (value === undefined) {
    result += `<div class="null">undefined</div>`
    result += `<div class="hr"></div>`
    return result
  }
  if (value === null) {
    result += `<div class="null">null</div>`
    result += `<div class="hr"></div>`
    return result
  }

  if (typeof value === 'object') {
    if (value.toString().indexOf('vue-devtools') > 0) {
      return
    }
    const pureJson = JSON.stringify(value, null, 2)
    const colorfulJson = highLightJson(pureJson)
    result += `<pre><div class="obj">${colorfulJson}</div></pre>`
    result += `<div class="hr"></div>`
    return result
  }
  if (typeof value === 'number' || typeof value === 'boolean') {
    result += `<div class="num">${value}</div>`
    result += `<div class="hr"></div>`
    return result
  }
  if (typeof value === 'string') {
    if (value.substring(0, 5) === '错_错-错') {
      result += `<div style="color: red;font-weight: bold;">${value.substring(5)}</div>`
      result += `<div class="hr"></div>`
      return result
    }
    result += `<div class="str">${value}</div>`
    result += `<div class="hr"></div>`
    return result
  }

  if (typeof value === 'function') {
    const str = value.toString()
    result += `<pre><div class="str">${str}</div></pre>`
    result += `<div class="hr"></div>`
    return result
  }

  /**
   *
   * @param {string} str
   * @returns {string}
   */
  function highLightJson(str) {
    return window.hljs.highlight('json', str).value
  }

}
