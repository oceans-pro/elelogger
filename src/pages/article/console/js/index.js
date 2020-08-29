/**
 * 魔法函数的说明
 * 1. log/log-async  用于显示代码 + 执行 + log，其中后者为异步调用
 * 2. no-log 用于 显示代码 + 执行，但是不显示log
 * 3. run 用于执行，但是不显示代码
 */
import noLog from './no-log'
import log from './log'
import logAsync from './log-async'
import run from '@/pages/article/console/js/run'
import {listenLoggerClick} from '@/pages/article/console/js/helper'

export default function addConsoleAfterJavascriptDemo() {
  const $demos = $('code.language-js')
  // that 为 dom对象
  // index 为当前为第几个代码块
  $demos.each(function(index, that) {
      const comments = $(this).children('.hljs-comment')
      let flag = ''
      for (let i = 0; i < comments.length; i++) {
        // 魔法注释的灵活性 // log 和 //    log 都行
        const value = comments[i].innerHTML.replace(/ /g, '')
        if (value === '//log') {
          flag = 'log'
          log(that, index)
          listenLoggerClick()
          break
        }
        if (value === '//log-async') {
          flag = 'log-async'
          logAsync(that, index)
          listenLoggerClick()
          break
        }
        if (value === '//no-log') {
          flag = 'no-log'
          noLog(that)
          break
        }
        if (value === '//run') {
          flag = 'run'
          run(that)
          break
        }
        // 没有魔法函数，仅展示代码
        // do nothing
      }
    }
  )
}

