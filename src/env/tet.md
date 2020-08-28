```html
<!-- log -->
<section>
  <div id="app">
    <h1 style="text-align: center">简易版本的Markdown编辑器</h1>
    <el-row>
      <el-col :span="12" id="left-container">
        <pre id="markdown"><code class="markdown"></code></pre>
        <pre id="input"><code contenteditable="true" class="markdown" @input="handleInput">{{ articleMd}}</code></pre>
      </el-col>
      <el-col :span="12" id="right-container">
        <el-card>
          <div id="output_html"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</section>
<script>
```
