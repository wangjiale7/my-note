(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{451:function(t,e,s){"use strict";s.r(e);var r=s(42),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"批量异步更新策略及-nexttick-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#批量异步更新策略及-nexttick-原理"}},[t._v("#")]),t._v(" 批量异步更新策略及 nextTick 原理")]),t._v(" "),s("p",[t._v("这里解释一下，一共有Promise、MutationObserver以及setTimeout三种尝试得到timerFunc的方法。\n优先使用Promise，在Promise不存在的情况下使用MutationObserver，这两个方法的回调函数都会在microtask中执行，它们会比setTimeout更早执行，所以优先使用。\n如果上述两种方法都不支持的环境则会使用setTimeout，在task尾部推入这个函数，等待调用执行。")]),t._v(" "),s("p",[t._v("为啥要用 microtask？我在顾轶灵在知乎的回答中学习到：\n根据 HTML Standard，在每个 task 运行完以后，UI 都会重渲染，那么在 microtask 中就完成数据更新，\n当前 task 结束就可以得到最新的 UI 了。反之如果新建一个 task 来做数据更新，那么渲染就会进行两次。")]),t._v(" "),s("p",[t._v("nextTick的目的就是产生一个回调函数加入task或者microtask中，当前栈执行完以后（可能中间还有别的排在前面的函数）调用该回调函数，起到了异步触发（即下一个tick时触发）的目")])])}),[],!1,null,null,null);e.default=a.exports}}]);