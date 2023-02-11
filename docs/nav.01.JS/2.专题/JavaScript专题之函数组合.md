
# 流水线——函数组合
## 定义
函数式编程，函数组合是将多个简单的函数，组合成一个更复杂的函数的行为或机制。每个函数的执行结果，作为参数传递给下一个函数，最后一个函数的执行结果就是整个函数的结果。

## 目的
* 避免洋葱嵌套代码，提高代码的可读性
* 组合多个单一功能函数生成特定功能的新函数
* 把功能复杂的函数拆解成功能相对单一的函数，便于维护和复用

还好我们只有两个步骤，首先小写转大写，然后拼接字符串  由内到外
```js
var toUpperCase = function(x) { return x.toUpperCase(); };
var hello = function(x) { return 'hello, ' + x; };

var greet = function(x){
    return hello(toUpperCase(x));
};
```
优化成  compose(a,b)(str)
```js
var compose = function(f,g) {
    return function(x) {
        return f(g(x));
    };
};
```
如果是不止两个函数使用
```js
compose(d, compose(c, compose(b, a)))(str)
```
优化成 compose(d,c,b,a)(str)
```js
function compose (){
    var start = arguments.length -1 
    var args = arguments
    var result = null
    return function() {
        result =  args[start].apply(this, arguments)
        while (i--) result = args[i].call(this, result);
        // for (let i = start -1; i >= 0; i--) {
        //     result =  args[i].call(this, result)
        // }
        return result
    }
}

let result = compose(toUpperCase, hello)('wangjiale')
console.log(result)
```