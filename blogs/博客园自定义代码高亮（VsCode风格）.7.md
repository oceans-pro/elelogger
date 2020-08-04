本文介绍如何设置本博客的代码颜色主题（VSCode 主题）。

## 使用原因

- 虽然 Atom one dark 也很好看，但是代码一片红总感觉不好，像是有 Bug 一样

  ![AtomOneDark 主题](images\1596534496274.png)

- 微软的 VS-2015 代码高亮风格（VsCode 的默认主题）比较符合我的审美

- 在 Idea 中，VsCode 主题插件可以对**类**和**接口**的颜色进行区分（深绿和暗绿），增强认知反馈、减少认知时间，如下图

  ![VsCode 主题](images\1596534496648.png)

## 操作方法

- 只要在 博客设置 → 页面定制 CSS 代码中加入这段 CSS 即可。
- 如果你不喜欢本主题，也可以去`highlight.js`下载你喜欢的。
  - 预览网址 https://highlightjs.org/static/demo/
  - 下载网址 https://github.com/highlightjs/highlight.js/tree/master/src/styles

## 代码实现

<!-- For WebStorm hints: npm install element-ui -D && use .vue to write -->
<body onload="useVue()"></body>
<div id="markdown-vue">
  <el-row>
    <el-col :span="isMobile?24:8">
      <el-button type="primary"
                 style="width:100%;"
                 :class="codeTheme!=='vscode'?'is-plain':''"
                 @click="markdownCallback(_=>{
          codeTheme = 'vscode'
          $('link[title=code-theme]').remove()
          $('head').append(`<link title='code-theme' type='text/css' rel='stylesheet' href='https://blog-static.cnblogs.com/files/oceans/vscode.css'>`)
       })">
        切换到 vscode 主题
      </el-button>
    </el-col>
    <el-col :span="isMobile?24:8">
      <el-button type="primary"
                 style="width:100%;"
                 :class="codeTheme!=='atom'?'is-plain':''"
                 @click="markdownCallback(_=>{
          codeTheme = 'atom'
          $('link[title=code-theme]').remove()
          $('head').append(`<link title='code-theme' type='text/css' rel='stylesheet' href='https://blog-static.cnblogs.com/files/oceans/atom.css'>`)
       })">
        切换到atom主题
      </el-button>
    </el-col>
    <el-col :span="isMobile?24:8">
      <el-button type="primary"
                 style="width:100%;"
                 :class="codeTheme!=='solarized'?'is-plain':''"
                 @click="markdownCallback(_=>{
            codeTheme = 'solarized'
            $('link[title=code-theme]').remove()
            $('head').append(`<link title='code-theme' type='text/css' rel='stylesheet' href='https://blog-static.cnblogs.com/files/oceans/solarized.css'>`)
         })">
        切换到solarized light主题
      </el-button>
    </el-col>
  </el-row>
  <div style="height:10px;"></div>
</div>


```java
/**
 * @author John Smith <john.smith@example.com>
*/
package l2f.gameserver.model;

public abstract strictfp class L2Char extends L2Object {
  public static final Short ERROR = 0x0001;

  public void moveTo(int x, int y, int z) {
    _ai = null;
    System.out.println("Should not be called");
    if (1 > 5) { // wtf!?
      return;
    }
  }
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

```js
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1) return process(block, true, 0x0f) + ` class="${cls}"`
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined) console.log('undefined')
  }
}
```

```html
<div id="markdown-vue">
  <el-button
    style="width:100%;"
    @click="markdownCallback(_=>{
    if (markdownData === 'atom') {
       markdownData = 'vs2015'
      $('head').append(`<link title='vs2015' type='text/css' rel='stylesheet' href='https://blog-static.cnblogs.com/files/oceans/vs2015-code.css'>`)
    } else {
      $('link[title=vs2015]').remove()
      markdownData = 'atom'
    }
  })"
  >
    <span v-if="markdownData=='atom'">点我切换代码主题（目前主题为 atom)</span>
    <span v-else>点我切换代码主题（目前主题为 vs-2015)</span>
  </el-button>
</div>
```

**你可以直接复制下面代码到你的自定义 CSS 处**

```css
/*
 * Visual Studio 2015 dark style
 * Author: Nicolas LLOBERA <nllobera@gmail.com>
 */

.hljs {
  display: block !important;
  overflow-x: auto !important;
  padding: 0.5em !important;
  background: #1e1e1e !important;
  color: #dcdcdc !important;
}

.hljs-keyword,
.hljs-literal,
.hljs-symbol,
.hljs-name {
  color: #569cd6 !important;
}
.hljs-link {
  color: #569cd6 !important;
  text-decoration: underline !important;
}

.hljs-built_in,
.hljs-type {
  color: #4ec9b0 !important;
}

.hljs-number,
.hljs-class {
  color: #b8d7a3 !important;
}

.hljs-string,
.hljs-meta-string {
  color: #d69d85 !important;
}

.hljs-regexp,
.hljs-template-tag {
  color: #9a5334 !important;
}

.hljs-subst,
.hljs-function,
.hljs-title,
.hljs-params,
.hljs-formula {
  color: #dcdcdc !important;
}

.hljs-comment,
.hljs-quote {
  color: #57a64a !important;
  font-style: italic !important;
}

.hljs-doctag {
  color: #608b4e !important;
}

.hljs-meta,
.hljs-meta-keyword,
.hljs-tag {
  color: #9b9b9b !important;
}

.hljs-variable,
.hljs-template-variable {
  color: #bd63c5 !important;
}

.hljs-attr,
.hljs-attribute,
.hljs-builtin-name {
  color: #9cdcfe !important;
}

.hljs-section {
  color: gold !important;
}

.hljs-emphasis {
  font-style: italic !important;
}

.hljs-strong {
  font-weight: bold !important;
}

.hljs-bullet,
.hljs-selector-tag,
.hljs-selector-id,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #d7ba7d !important;
}

.hljs-addition {
  background-color: #144212 !important;
  display: inline-block !important;
  width: 100% !important;
}

.hljs-deletion {
  background-color: #600 !important;
  display: inline-block !important;
  width: 100% !important;
}
```
