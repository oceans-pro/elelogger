import './_console.scss'
import addConsoleAfterJavascriptDemo from './js-console'
import addPreviewAfterHtmlDemo from '@/pages/article/console/html-preview'
import {getHtmlStrByValue} from '@/pages/article/console/util'

window.fn = window.fn || {}
window.fn.log = console.log
window.fn.error = console.error
window.fn.warn = console.warn()
window.fn.getHtmlStrByValue = getHtmlStrByValue

addPreviewAfterHtmlDemo()
addConsoleAfterJavascriptDemo()
