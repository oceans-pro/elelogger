import './_console.scss'
import addConsoleAfterJavascriptDemo from './js'
import addPreviewAfterHtmlDemo from './html'
import {getHtmlStrByValue} from './util'

window.fn = window.fn || {}
window.fn.log = console.log
window.fn.error = console.error
window.fn.warn = console.warn()
window.fn.getHtmlStrByValue = getHtmlStrByValue

addPreviewAfterHtmlDemo()
addConsoleAfterJavascriptDemo()
