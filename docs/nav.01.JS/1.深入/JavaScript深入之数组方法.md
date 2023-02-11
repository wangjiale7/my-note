
## JavaScript深入之数组方法
[].slice.call( arguments , 0)
--- 

高手代码里看到.slice(0)，查了下这样写的好处：

1.对原数组进行浅拷贝，这样进行一系列操作的时候就不影响原数组了；
如果数据的每一项都是基本类型就是深拷贝

2.将类数组对象转化为真正的数组对象：var anchorArray = [].slice.call(document.getElementsByTagName(‘a’), 0);


```js
function testSlice() {
    console.log(arguments);
    console.log([].slice.call(arguments, 0));
    console.log([...arguments]);
}
```

[].shift.call( arguments )
---
[].shift.call( arguments ) 这便是一个例子。

shift() 方法删除数组第一项，并返回删除项。

根据上边的理解，这句代码意思就是： “删除并拿到arguments的第一项”

