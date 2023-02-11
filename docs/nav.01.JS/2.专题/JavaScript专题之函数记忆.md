
# 函数记忆
定义
---
函数记忆是指将上次的计算结果缓存起来，当下次调用时，如果遇到相同的参数，就直接返回缓存中的数据。


```js
function memoize(fn) {
    var cache = {}
    return function() {
        var key = arguments.length + '' + [].join.call(arguments, ",")
        if (key in cache) {
            return cache[key]
        }  else {
            return  cache[key] = fn.apply(this, arguments)
        }
    }
}

//测试

var add = function(a, b, c) {
  return a + b + c
}

var memoizedAdd = memoize(add)

console.time('use memoize')
for(var i = 0; i < 100000; i++) {
    memoizedAdd(1, 2, 3)
}
console.timeEnd('use memoize')

console.time('not use memoize')
for(var i = 0; i < 100000; i++) {
    add(1, 2, 3)
}
console.timeEnd('not use memoize')

```

在 Chrome 中，使用 memoize 大约耗时 60ms，如果我们不使用函数记忆，大约耗时 1.3 ms 左右。

我们使用了看似高大上的函数记忆，结果却更加耗时，这个例子近乎有 60 倍呢！

所以，函数记忆也并不是万能的，你看这个简单的场景，其实并不适合用函数记忆。


函数记忆只是一种编程技巧，本质上是**牺牲算法的空间复杂度以换取更优的时间复杂度**，在客户端 JavaScript 中代码的执行时间复杂度往往成为瓶颈，因此在大多数场景下，这种牺牲空间换取时间的做法以提升程序执行效率的做法是非常可取的

## 结论
表明一种使用的场景，也就是如果需要大量重复的计算，或者大量计算又依赖于之前的结果，便可以考虑使用函数记忆。而这种场景，当你遇到的时候，你就会知道的。