import './_console.scss'
import addConsoleAfterJavascriptDemo from './js-console'
import addPreviewAfterHtmlDemo from '@/pages/article/console/html-preview'
window.fn = window.fn || {}
window.fn.log = console.log
addConsoleAfterJavascriptDemo()
addPreviewAfterHtmlDemo()
