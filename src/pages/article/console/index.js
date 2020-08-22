import './_console.scss'
import addConsoleAfterJavascriptDemo from './add-console'

window.fn = window.fn || {}
window.fn.log = console.log
addConsoleAfterJavascriptDemo()
