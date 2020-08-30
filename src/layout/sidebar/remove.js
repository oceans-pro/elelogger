/**
 * 减少无用HTML标签，这是基于无障碍阅读的考虑
 */
function remove() {
  $('#blog-calendar').remove()
  $('#sidebar_recentposts').remove()
  $('#sidebar_ad').remove()
  $('#sidebar_scorerank').remove()
  $('#sidebar_categories').remove()
  $('#sidebar_recentcomments').remove()
  $('#sidebar_topviewedposts').remove()
  $('#sidebar_topcommentedposts').remove()
  $('#sidebar_topdiggedposts').remove()
}

remove()
