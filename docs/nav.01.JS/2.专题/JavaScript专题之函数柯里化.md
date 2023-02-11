# 加工站——柯里化

## 定义
通过函数调用继续返回函数的方式，实现多次接受参数最后统一处理的函数编码形式

## 原理
深受启发，这样理解柯里化 ：用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数



## 柯里化的应用
柯里化有 3 个常见应用：

* 参数复用 – 当在多次调用同一个函数，并且传递的参数绝大多数是相同的，那么该函数可能是一个很好的柯里化候选
* 提前返回 – 多次调用多次内部判断，可以直接把第一次判断的结果返回外部接收
* 延迟计算/运行 – 避免重复的去执行程序，等真正需要结果的时候再执行

1. 应用一：参数复用
```js
function uri(protocol, hostname, pathname) {
  return `${protocol}${hostname}${pathname}`;
}

const uri1 = url('https://', 'www.fedbook.cn', '/function-curring/')


function uri_curring(protocol) {
  return function(hostname, pathname) {
    return `${protocol}${hostname}${pathname}`; 
  }
}

const uri_https = uri_curring('https://');

const uri1 = uri_https('www.fedbook.cn', '/frontend-languages/javascript/function-currying/');
const uri2 = uri_https('www.fedbook.cn', '/handwritten/javascript/10-实现bind方法/');
const uri3 = uri_https('www.wenyuanblog.com', '/');

console.log(uri1);
console.log(uri2);
console.log(uri3);
```


2. 应用二：兼容性检测
注册事件的方式
   1. ele.on事件类型 = function(){} 
   2. addEventListener（事件类型，事件处理函数，捕获） IE9 以上
   3. attachEvent（事件类型，事件处理函数）  IE9 以下

```js
function addEventListener(dom, eventName, fn) {
    if (dom.addEventListener) {
        dom.addEventListener(eventName, fn)
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + eventName, fn)
    } else {
        dom['on' + eventName] = fn
    }
}
```


3. 应用三：实现一个 add 函数 (面试题)

```js 
// 第一版
var curry = function (fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        var newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this, newArgs);
    };
};
```
如何使用
```js
function add(a, b) {
    return a + b;
}

var addCurry = curry(add, 1, 2);
addCurry() // 3
//或者
var addCurry = curry(add, 1);
addCurry(2) // 3
//或者
var addCurry = curry(add);
addCurry(1, 2) // 3
```
第二版
```js
function curry(fn, args) {
    //必要参数的长度
    //外层函数，用来存储上一次函数的入参 args
    var length = fn.length;
    args = args || [];
    return function() {
        //对外层数组深拷贝
        var _args = args.slice(0),
            arg, i;

        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            _args.push(arg);
        }
        if (_args.length < length) {
            //新传入的参数拼接到 外层函数的变量， 传值给外层函数，利用了闭包存储变量
            // call 参数一一对应，逗号隔开
            return curry.call(this, fn, _args);
        }
        else {
            // apply 参数为数组，数组每一项对应一个形参传入
            return fn.apply(this, _args);
        }
    }
}

//立即执行函数
var fn = curry(function(a, b, c) {
    console.log([a, b, c]);
    return a + b + c
});

fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]
```