import sidebarNotifyConfig from '@/config/sidebar-notify'

$(function() {
  $('#blog-news').prepend(`
<!-- 为了还是避免冲突，样式名还是复杂一些 -->
<div class="sidebar-container-notify"">
    <img
     class="sidebar-avatar"
     src="${sidebarNotifyConfig.avatar}"
    >
    <div class="sidebar-avatar-tip">↗↗点击头像关注我</div>
    <div>这个博主很懒，什么都没有写~</div>
</div>
<style>
.sidebar-container-notify{
  display: flex; 
  flex-direction: column;
  align-content: center;
}
.sidebar-avatar{
  margin: 0 auto;
  border-radius: 50%;
  width: 50%;
  
}
.sidebar-avatar:hover{
  cursor: pointer;
}
.sidebar-avatar-tip{
  text-align: center;
  font-size:12px;
}
</style>
<script>
  /*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                 拦截首页
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
  var routePath = window.location.pathname
  if (routePath === '/oceans/' ||
      routePath === '/oceans' ||
      routePath === '/oceans/default.html') {
    $('.sidebar-avatar-tip').remove()
    $('.sidebar-avatar').click(function() {
      window.location.href = 'https://home.cnblogs.com/u/oceans/'
    })
  }
  /*+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
                                                   随笔页
  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-*/
  else {
    var $first = $('#author_profile_follow a')
    if ($first.text()==='取消关注'){
      $('.sidebar-avatar-tip').hide()
    }
    if ($('#author_profile_follow').html().trim()===''){
      $('.sidebar-avatar-tip').remove()
    }
    $('.sidebar-avatar').click(function() {
      var $a = $('#author_profile_follow a')
      var $span = $('#author_profile_follow span')
      $('body').append('<span id="temp"></span>')
      var vue = new Vue({
        el: '#temp'
      })
      if ($a.text()==='+加关注'){
        $a.trigger('click')
        vue.$message({
          message:'关注成功',
          type:'success'
        })
        $('.sidebar-avatar-tip').hide()
        return
      }
      if ($a.text()==='取消关注'){
        $a.trigger('click')
        return
      }
      if ($span.text()==='取消成功'){
         vue.$message({
          message:'你已经取消关注过了',
          type:'success'
        })
        return
      }
      if ($span.text()==='关注成功'){
        vue.$message({
          message:'你已经关注过了',
          type:'success'
        })
        return
      }
      else {
        window.location.href = 'https://home.cnblogs.com/u/oceans/'
        return
      }
    })
  }
</script>
`)
})
