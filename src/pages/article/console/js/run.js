export default function(that) {
  window.eval($(that).text())
  $(that).parents('.copyItem').remove()
}
