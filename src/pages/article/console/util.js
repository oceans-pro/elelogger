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
  console.log(result)
  return result
}
