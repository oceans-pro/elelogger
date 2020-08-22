export default function clearForHelloPage() {
  $(`h1.postTitle,
  div.postTitle,
  div.postDesc,
  div#blog_post_info_block,
  div#comment_form_container,
  div#comment_form.commentform,
  #Header1_HeaderTitle`).hide()
}
