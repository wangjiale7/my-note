# tabs封装

```vue
<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-tabs :selected="selected" direction='vertical'>
      <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GTabs from '../../../src/tabs/tabs'
  import GTabsBody from '../../../src/tabs/tabs-body'
  import GTabsHead from '../../../src/tabs/tabs-head'
  import GTabsItem from '../../../src/tabs/tabs-item'
  import GTabsPane from '../../../src/tabs/tabs-pane'

  export default {
    components: {GTabs, GTabsBody, GTabsHead, GTabsItem, GTabsPane},
    data () {
      return {
        selected: '1',
        content: `
          data:{
            selected: '1'
          }

          <g-tabs :selected="selected">
            <g-tabs-head>
              <g-tabs-item name="1">1</g-tabs-item>
              <g-tabs-item name="2">2</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
              <g-tabs-pane name="1">content 1</g-tabs-pane>
              <g-tabs-pane name="2">content 2</g-tabs-pane>
            </g-tabs-body>
          </g-tabs>x
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
```

组件如何通信
---
创建 eventBus 实例挂载到父组件，通过 provide inject 组合使用
```js
  import Vue from 'vue'
    ...
    data () {
      return {
        eventBus: new Vue()
      }
    },
    provide () {
      return {
        eventBus: this.eventBus
      }
    },
```

获取组件的属性
---
* vm.$options.name 可以获取组件的 name 属性，用于业务逻辑
* vm.$parent 获取父组件实例
* vm.$el 获取当前组件 DOM
* vm.$children 获取当前组件的所有子组件的 实例 






总结，学到了什么？
1. 封装的UI组件通信
2. 通过当前组件获取相邻组件进行业务逻辑
