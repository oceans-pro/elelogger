require('./_comment.scss')
require('./_comment_avatar.scss')
require('./_comment_textarea.scss')
/**
 * 每一个.feedbackItem都有头像的信息，但是博客园默认的皮肤都不显示而已...
 */
setTimeout(function() {
  g.ajaxStorage.forEach(item => {
        if (item.option.url.indexOf('GetComments') > -1) {
          $.each($('.feedbackItem'), function(index, ele) {
            const $ele = $(ele)
            const obj = $ele.find('.blog_comment_body')
            const id = obj.attr('id').split('_')[2] // 评论人的id
            const $blog = $ele.find('a[id^="a_comment_author"]')
            const blogUrl = $blog.attr('href') // 评论人的主页url
            const imgSrc = $('#comment_' + id + '_avatar').html() ||
                'http://pic.cnblogs.com/avatar/simple_avatar.gif' // 评论人的头像
            $ele.prepend('<a href="' + blogUrl + '"><img src="' + imgSrc + '" style="float:left;"' +
                ' class="comment_avatar"></a')
            $('.feedbackListSubtitle').addClass('feedbackListSubtitle_right')
            $('.feedbackCon').addClass('feedbackCon_right')
          })
        }
      }
  )
}, 1000)

