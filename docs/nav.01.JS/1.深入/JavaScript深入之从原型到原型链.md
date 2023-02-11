# 原型对象和原型链

prototype
---
每个函数都有一个 prototype 属性，就是我们经常在各种例子中看到的那个 prototype ，比如：

```js
function Person() {

}
// 虽然写在注释里，但是你要注意：
// prototype是函数才会有的属性 
Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // Kevin
console.log(person2.name) // Kevin
```
 
那这个函数的 prototype 属性到底指向的是什么呢？是这个函数的原型吗？
其实，函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是这个例子中的 person1 和 person2 的原型。
那什么是原型呢？你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。

__proto__  (新版谷歌已经是 [[prototype]])
这是每一个JavaScript对象(除了 null )(原型对象)都具有的一个属性，叫__proto__，这个属性会指向构造函数的原型。

```js
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```

constructor
---
原型指向构造函数：constructor，每个原型(prototype)都有一个 constructor 属性指向关联的构造函数。

```js
function Person() {

}
console.log(Person === Person.prototype.constructor); // true

```
<img src='https://camo.githubusercontent.com/0aaf005afda83d4e2fdd2bbe523df228b567a091317a2154181771b2706ea2ef/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f70726f746f74797065332e706e67'>


原型链
---
原型对象（Person.prototype）也是对象，所以也有 __proto__属性指向 原型对象的原型，

person.__proto__.__proto__ == Object.prototype // true Object.prototype.__proto__ == null // true
 
下面是原型链图

<img src='https://camo.githubusercontent.com/ad0ee0e2594c1ac471bbb42321963c130f4fe1ef9ec70389c8ced54544d3fd6c/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f70726f746f74797065342e706e67'>

<img src='https://camo.githubusercontent.com/9a69b0f03116884e80cf566f8542cf014a4dd043fce6ce030d615040461f4e5a/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f70726f746f74797065352e706e67'>

图中由相互关联的原型组成的链状结构就是原型链，也就是蓝色的这条线。

总结
实例对象的__proto__指向 构造函数的原型属性 （原型对象），原型对象的 construtor 指向 构造函数，原型对象的原型__proto__指向 Object.prototype ,原型链是通过 __proto__链接起来
