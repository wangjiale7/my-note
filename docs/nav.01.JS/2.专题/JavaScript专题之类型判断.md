# 类型判断

typeof
---
```js
console.log(typeof undefined); // undefined
console.log(typeof 2); // number
console.log(typeof true); // boolean
console.log(typeof "str"); // string
console.log(typeof Symbol("foo")); // symbol
console.log(typeof 2172141653n); // bigint
console.log(typeof function () {}); // function
// 不能判别
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); // object
```

typeof：能判断所有值类型，函数。**不可对 null、对象、数组进行精确判断，因为都返回 object**。

升级版

Object.prototype.toString
---
返回由 "[object " 和 class 和 "]" 三个部分组成的字符串
```js
// 以下是11种：
var number = 1;          // [object Number]
var string = '123';      // [object String]
var boolean = true;      // [object Boolean]
var und = undefined;     // [object Undefined]
var nul = null;          // [object Null]
var obj = {a: 1}         // [object Object]
var array = [1, 2, 3];   // [object Array]
var date = new Date();   // [object Date]
var error = new Error(); // [object Error]
var reg = /a/g;          // [object RegExp]
var func = function a(){}; // [object Function]

function checkType() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(Object.prototype.toString.call(arguments[i]))
    }
}
checkType(number, string, boolean, und, nul, obj, array, date, error, reg, func)
```

封装type API
---
```js
// 第一版
var class2type = {};

// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(" ").map(function(item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
})

function type(obj) {
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[Object.prototype.toString.call(obj)] || "object" :
        typeof obj;
}
function checkType() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(type(arguments[i]))
    }
}
checkType(number, string, boolean, und, nul, obj, array, date, error, reg, func)
```
isFunction
---
```js
function isFunction(obj) {
    return type(obj) === "function";
}
```


isElement
---
nodeType 属性返回以数字值返回指定节点的节点类型。

如果节点是元素节点，则 nodeType 属性将返回 1。

如果节点是属性节点，则 nodeType 属性将返回 2。
```js
isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
};
```

EmptyObject
----
```js
function isEmptyObject( obj ) {
        var name;
        for ( name in obj ) {
            return false;
        }
        return true;
}
```
就是判断是否有属性，for 循环一旦执行，就说明有属性，有属性就会返回 false。
**可以获取到原型上的属性**

```js
function isEmptyObject(obj) {
    return !!obj ? (Object.keys(obj).length === 0) : true;
}
```
Object.keys（ES5）无法捕获原型上的属性



在面试中有一个经常被问的问题就是：如何判断变量是否为数组？
---
不能用typeof判断
有以下几种办法  
```js
Array.isArray(arr); // true
arr.__proto__ === Array.prototype; // true
arr instanceof Array; // true
Object.prototype.toString.call(arr); // "[object Array]"
```
