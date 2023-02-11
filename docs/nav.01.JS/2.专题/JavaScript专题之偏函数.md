# 偏函数

## 含义
在计算机科学中，局部应用是指固定一个函数的一些参数，然后产生另一个更小元的函数。

什么是元？元是指函数参数的个数，比如一个带有两个参数的函数被称为二元函数。

也叫"局部应用”


柯里化与局部应用
---
柯里化是将一个多参数函数转换成多个单参数函数，也就是将一个 n 元函数转换成 n 个一元函数。

局部应用则是固定一个函数的一个或者多个参数，把函数参数拆解成多次传递。



partial （部分使用）
---

使用bind，暂存参数
```js
function add(a, b) {
    return a + b;
}
var addOne = add.bind(null, 1);
addOne(2) // 3
```

使用闭包的方式拼接两次的参数
```js
function add(a, b) {
    return a + b;
}

function partial(fn) {
    let args = [].slice.call(arguments,1)
    return function() {
        var newArgs = args.concat([].slice.call(arguments,0))
        return fn.apply(this, newArgs)
    }
}
var addPartial = partial(add,1)
addPartial(2) // 3
```

bind 的方法改变了 this， 第二种方案修复了
```js
function add(a, b) {
    return a + b + this.value;
}

// var addOne = add.bind(null, 1);
var addOne = partial(add, 1);

var value = 1;
var obj = {
    value: 2,
    addOne: addOne
}
obj.addOne(2); // ???
// 使用 bind 时，结果为 4
// 使用 partial 时，结果为 5
```