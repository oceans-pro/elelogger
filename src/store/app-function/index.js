import isMobile from '@/store/app-function/mobile'
import clearForHelloPage from '@/store/app-function/clear'
import invoke from '@/store/app-function/cb'
import alert from '@/store/app-function/alert'
import './jquery-function-extend'

/**
 * 借助body的onload调用JS
 * @param cb
 */
window.fn = window.fn || {}
window.fn.invoke = invoke
window.fn.isMobile = isMobile
window.fn.clearForHelloPage = clearForHelloPage
window.fn.alert = window.alert = alert
