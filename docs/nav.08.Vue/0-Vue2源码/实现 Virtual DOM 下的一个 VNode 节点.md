# 实现 Virtual DOM 下的一个 VNode 节点

什么是VNode
---
render function 会转换成VNode节点。虚拟DOM是 js对象。
由于虚拟DOM 是js对象不依赖真实平台环境，就有跨平台能力，比如浏览器，Weex, Node


```js
class VNode {
    constructor (tag, data, children, text, elm) {
        /*当前节点的标签名*/
        this.tag = tag;
        /*当前节点的一些数据信息，比如props、attrs等数据*/
        this.data = data;
        /*当前节点的子节点，是一个数组*/
        this.children = children;
        /*当前节点的文本*/
        this.text = text;
        /*当前虚拟节点对应的真实dom节点*/
        this.elm = elm;
    }
}
```

