
# call，apply和bind的模拟实现

call
---
bar.call2(obj,xxx,xxx)
```js
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value)
    return {
        value: this.value,
        name: name,
        age: age
    }
}


Function.prototype.call2 = function (context) {
    context.fn = this||window
    var args = [],result
    for (let i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }
    console.log(args.join(","))
    result = eval(`context.fn( ${args.join(",")})`)
    // result = eval(`context.fn('张三','李四')`)
    delete context.fn
    return result
}
let result =  bar.call2(obj,'张三','李四')
console.log(result)
```

apply
---
apply2(func, [xx,xx])
```js
Function.prototype.apply2 = function(context, arr) {
    context.fn = this||window
    var args = [],result
    if(!arr) {
        result = context.fn()
    }else {
        for (let i = 0; i < arr.length; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval(`context.fn( ${args.join(",")})`)
    }
    delete context.fn
    return result
}
```

bind
---
bind2(func,xxx)(xx)
```js

var foo = {
    value: 1
};

function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);

}
//暂存参数，并非正真执行
var bindFoo = bar.bind(foo, 'daisy');
bindFoo('18');
// 1
// daisy
// 18


Function.prototype.bind2 = function (context) {

    var self = this;
    // 获取bind2函数从第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        // 这个时候的arguments是指bind返回的函数传入的参数
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(context, args.concat(bindArgs));
    }

```
