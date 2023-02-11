

## 理解Observer、Dep、Watcher ?

Observer 「响应式」
---
Vue中用Observer类来管理上述响应式化Object.defineProperty的过程。我们可以用如下代码来描述，将this.data也就是我们在Vue代码中定义的data属性全部进行「响应式」绑定。

Dep 「依赖管理」也叫订阅者
---
Dep就是帮我们收集【究竟要通知到哪里的】。比如下面的代码案例，我们发现，虽然data中有text和message属性，但是只有message被渲染到页面上，至于text无论怎么变化都影响不到视图的展示，因此我们仅仅对message进行收集即可，可以避免一些无用的工作。


当使用watch属性时，也就是开发者自定义的监听某个data中属性的变化。比如监听message的变化，message变化时我们就要通知到watch这个钩子，让它去执行回调函数。
这个时候message的Dep就收集到了两个依赖，第二个依赖就是用来管理watch中message变化的。


当开发者自定义computed计算属性时，如下messageT属性，是依赖message的变化的。因此message变化时我们也要通知到computed，让它去执行回调函数。
这个时候message的Dep就收集到了三个依赖，这个依赖就是用来管理computed中message变化的。


Watcher 「依赖对象」
---
那所谓的依赖究竟是什么呢？上面的图中已经暴露了答案，就是Watcher。



图示如下：一个属性可能有多个依赖，每个响应式数据都有一个Dep来管理它的依赖。

<img src='https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/6/2/16b1857fd4532ff0~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp'>

## 如何收集依赖
我们如何知道data中的某个属性被使用了，答案就是Object.defineProperty，因为读取某个属性就会触发get方法。

