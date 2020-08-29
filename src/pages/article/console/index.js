import './_console.scss'
import addConsoleAfterJavascriptDemo from './js'
import addPreviewAfterHtmlDemo from './html'
import {getHtmlStrByValue} from './util'

window.fn = window.fn || {}
window.fn.log = console.log
window.fn.error = console.error
window.fn.getHtmlStrByValue = getHtmlStrByValue

$(document).on('loadAllScriptFinish', function() {
  addConsoleAfterJavascriptDemo() // 后执行
})
addPreviewAfterHtmlDemo() // 先执行

