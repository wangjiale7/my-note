# 深入理解前端中的 hash 和 history 路由

我们在使用 Vue 或者 React 等前端渲染时，通常会有 hash 路由和 history 路由两种路由方式。

- hash 路由：监听 url 中 hash 的变化，然后渲染不同的内容，这种路由不向服务器发送请求，不需要服务端的支持；还有刷新后对服务器发起 _请求是不带 hash 内容_
- history 路由：监听 url 中的路径变化，需要客户端和服务端共同的支持；

## 1.0 hash 路由实现

当页面中的 hash 发生变化时，会触发 hashchange 事件，因此我们可以监听这个事件，来判断路由是否发生了变化。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>hash模拟实现</title>
    <script></script>
  </head>

  <body>
    <nav>
      <p><a href="#/">home</a></p>
      <p><a href="#/article">article</a></p>
      <p><a href="#/archive#a=1">archive#a=1</a></p>
      <p><a href="#/about">about</a></p>
    </nav>
  </body>
  <script>
    class HashRouter {
      currentUrl = ''
      handlers = {}

      constructor() {
        // this.hashChange();
        this.refresh = this.refresh.bind(this)
        //hashchange 事件中的 event 对象有 oldURL 和 newURL 两个属性，但 load 事件中的 event 没有这两个属性，我们可以通过 location.hash 来获取到当前的 hash 路由：
        window.addEventListener('load', this.refresh, false)
        window.addEventListener('hashchange', this.refresh, false)
      }
      getHashPath(url) {
        const index = url.indexOf('#')
        if (index >= 0) {
          return url.slice(index + 1)
        }
        return '/'
      }
      refresh(event) {
        let curURL = '',
          oldURL = null
        if (event.newURL) {
          oldURL = this.getHashPath(event.oldURL || '')
          curURL = this.getHashPath(event.newURL || '')
        } else {
          curURL = this.getHashPath(window.location.hash)
        }
        this.currentUrl = curURL
        this.emit('change', curURL, oldURL)
      }
      on(evName, listener) {
        this.handlers[evName] = listener
      }
      emit(evName, ...args) {
        const handler = this.handlers[evName]
        if (handler) {
          handler(...args)
        }
      }
    }

    const router = new HashRouter()
    router.on('change', function(curURL, oldURL) {
      console.log(curURL, oldURL)
    })
  </script>
</html>
```

## 2.0 history 理由

window.history 中的方法，常见的操作有：

1. back()：后退到上一个路由；
2. forward()：前进到下一个路由，如果有的话；
3. go(number)：进入到任意一个路由，正数为前进，负数为后退；
4. pushState(obj, title, url)：前进到指定的 URL，不刷新页面；
5. replaceState(obj, title, url)：用 url 替换当前的路由，不刷新页面；

调用这几种方式时，都会只是修改了当前页面的 URL，页面的内容没有任何的变化。如果有面试官问起这个问题<b>“如何仅修改页面的 URL，而不发送请求”，那么答案就是这 5 种方法。</b>

如果服务端没有新更新的 url 时，一刷新浏览器就会报错，因为刷新浏览器后，是真实地*向服务器发送了一个 http 的网页请求*。因此若要使用 history 路由，需要服务端的支持。

## 2.1 应用的场景

pushState 和 replaceState 两个方法跟 location.href 和 location.replace 两个方法有什么区别呢？应用的场景有哪些呢？

1. location.href 和 location.replace 切换时要向服务器发送请求，而 pushState 和 replace 仅修改 url，除非主动发起请求；
2. 仅切换 url 而不发送请求的特性，可以在前端渲染中使用，例如首页是服务端渲染，二级页面采用前端渲染；
3. 可以添加路由切换的动画；
4. 在浏览器中使用类似抖音的这种场景时，用户滑动切换视频时，可以静默修改对应的 URL，当用户刷新页面时，还能停留在当前视频。

## 2.2 无法监听路由的变化

当我们用 history 的路由时，必然要能监听到路由的变化才行。全局有个 popstate 事件，别看这个事件名称中有个 state 关键词，但 pushState 和 replaceState 被调用时，是不会触发触发 popstate 事件的，只有上面列举的前 3 个方法会触发。

针对这种情况，我们可以使用 window.dispatchEvent 添加自定义事件：

## history 代码实现

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>事件流</title>
    <script></script>
  </head>

  <body>
    <div class="container">
      <nav>
        <p><button class="back">back</button></p>
        <p><button class="go">go</button></p>
        <p><button class="pushstate">pushState</button></p>
        <p><button class="replacestate">replaceState</button></p>
      </nav>
      <div id="app">
        <p class="current">当前URL：<span></span></p>
        <p class="history-len">历史记录的长度：<span></span></p>
      </div>
    </div>
  </body>
  <script>
    class HistoryRouter {
      currentUrl = ''
      handlers = {}

      constructor() {
        this.refresh = this.refresh.bind(this)
        this.addStateListener()
        window.addEventListener('load', this.refresh, false)
        window.addEventListener('popstate', this.refresh, false)
        window.addEventListener('pushState', this.refresh, false)
        window.addEventListener('replaceState', this.refresh, false)
      }
      addStateListener() {
        const listener = function(type) {
          var orig = history[type]
          return function() {
            var rv = orig.apply(this, arguments)
            var e = new Event(type)
            e.arguments = arguments
            window.dispatchEvent(e)
            return rv
          }
        }
        window.history.pushState = listener('pushState')
        window.history.replaceState = listener('replaceState')
      }
      refresh(event) {
        this.currentUrl = location.pathname
        this.emit('change', location.pathname)
        document.querySelector('#app span').innerHTML = location.pathname
      }
      on(evName, listener) {
        this.handlers[evName] = listener
      }
      emit(evName, ...args) {
        const handler = this.handlers[evName]
        if (handler) {
          handler(...args)
        }
      }
    }
    const router = new HistoryRouter()
    router.on('change', function(curUrl) {
      console.log(curUrl)
      document.querySelector('.current span').innerHTML = curUrl
      document.querySelector('.history-len span').innerHTML = history.length
    })

    document.querySelector('.back').addEventListener('click', function() {
      window.history.back()
    })
    document.querySelector('.go').addEventListener('click', function() {
      window.history.go(1)
    })
    document.querySelector('.pushstate').addEventListener('click', function() {
      const url =
        Math.random()
          .toString(36)
          .slice(-6) + '.html'
      window.history.pushState({}, '', url)
    })
    document
      .querySelector('.replacestate')
      .addEventListener('click', function() {
        const url =
          Math.random()
            .toString(36)
            .slice(-6) + '.html'
        window.history.replaceState({}, '', url)
      })
  </script>
</html>
```

## 参考

- <a href='https://zhuanlan.zhihu.com/p/130995492'>深入理解前端中的 hash 和 history 路由 - 知乎</a>
