```html
<div id="oceans-local">
    <div v-html='word'></div>
    <el-button>按钮</el-button>
</div>
<body onload="markdownCallback(function() {
 new Vue({
    el: '#oceans-local',
    data: {
        word: 'hello wor'
    },
    // 当然，使用 template也可
    // template: `<div>
    //     <div v-html='word'></div>
    //     <el-button>按钮</el-button>
    //  </div>`,
    created() {
      let that = this
      console.log('local')
      $.ajax({
        url: 'https://100jiancai.cn/api/public/info/introduction',
        method:'get',
        success: function(data) {
          that.word = data.data.html
        }
      })
    }
  })
})">
</body>
```

<div id="oceans-local">
    <div v-html='word'></div>
    <el-button style="width: 100%;">按钮</el-button>
</div>
<body onload="markdownCallback(function() {
 new Vue({
    el: '#oceans-local',
    data: {
        word: 'hello wor'
    },
    created() {
      let that = this;
      console.log('local');
      $.ajax({
        url: 'https://100jiancai.cn/api/public/info/introduction',
        method:'get',
        success: function(data) {
          that.word = data.data.html
        }
      })
    }
  })
})">
</body>
