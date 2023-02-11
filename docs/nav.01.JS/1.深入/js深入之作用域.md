# js作用域


```js
{
  var a = 1
  console.log(a) // 1
}
console.log(a) // 1
// 可见，通过var定义的变量可以跨块作用域访问到。

;(function A() {
  var b = 2
  console.log(b) // 2
})()
// console.log(b); // 报错，
// 可见，通过var定义的变量不能跨函数作用域访问到

if (true) {
  var c = 3
}
console.log(c) // 3
for (var i = 0; i < 4; i++) {
  var d = 5
}
console.log(i) // 4   (循环结束i已经是4，所以此处i为4)
console.log(d) // 5
// if语句和for语句中用var定义的变量可以在外面访问到，
// 可见，if语句和for语句属于块作用域，不属于函数作用域。
```


