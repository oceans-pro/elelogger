export default function(that) {
  try {
    window.eval($(that).text())
  } catch (e) {
    window.console.error('eval报错了 => run')
    window.console.error(e)
  }
  $(that).parents('.copyItem').remove()
}
