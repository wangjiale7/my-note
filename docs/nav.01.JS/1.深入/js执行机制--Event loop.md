# js执行机制--Event loop
---
由于js是单线程，js设计者把任务分为**同步任务和异步任务**，同步任务都在主线程上排队执行，前面任务没有执行完成，后面的任务会一直等待；异步任务则是挂在在一个任务队列里，等待主线程所有任务执行完成后，通知任务队列可以把可执行的任务放到主线程执行。异步任务放到主线程执行完后，又通知任务队列把下一个异步任务放到主线程中执行。这个过程一直持续，直到异步任务执行完成，这个持续重复的过程就叫Event loop。而一次循环就是一次tick 。
在任务队列中的异步任务又可以分为两种microtast（微任务） 和 macrotask（宏任务）
* microtast（微任务）：Promise， process.nextTick， Object.observe， MutationObserver
* macrotask（宏任务）：script整体代码、setTimeout、 setInterval等
执行优先级上，先执行宏任务macrotask，再执行微任务mincrotask。
执行过程中需要注意的几点是：

在一次event loop中，microtask在这一次循环中是一直取一直取，直到清空microtask队列，而macrotask则是一次循环取一次。
如果执行事件循环的过程中又加入了异步任务，如果是macrotask，则放到macrotask末尾，等待下一轮循环再执行。如果是microtask，则放到本次event loop中的microtask任务末尾继续执行。直到microtask队列清空。

<img src='https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/5/27/17254aa257de1477~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp'>


demo
```js
console.log(1);
setTimeout(function () {
  console.log(2)
}, 0); 
new Promise(function (resolve) {
  console.log(3)    
  for (var i = 100; i > 0; i--) {
    i == 1 && resolve()
  }
  console.log(4)
}).then(function () {
  console.log(5)
}).then(function () {
  console.log(6)
});
console.log(7);
```
因为setTimeout是一个宏观任务，所以会放到下一个macrotask，这里不会执行

遇到new Promise，**new Promise在实例的过程中执行代码都是同步进行的**，只有回调.then()才是微任务。

 .then()，属于microtask，加入到**本次循环的microtask队列里面**。接着向下执行又遇到一个 .then()，又加入到本次循环的microtask队列里面。然后继续向下执行。

 此时microtask任务列表清空完了。到此第一次循环完成。

练习题

await async2() 的后面函数相当于promise.then的回调 ，相当于微任务
async2的函数体的微任务 会比 上方微任务之前入队

 ```js
 async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    new Promise(function (resolve) {
        console.log('promise1');
        resolve();
    }).then(function () {
        console.log('promise2');
    });
}
console.log('script start');
setTimeout(function () {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function (resolve) {
    console.log('promise3');
    resolve();
}).then(function () {
    console.log('promise4');
});
console.log('script end');
//script start, 
// async1 start, 
// promise1, 
// promise3, 
// script end, 
// promise2，
// async1 end，
// promise4, 
// setTimeout
 ```

 ```js
 async function async1() {
    console.log('async1 start');
    await async2();
    setTimeout(function() {
        console.log('setTimeout1')  // 这一部分代码会放入到 promise 的微任务队列中。
    },0)
}
async function async2() {
    setTimeout(function() {
        console.log('setTimeout2')
    },0)
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout3');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');
// script start, async1 start, promise1, script end, promise2, setTimeout3,  setTimeout2, setTimeout1
 ```
