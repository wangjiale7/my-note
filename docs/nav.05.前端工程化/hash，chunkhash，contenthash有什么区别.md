# hash，chunkhash，contenthash有什么区别
## 场景
Webpack中hash、chunkhash和contenthash主要与浏览器缓存行为有关。 浏览器在初次请求服务端资源的时候，服务器给JS、CSS和图片等资源一个较长的缓存时间，我们通过给资源名称增加hash值来控制浏览器是否继续使用本地缓存。

## 定义
hash：表示所有文件哈希值相同，如果任意文件内容发生变化，则再次打包后，所有哈希值均改变且相同。即当任意module发生改变时，所有bundle的hash都改变且相同

chunkhash：根据不同的入口文(Entry)进行依赖文件解析，构建对应的chunk，生成对应的哈希值。也就是同一个入口使用同一个hash

contenthash：contenthash是针对文件内容级别的，只有你自己模块的内容变了，那么hash值才改变，所以我们可以通过contenthash解决上诉问题


hash
---
```js
output: {
    filename: "[name].[hash:8].js" // hash => chunkhash
  }
```

chunkhash
---
```js
output: {
    filename: "[name].[chunkhash].js" // hash => chunkhash
  }
```

contenthash
---
```js
output: {
    filename: "[name].[contenthash].js" // hash => chunkhash
  }
```