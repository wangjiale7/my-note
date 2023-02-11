(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{401:function(o,v,_){"use strict";_.r(v);var e=_(42),t=Object(e.a)({},(function(){var o=this,v=o.$createElement,_=o._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[_("h1",{attrs:{id:"es6-系列之模块加载方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#es6-系列之模块加载方案"}},[o._v("#")]),o._v(" ES6 系列之模块加载方案")]),o._v(" "),_("p",[o._v("本篇我们重点介绍以下四种模块加载规范：")]),o._v(" "),_("ol",[_("li",[o._v("AMD (require.js)")]),o._v(" "),_("li",[o._v("CMD （sea.js）")]),o._v(" "),_("li",[o._v("CommonJS")]),o._v(" "),_("li",[o._v("ES6 模块")])]),o._v(" "),_("p",[o._v("AMD 与 CMD 的区别")]),o._v(" "),_("hr"),o._v(" "),_("p",[o._v("AMD 是将需要使用的模块先加载完再执行代码，而 CMD 是在 require 的时候才去加载模块文件，加载完再接着执行。")]),o._v(" "),_("h2",{attrs:{id:"commonjs"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#commonjs"}},[o._v("#")]),o._v(" CommonJS")]),o._v(" "),_("p",[o._v("服务器端比如 node，采用的则是 CommonJS 规范。（不支持 ES6 模块）")]),o._v(" "),_("p",[o._v("跟 sea.js 的执行结果一致，也是在 require 的时候才去加载模块文件，加载完再接着执行。")]),o._v(" "),_("blockquote",[_("p",[o._v("CommonJS 规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。")])]),o._v(" "),_("h2",{attrs:{id:"es6-import"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#es6-import"}},[o._v("#")]),o._v(" ES6 import")]),o._v(" "),_("p",[o._v("ES6 与 CommonJS 区别")]),o._v(" "),_("hr"),o._v(" "),_("ol",[_("li",[o._v("CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。")]),o._v(" "),_("li",[o._v("CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。")]),o._v(" "),_("li",[o._v("CommonJs 是单个值导出，ES6 Module 可以导出多个")]),o._v(" "),_("li",[o._v("CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层")]),o._v(" "),_("li",[o._v("CommonJs 的 this 是当前模块，ES6 Module 的 this 是 undefined")])]),o._v(" "),_("p",[o._v("它们有两个重大差异。")]),o._v(" "),_("p",[o._v("CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。")]),o._v(" "),_("p",[o._v("CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。")]),o._v(" "),_("p",[o._v("第二个差异可以从两个项目的打印结果看出，导致这种差别的原因是：")]),o._v(" "),_("p",[o._v("因为 CommonJS 加载的是一个对象（即 module.exports 属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。")]),o._v(" "),_("p",[o._v("重点解释第一个差异。")]),o._v(" "),_("p",[o._v("CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值")]),o._v(" "),_("p",[o._v("涉及到基本数据类型 和 引用数据类型 的存储结构，栈内存和堆内存，栈内存由变量 和 值属性，基本数据类型的值是真实值，内引用类型在栈内存的值为 引用地址（ccxx00012...），真实值存在堆内存（散列数据格式，空间大）。")])])}),[],!1,null,null,null);v.default=t.exports}}]);