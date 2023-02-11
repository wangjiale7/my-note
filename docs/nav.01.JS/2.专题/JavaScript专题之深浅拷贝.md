# 深浅拷贝

数组的浅拷贝
---
如果是数组，我们可以利用数组的一些方法比如：slice、concat 返回一个新数组的特性来实现拷贝。


```js
var arr = ['old', 1, true, null, undefined];

var new_arr = arr.concat();
// var new_arr = arr.slice();

new_arr[0] = 'new';

console.log(arr) // ["old", 1, true, null, undefined]
console.log(new_arr) // ["new", 1, true, null, undefined]
```

但是
```js
var arr = [{old: 'old'}, ['old']];

var new_arr = arr.concat();

arr[0].old = 'new';
arr[1][0] = 'new';

console.log(arr) // [{old: 'new'}, ['new']]
console.log(new_arr) // [{old: 'new'}, ['new']]
```
数组元素是基本类型，就会拷贝一份，互不影响，而如果是对象或者数组，就会只拷贝对象和数组的栈内存地址，这样我们无论在新旧数组进行了修改，两者都会发生变化。

可以看出使用 concat 和 slice 是一种浅拷贝。


数组的深拷贝
---
JSON.parse( JSON.stringify(arr)

但是不能拷贝函数!
```js
var arr = [function(){
    console.log(a)
}, {
    b: function(){
        console.log(b)
    }
}]
var new_arr = JSON.parse(JSON.stringify(arr));
console.log(new_arr);
```


深拷贝的实现
---
我们在拷贝的时候判断一下属性值的类型，如果是对象，我们递归调用深拷贝函数不就好了~ 手写能写出这个已经ok

有缺陷
1. 首先，判断是否为引用类型，我们还需要考虑`function`和`null`两种特殊的数据类型 typeof也为 `object`
2. 遇到循环引用会进入死循环，内存溢出，下面会举例子
```js
var deepCopy = function(obj) {
    // 只拷贝对象或数组
    if (typeof obj !== 'object') return;
      // 根据obj的类型判断是新建一个数组还是对象
      // 还有其他方案判断数组 Array.isArray 
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}
```


循环引用
---
```js
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;
```
<img src='https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/1/16ce894778498ae4~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp'>

递归进入死循环导致栈内存溢出了。