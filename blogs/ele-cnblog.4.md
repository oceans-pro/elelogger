<!--  css works! -->
<style>
  #highlights {
    /* background-color: #fff; */
    font-size: 14px;
  }

  #highlights .inner {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  #highlights .point div {
    color: #409EFF;
    font-size: 1.5em;
    font-weight: 400;
    margin: 0;
    padding: 0.5em 0;
  }

  #highlights .point p {
    /* color: #4f5959; */
  }


  #highlights .point {
    width: 33%;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 2em;
  }

  @media screen and (max-width: 600px) {
    #highlights .point {
      display: block;
      margin: 0 auto;
      width: 300px;
      padding: 0 40px 30px;
    }
  }
</style>
<!-- For WebStorm hints: npm install element-ui -D && use .vue to write -->
<h1 style="display:none" title="SEO">ele-cnblog 一款使用了ElementUI的博客园主题</h1>
<body onload="useVue({created:function() {
  window.clearForHelloPage()
}})"></body>
<div id="markdown-vue">

  <h2>主题特点</h2>
  <div id="highlights">
    <div class="inner">
      <div class="point">
        <div>生态</div>
        <p>自带博客园的用户习惯和SEO效果。采用目前最主流（使用人数最多）的Web前端框架Vue和前端UI框架ElementUI，适配移动端。
        </p>
      </div>
      <div class="point">
        <div>易用</div>
        <p>仅需要在页脚HTML插入代码，如果你喜欢折腾，本博客也提供对应源码和注释，基于Webpack模块化开发，方便管理和修改。
        </p>
      </div>
      <div class="point">
        <div>灵活</div>
        <p>可以选择性地在Markdown中使用Vue语法、ElementUI的标签。可以调用后台接口让你的博客自动更新。相关文档齐教你如何配置</p>
      </div>
      <div class="point">
        <div>专注</div>
        <p>
          本博客主题专注于写作，内置精心挑选的代码高亮主题任你切换，左侧侧边栏让你随时把握阅读进度，交互效果人性化。
        </p>
      </div>
    </div>
  </div>
</div>

## 如何使用
你仅需要三步就可以使用本主题（即使你一点都不了解Web前端）
1. 申请JS权限（申请理由填“美化博客园主题”）
2. 在[设置界面](https://i.cnblogs.com/settings)中选择博客皮肤为 `Custom`
3. 在`页脚 HTML 代码`处复制如下代码
```html
<!-- 复制下面内容到cnblog的 页脚HTML代码 处 -->
<!--********************************************* CSS ***********************************************-->
<link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/mdui/1.0.0/css/mdui.min.css">
<link rel="stylesheet" href="https://cdn.bootcss.com/fancybox/3.5.7/jquery.fancybox.css">
<link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/theme-chalk/index.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css">
<script>
  // 防止七牛云缓存，增加时间戳
  var href = 'https://oceans.100jiancai.cn/main.css?time=' + new Date().getTime()
  $('head').append('<link rel="stylesheet" href="' + href + '">')
</script>
<!--********************************************* JavaScript ***********************************************-->
<!-- Vue, 请注意在开发时切换为Vue的Debug版本 -->
<!--<script src="https://cdn.jsdelivr.net/npm/vue"></script>-->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<!-- UI框架 -->
<script src="https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/index.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/mdui/1.0.0/js/mdui.min.js"></script>
<!-- cookie -->
<script src="https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.js"></script>
<!-- 组件美化 -->
<script src="https://cdn.bootcss.com/clipboard.js/2.0.4/clipboard.min.js"></script>
<script src="https://cdn.bootcss.com/fancybox/3.5.7/jquery.fancybox.js"></script>
<script src="https://blog-static.cnblogs.com/files/oceans/sidebar.js"></script>
<script src="https://blog-static.cnblogs.com/files/oceans/scrollbar.js"></script>
<!-- 表情评论 -->
<script src="https://blog-static.cnblogs.com/files/oceans/owo.js"></script>
<!-- 站长统计，请切换为你自己的 -->
<div style="display: none;">
  <script type="text/javascript" src="https://s9.cnzz.com/z_stat.php?id=1279140987&web_id=1279140987"></script>
</div>
<script>
  // IIFE
  (function() {
    // \script需要加转义
    var src = 'https://oceans.100jiancai.cn/bundle.js?time=' + new Date().getTime()
    $('head').append('<script type="text/javascript" src="' + src + '"><\/script>')
  })()
</script>
<!--*********************************************
说明：
1. 目前main.css和bundle.js均为动态导入的，放在七牛云中。
2. 这样做的好处是：方便开发：利用node脚本一键部署，不必每次改完代码都要在博客园页脚处复制一次。
3. 这样做的坏处是：CSS加载时间延后，如果你网速很慢，初始加载页面效果不佳
4. 解决方法也很简单，当你确定不再有开发（自定义）需求时，将 main.css的内容直接复制到页面定制 CSS 代码 处即可（https://i.cnblogs.com/settings）
***********************************************-->
```
如果你有二次开发的需求，可以下载本博客的源码版本。

<div class="source-download">
	<div class="source-type zip">
	</div>
	<div class="source-info">
		<p>Next.rar</p>
		<p>version:2020-07-10</p>
	</div>
	<div class="download-btn">
		<a href="https://files.cnblogs.com/files/gshang/Cnblog-Theme-Next.rar"></a>
	</div>
</div>
