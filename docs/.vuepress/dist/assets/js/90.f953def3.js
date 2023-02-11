(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{447:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#树"}},[t._v("#")]),t._v(" 树")]),t._v(" "),a("p",[t._v("树的特点：")]),t._v(" "),a("ul",[a("li",[t._v("树一般都有一个根，连接着根的是树干；")]),t._v(" "),a("li",[t._v("树干会发生分叉，形成许多树枝，树枝会继续分化成更小的树枝；")]),t._v(" "),a("li",[t._v("树枝的最后是叶子；\n现实生活中很多结构都是树的抽象，模拟的树结构相当于旋转180°的树。")])]),t._v(" "),a("h2",{attrs:{id:"树结构的表示方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#树结构的表示方式"}},[t._v("#")]),t._v(" 树结构的表示方式")]),t._v(" "),a("ol",[a("li",[t._v("最普通的表示方法\n"),a("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/4.png"}}),t._v("\n如图，树结构的组成方式类似于链表，都是由一个个节点连接构成。不过，根据每个父节点子节点数量的不同，每一个父节点需要的引用数量也不同。比如节点A需要3个引用，分别指向子节点B，C，D；")])]),t._v(" "),a("p",[t._v("这种方法缺点在于我们无法确定某一结点的引用数。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("儿子-兄弟表示法：")])]),t._v(" "),a("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/5.png"}}),t._v("\n这种表示方法可以完整地记录每个节点的数据，比如：\n"),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//节点A")]),t._v("\nNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//存储数据")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//统一只记录左边的子节点")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("leftChild "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//统一只记录右边的第一个兄弟节点")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rightSibling "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//节点B")]),t._v("\nNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("leftChild "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rightSibling "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//节点F")]),t._v("\nNode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("leftChild "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rightSibling "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("儿子-兄弟表示法旋转\n将上图其顺时针旋转45°之后：\n"),a("img",{attrs:{src:"https://gitee.com/ahuntsun/BlogImgs/raw/master/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/%E6%A0%91%E4%B8%80/7.png"}})])]),t._v(" "),a("p",[t._v("这样就成为了一棵二叉树，由此我们可以得出结论："),a("em",[t._v("任何树都可以通过二叉树进行模拟")]),t._v("。但是这样父节点不是变了吗？其实，父节点的设置只是为了方便指向子节点，在代码实现中谁是父节点并没有关系，只要能正确找到对应节点即可。")])])}),[],!1,null,null,null);s.default=r.exports}}]);