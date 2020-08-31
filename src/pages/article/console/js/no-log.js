export default function noLog(that) {
  try {
    window.eval($(that).text())
  } catch (e) {
    window.console.error('eval报错了 => no-log')
    window.console.error(e)
  }
}
