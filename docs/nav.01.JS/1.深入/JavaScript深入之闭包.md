# 什么是闭包？

即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
在代码中引用了自由变量


makeAdder 函数已从执行栈弹出，但是生成了 close scope , add5函数进入进行栈就可以访问到  close scope 的 变量
```js
var count = 0
function makeAdder(x) {
  return function inner(y) {
    return x + y
  }
}

var add5 = makeAdder(5)
count += add5(2)
```

我们先来看一个必考题

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i)
  }, 2000)
}
console.log(i)
//控制台打印
3
3
3
```

一开始栈会创建全局执行上下文 打印 3 ，因为 seTimeout 是宏任务，会进入任务队列里面，等执行栈清空后才执行，所以定时器里面的执行时间实际是`大于2秒的`

怎么改造成闭包呢？

```js
for (var i = 0; i < 3; i++) {
  var func = function(i) {
    setTimeout(function() {
      console.log(i)
    }, 2000)
  }
  func(i)
}
console.log(i)
//控制台打印
3
0
1
2
```
