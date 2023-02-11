# 防抖
定义</br>
在一定时间范围内，触发了行为，下次不触发，例如连续点击两次


```html
<!--
 * @Author: wangjiale
 * @Date: 2022-07-04 21:40:15
 * @LastEditors: wangjiale
 * @LastEditTime: 2022-09-16 16:42:17
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <input type="text" value="双十一下单" id="test">
</body>
</html>
<script>
    //提前执行一次 ！！！，如果放在点击函数里面就会重复给 timer 设置为 null，导致重复执行
    var result =  debounce(pay, 500, false)
    let dom = document.querySelector("#test")
    dom.addEventListener("click", function() {
        //点击再执行，公用一个变量timer
        result("化妆品","1000")
    })

    function pay(product, money) {
        console.log('下单'+ product, "金额" + money);
    }


    /**
     * @description: 
     * @param {*} fn 回调函数
     * @param {*} delay 等待时间
     * @param {*} immediate 是否立刻执行
     * @return {*}
     */
    function debounce(fn, delay, immediate = false) {
        let timer
        console.log('执行了debounce ');
        return function() {
            var args = arguments
            const context = this
            if(timer) clearInterval(timer)
            if(immediate) {
                let now = !timer
                timer = setTimeout(function() {
                    timer = null
                }, delay)
                if(now) {
                    fn.apply(context,args)
                }
            }else {
                timer = setTimeout(function() {
                    fn.apply(context,args)
                }, delay)
            }
        }
    }

</script>
```