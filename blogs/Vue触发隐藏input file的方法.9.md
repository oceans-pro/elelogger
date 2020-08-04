Vue触发隐藏input file的方法
1、使用input透明覆盖法

　　将input的z-index设置为1以上的数字并覆盖到需点击的内容上，将input的样式opacity设置为0（即为透明度为0），这样通过绑定在input上的change事件触发     ----推荐
```html
<p class="uploadImg">
    <input type="file" @change="picUpload($event)" accept="image/*" />
</p>
```
```less
.uploadImg {
    width: 100%;
    height: 1.46rem;
    position: relative;

    input {
      width: 1.46rem;
      height: 100%;
      z-index: 1;
      opacity: 0;
      position: absolute;
      cursor: pointer;
    }
}
```
 

2、使用vue的ref参数直接操作input的点击事件触发
```html
<div class="upload-btn-box">
　 <Button @click="choiceImg" icon="ios-cloud-upload-outline" type="primary">点击上传</Button>
   <input ref="filElem" type="file" class="upload-file" @change="getFile">
</div>
choiceImg(){
    this.$refs.filElem.dispatchEvent(new MouseEvent('click')) 
},
getFile(){
    console.log("成功");
}
```
3、使用HTML的lable机制触发input事件

```html
<label for="upfile" class="pTitleRight" @click="IDRecognition">
<span>身份证识别</span>
    <i class="iconfont">&#xe612;</i>
    <input ref="filElem" type="file" accept="image/*" id="upfile" name="upfile" style="display: none;" @change="uploadPic">
</label>
```

```js

```
　　lable上的for属性绑定input的id,即可通过触发lable上的点击事件触发input的change事件    ----推荐



elementUI踩坑
1.滚动条消失,body中莫名出现行内样式overflow: hidden;

在做某个图片上传,显示功能出现的问题.控制台并没有报错,代码也并无相关操作
必须重新刷新页面之后滚动条才会显示出来

几天后才发现是内置图片组件 <el-image> 的问题,只要点击图片组件 <el-image> 就会出现滚动条消失

这是element-ui 的 el-image的bug

源码可以看到 在打开的时候给整个组建添加了click事件 被点击就把body.overflow="hidden" , 但是只有在"closeViewr" 关闭预览的事件中才取消 如果没有开启预览功能 那么这个overflow就一直是hidden

JMxa79.png

解决方法:

将所有图片组件 ** ** 更换成原生 ** **
自己关闭dialog的事件中添加over-flow="auto"解决

**参考文章**
> [1][Vue触发隐藏input file的方法](https://www.cnblogs.com/wangjishu/p/11350999.html)
> [2][elementUI踩坑](https://www.cnblogs.com/lenghaha/p/12726513.html)
