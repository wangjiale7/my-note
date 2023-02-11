# new的模拟实现
new
---
```js
function Person (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

Person.prototype.strength = 60;

Person.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
    return 'sayYourName'
}

var person = new Person("张三",18)
console.log(person)
console.log(person.sayYourName())
```
从这个例子中，我们可以看到，实例 person 可以：
1. 访问到 Person 构造函数里的属性
2. 访问到 Person.prototype 中的属性

new 的过程 （面试题） 
---
```js
new Person{
    var obj = {};
    obj.__proto__ = Person.prototype;
    var result = Person.call(obj,"张三",18);
    return typeof result === 'obj'? result : obj;
}
```
1. 创建一个空对象 obj;
2. 指向构造函数原型对象
3. 执行构造函数
4. 如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。



实现
---

初步模板
```js
function Person () {
    ……
}

// 使用 new
var person = new Person(……);
// 使用 objectFactory
var person = objectFactory(Person, ……)

```
实际实现
```js
var person1 = objectFactory(Person, "李四",18)
console.log(person1);
console.log(person1.sayYourName())

function objectFactory() {
    var obj = new Object()
    let Fn =  [].shift.call(arguments)   //删除第一个参数，返回被删除对象（构造函数），修改了原数组
    obj.__proto__ = Fn.prototype // 修改obj原型
    Fn.apply(obj ,arguments) //借用外部传入的构造器给obj设置属性
    return obj
}

```


