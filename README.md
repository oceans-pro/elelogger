# eleBlog：一款简洁明快的博客园主题

[主题首页](https://www.cnblogs.com/oceans/p/ele.html)

## 项目目录介绍

运行如下命令得到文件树

```shell script
npm install -g tree-node-cli
treee -L 3 -I "node_modules|.idea|.vscode|blogs|.git" -a --dirs-first > out.txt
```

```sh
cnblog
├── build # 构建用的脚本
│   ├── delete.js # 删除dist的缓存
│   ├── secret.js # 相关密钥
│   └── upload-static.js # 上传到七牛云
├── dist
│   ├── bundle.js
│   ├── bundle.js.map
│   ├── index.html
│   ├── main.css
│   └── main.css.map
├── src
│   ├── config # 配置文件，后期可配置更为自由的主题
│   ├── init # 初始加载
│   ├── layout # 路由无关的 View
│   ├── pages # 路由相关 View
│   ├── scss # 路由无关的样式
│   ├── static # 静态资源，如vscode主题
│   ├── store # 全局函数
│   ├── upload # 需要复制到博客园后台的代码
│   ├── index.js
│   └── style.scss # 全局样式
├── test # 测试用例
├── package-lock.json
├── package.json
├── README.md
└── webpack.config.js
```

## 项目进展

本主题功能已经实现，但代码仍需继续完善。下一步的工作如下
- 将`src/scss`中的内容重构到`scr/layout`文件夹中
