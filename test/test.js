let str = `\`\`\`es6
<span class="hljs-keyword">new</span> Vue({
  <span class="hljs-attr">name</span>: <span class="hljs-string">'progress'</span>,
  <span class="hljs-attr">el</span>: <span class="hljs-string">'#progress-container'</span>,
  <span class="hljs-attr">template</span>: <span class="hljs-string">\`
    &lt;section&gt;
      &lt;el-row style="margin-bottom: 10px;"&gt;
        &lt;el-col :span="12"&gt;
          &lt;el-button
                  style="width: 100%;"
                  icon="el-icon-sunny"
                  type="primary"
                  :disabled="disabled"
                  @click="handleClick(1)"&gt;
            奥里给！
          &lt;/el-button&gt;
        &lt;/el-col&gt;
        &lt;el-col :span="12"&gt;
          &lt;el-button
                  style="width: 100%;"
                  icon="el-icon-light-rain"
                  type="danger"
                  :disabled="!disabled"
                  @click="handleClick(0)"&gt;
            不奥里给！
          &lt;/el-button&gt;
        &lt;/el-col&gt;
      &lt;/el-row&gt;
      &lt;el-row&gt;
        &lt;el-col v-for="(item, index) in arr" :key="index" :span="6" style="text-align: center"&gt;
          &lt;el-progress
                  type="dashboard"
                  :percentage="item.num"
                  :status="item.status"
                  :color="item.color"
          &gt;
          &lt;/el-progress&gt;
        &lt;/el-col&gt;
      &lt;/el-row&gt;
    &lt;/section&gt;\`</span>,
  <span class="hljs-attr">data</span>: {
    <span class="hljs-attr">arr</span>: [],
    <span class="hljs-attr">arr0</span>: [
      { <span class="hljs-attr">num</span>: <span class="hljs-number">5</span>, <span class="hljs-attr">status</span>: <span class="hljs-string">'exception'</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">'#f56c6c'</span> },
      { <span class="hljs-attr">num</span>: <span class="hljs-number">25</span>, <span class="hljs-attr">status</span>: <span class="hljs-string">'warning'</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">'#e6a23c'</span> },
      { <span class="hljs-attr">num</span>: <span class="hljs-number">50</span>, <span class="hljs-attr">status</span>: <span class="hljs-literal">null</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">''</span> },
      { <span class="hljs-attr">num</span>: <span class="hljs-number">75</span>, <span class="hljs-attr">status</span>: <span class="hljs-literal">null</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">'#13ce66'</span> },
    ],
    <span class="hljs-attr">arr1</span>: [
      { <span class="hljs-attr">num</span>: <span class="hljs-number">25</span>, <span class="hljs-attr">status</span>: <span class="hljs-string">'exception'</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">'#e6a23c'</span> },
      { <span class="hljs-attr">num</span>: <span class="hljs-number">50</span>, <span class="hljs-attr">status</span>: <span class="hljs-literal">null</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">'#20a0ff'</span> },
      { <span class="hljs-attr">num</span>: <span class="hljs-number">75</span>, <span class="hljs-attr">status</span>: <span class="hljs-literal">null</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">'#13ce66'</span> },
      { <span class="hljs-attr">num</span>: <span class="hljs-number">100</span>, <span class="hljs-attr">status</span>: <span class="hljs-string">'success'</span>, <span class="hljs-attr">color</span>: <span class="hljs-string">'purple'</span> },
    ],
  },
  created() {
    <span class="hljs-keyword">this</span>.arr = <span class="hljs-keyword">this</span>.arr0
    <span class="hljs-keyword">this</span>.disabled = <span class="hljs-literal">false</span>
  },
  <span class="hljs-attr">methods</span>: {
    handleClick(flag) {
      <span class="hljs-keyword">this</span>.disabled = !<span class="hljs-keyword">this</span>.disabled
      <span class="hljs-keyword">if</span> (flag) {
        <span class="hljs-keyword">this</span>.arr = <span class="hljs-keyword">this</span>.arr1
      } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">this</span>.arr = <span class="hljs-keyword">this</span>.arr0
      }
    },
  },
})
\`\`\``

str = str.replace(/&lt;/gm, '<')
str = str.replace(/&gt;/gm, '>')
console.log(str)
