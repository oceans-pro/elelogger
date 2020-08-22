import initOrToggleTheme from '@/store/float-btn-controller/theme'
import initOrToggleSidebar, {showSide, showContent} from '@/store/float-btn-controller/sidebar'
import initOrToggleCodeColor from '@/store/float-btn-controller/color'
import {toggleFullScreen, toggleWideMode} from '@/store/float-btn-controller/fullscreen-and-widemode'

/**
 * 挂到window上的函数
 * 对于<a href="javascript:fn()">
 * 只能暂时采取这种方式
 */
window.initOrToggleTheme = initOrToggleTheme
window.initOrToggleCodeColor = initOrToggleCodeColor
window.initOrToggleSidebar = initOrToggleSidebar
window.showSide = showSide
window.showContent = showContent
window.toggleFullScreen = toggleFullScreen
window.toggleWideMode = toggleWideMode
