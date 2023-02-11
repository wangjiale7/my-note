# GC 即 Garbage Collection （垃圾回收）

垃圾回收机制，它主要针对一些程序中不再使用的对象，对其清理回收释放掉内存。

垃圾回收策略
---
* 标记清除算法
* 引用计数算法

## 标记清除算法

缺点

标记清除算法有一个很大的缺点，就是在清除之后，剩余的对象内存位置是不变的，也会导致空闲内存空间是不连续的，出现了 内存碎片（如下图），并且由于剩余空闲内存不是一整块，它是由不同大小内存组成的内存列表，这就牵扯出了内存分配的问题

<img src='https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/12247ac3d8f249a5ab85b9b40ba1147b~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp'>

标记整理（Mark-Compact）算法解决上述问题

会将活着的对象（即不需要清理的对象）向内存的一端移动，最后清理掉边界的内存（如下图）
<img src='https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c04b0a5a40084e0ba4550500c57f2270~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp'>


## 引用计数算法


缺点

引用计数的缺点想必大家也都很明朗了，首先它需要一个计数器，而此计数器需要占很大的位置，因为我们也不知道被引用数量的上限，还有就是无法解决`循环引用`无法回收的问题，这也是最严重的



V8对GC的优化
---

1. 分代式垃圾回收
V8 整个堆内存的大小就等于新生代加上老生代的内存（如下图）
新生代的对象就是新产生的对象，通常只支持 1～8M 的容量，而老生代的对象为存活事件较长或常驻内存的对象
<img src='https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/abae5b06648a40d2aaa453b5d8a83939~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp'>
2. 并行回收(Parallel)
JavaScript 是一门单线程的语言，它是运行在主线程上的，那在进行垃圾回收时就会阻塞 JavaScript 脚本的执行，需等待垃圾回收完毕后再恢复脚本执行

开启多个辅助线程，同时执行同样的回收工作
<img src='https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0eef6c0d3bd49659a564fe698d17f43~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp'>





内存泄漏
---
因为不是所有无用对象内存都可以被回收的，那当不再用到的对象内存，没有及时被回收时，我们叫它 内存泄漏`（Memory leak）`。



常见内存泄漏
---
1. 不正当的闭包
```js
function fn2(){
  let test = new Array(1000).fill('isboyjc')
  return function(){
    console.log(test)
    return test
  }
}
let fn2Child = fn2()
fn2Child()
```
因为 return 的函数中存在函数 fn2 中的 test 变量引用，所以 test 并不会被回收，也就造成了内存泄漏。
解决
```js
function fn2(){
  let test = new Array(1000).fill('isboyjc')
  return function(){
    console.log(test)
    return test
  }
}
let fn2Child = fn2()
fn2Child()
fn2Child = null
```
2. 全局变量
对于全局变量，垃圾回收器很难判断这些变量什么时候才不被需要，所以全局变量通常不会被回收
```js
function fn(){
  // 没有声明从而制造了隐式全局变量test1
  test1 = new Array(1000).fill('isboyjc1')
  
  // 函数内部this指向window，制造了隐式全局变量test2
  this.test2 = new Array(1000).fill('isboyjc2')
}
fn()
```
3. 游离DOM引用

4. 遗忘的定时器

5. 遗忘的事件监听器
```js
 window.addEventListener("resize", this.doSomething)
window.removeEventListener("resize", this.doSomething)


eventBus.on("test", this.doSomething)
eventBus.off("test", this.doSomething)
```

6. Map 和 Set

可以采用 WeakMap 弱引用 优化，不会增加引用计数

7. 未清理的Console输出
 