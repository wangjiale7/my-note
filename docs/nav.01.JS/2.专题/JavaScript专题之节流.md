# 节流
定义</br>
控制在一定时间范围内执行一次的行为，就为节流。例如滚动，缩放等行为

实现有两种方案


1.使用当前时间 减去 初始时间，一开始为0， 大于等待时间就执行函数，然后再把当前时间赋值给初始时间。
```js
    function throttle(func, wait) {
        let preview = 0;
        return function () {
            if (new Date() - preview > wait) {
                func();
                preview = new Date();
            }
        };
    }
```
2.定时器实现
```js 
 function throttle(func, wait) {
        console.log("执行");
        let timer = null;
        let context;
        let args;
        return function () {
            context = this;
            args = arguments;
            if(timer) return //等待执行
            if (!timer) {
                    console.log("开始定时器，后面触发的进不来");
                    timer = setTimeout(() => {
                        timer = null;
                        func.apply(context, args);
                    }, wait);
                }
        };
    }
```


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>

<body>
    <div style="
        height: 300px;
        background-color: pink;
        font-size: 30px;
        text-align: center;
      " id="container"></div>
</body>

</html>
<script>
    let count = 0;
    let dom = document.querySelector("#container");

    let result = throttle1(addCount, 2000);
    dom.onmousemove = function () {
        result("参数1", "参数2");
    };
    function addCount(a, b) {
        dom.innerHTML = count++; 
        console.log(a, b);
    }
    //定时器实现节流
    function throttle(func, wait, immediate = true) {
        console.log("执行");
        let timer = null;
        let context;
        let args;
        return function () {
            context = this;
            args = arguments;
            if(timer) return //等待执行
            if (!timer) {
                    console.log("开始定时器，后面触发的进不来");
                    timer = setTimeout(() => {
                        timer = null;
                        func.apply(context, args);
                    }, wait);
                }
        };
    }

    function throttleDate(func, wait, immediate = true) {
        let preview = 0;
        return function () {
            if (new Date() - preview > wait) {
                func();
                preview = new Date();
            }
        };
    }

</script>
```