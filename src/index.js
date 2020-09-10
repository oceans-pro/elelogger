require('./scss')
window.g.isBundleJSCome = true
console.log('bundle.js开始执行')
let start = new Date().getTime()
/*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 导入
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
require('@/store')  // 函数
require('@/init') // 调用函数
require('@/layout') // 路由无关
require('@/pages') // 路由相关
let end = new Date().getTime()
console.log('bundle.js执行结束')
console.log('共用时' + (end - start) / 1000 + '秒')
