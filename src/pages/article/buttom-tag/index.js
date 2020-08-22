let $a = $('#EntryTag a')
const text = $a.text()
if (/\$/.test(text)) {
  $a.text($a.text().substring(1))
}
