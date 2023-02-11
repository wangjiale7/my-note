# 执行上下文声明周期

遇到函数执行的时候，就会创建一个执行上下文

<img src='https://img-blog.csdnimg.cn/20200504151746582.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQzNDI3OTk1,size_16,color_FFFFFF,t_70#pic_center'>

## 深入之词法作用域和动态作用域

## 作用域

作用域是指程序源代码中定义变量的区域。

作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。

JavaScript 采用`词法作用域(lexical scoping)`，也就是**静态作用域**。

因为 JavaScript 采用的是词法作用域，**函数的作用域在函数定义的时候就决定了**。

而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。

```js
var value = 1

function foo() {
  console.log(value)
}

function bar() {
  var value = 2
  foo()
}

bar()

// 结果是 1
```

## 动态作用域

bash 就是动态作用域，不信的话，把下面的脚本存成例如 scope.bash，然后进入相应的目录，用命令行执行 bash ./scope.bash，看看打印的值是多少。

```sh
value=1
function foo () {
    echo $value;
}
function bar () {
    local value=2;
    foo;
}
bar
```

## 执行上下文周期

执行上下文有两个步骤，分析和执行

1. 进入执行上下文变量对象
2. 代码执行

## 进入执行上下文

当进入执行上下文时，这时候还没有执行代码，

变量对象包括；

1. 函数的所有形参（如果是函数上下文）
   - 创建变量对象，如果有实参则赋值
   - 没实参，值 undefined
2. 函数声明
   - 函数作为变量对象的属性创建
   - 如果变量对象已经存在同名创建，则 ”函数完全替换该属性“
3. 变量声明
   - 创建变量对象 名称 和 值 undefined
   - 首先会处理函数声明，其次会处理变量声明，如果如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会覆盖已经存在的这类属性。

举个例子

```js
function foo(a) {
  var b = 2
  function c() {}
  var d = function() {}
  b = 3
}
foo(1)
```

在进入执行上下文后，这时候的 AO 是：

```js
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: reference to function c(){},
    d: undefined
}
```

```js
console.log(foo)
function foo() {
  console.log('foo')
}
var foo = 1
```

会打印函数，而不是 undefined 。

这是因为在进入执行上下文时，首先会处理函数声明，其次会处理变量声明，如果如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会覆盖已经存在的这类属性。

## 执行上下文栈

后进先出

JavaScript 引擎创建了执行上下文栈（Execution context stack，ECS）来管理执行上下文

JavaScript 开始要解释执行代码的时候，最先遇到的就是全局代码，所以初始化的时候首先就会向执行上下文栈压入一个全局执行上下文，我们用 globalContext 表示它，并且只有当整个应用程序结束的时候，ECStack 才会被清空，所以程序结束之前， ECStack 最底部永远有个 globalContext：

```js
ECStack = [globalContext]
```

执行 demo

```js
function fun3() {
  console.log('fun3')
}

function fun2() {
  fun3()
}

function fun1() {
  fun2()
}

fun1()
```

当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。知道了这样的工作原理，让我们来看看如何处理上面这段代码：

```js
// 伪代码

// fun1()
ECStack.push(<fun1> functionContext);

// fun1中竟然调用了fun2，还要创建fun2的执行上下文
ECStack.push(<fun2> functionContext);

// 擦，fun2还调用了fun3！
ECStack.push(<fun3> functionContext);

// fun3执行完毕
ECStack.pop();

// fun2执行完毕
ECStack.pop();

// fun1执行完毕
ECStack.pop();

// javascript接着执行下面的代码，但是ECStack底层永远有个globalContext
```
