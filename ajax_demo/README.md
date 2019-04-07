# ajax demo

## 以下是操作步骤日志

### step1

```s
    # 创建一个名为ajax_demo的文件夹
    $ mkdir ajax_demo
```

### step2

> 创建一个 app.js 文件
> 搭建一个 node 服务器

```js
// app.js
// 第一：引入express 模块
const express = require('express');

// 第二：create app
const app = express();

// 第三：监听8888端口号
app.listen(8888, () => {
    console.log('Server is running localhost:8888');
});
```

### step3

> 创建一个 package.json 文件，用于保存项目版本、依赖关系等。
> 在当前目录使用命令提示符命令创建 npm init 或者手动创建。

```s
    $ npm init
```

> 生成的 package.json 文件

```json
// package.json
{
    "name": "ajax",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "express": "^4.16.4"
    }
}
```

### step4

> 建立项目依赖
> 在当前目录下安装 express

```s
    $ npm install express --save
    # --save 修饰过后，该模块名称和版本号会记录在 package.json 中的 dependencies 对象中，代表的是该模块是需要在生产环境中用到的。
    # --save-dev 将模板安装在当前开发项目，使用该命令会自动将模块的名称和版本号添加到 package.json 中的 devdependencies 部分，是使用该命令，需要手动进行添加完成之后，项目文件夹中会出现两个内容 package.json 文件和 node_mudules.json 文件夹。
```

> 运行项目

```s
    $ node app.js  # 可以使用nodemon替代node 命令 即：nodemon app.js
```
