let $a_list = $('#EntryTag a')
$a_list.each(function() {
  const text = $(this).text()
  if (/^_/.test(text)) {
    $(this).text($(this).text().substring(1))
  }
})
