# template 模板是怎样通过 Compile 编译的

Compile
---
compile 编译可以分成 parse、optimize 与 generate 三个阶段，最终需要得到 render function

<img src='https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/12/19/1606ec3d306ab28f~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp'>


parse 会用**正则等方式**将 template 模板中进行字符串解析，得到指令、class、style等数据，形成 AST

optmize
---
优化
optimize 这层的处理，每个节点会加上 static 属性，用来标记是否是静态的。

 isStatic 函数，传入一个 node 判断该 node 是否是静态节点。判断的标准是当 type 为 2（表达式节点）则是非静态节点，当 type 为 3（文本节点）的时候则是静态节点，当然，如果存在 if 或者 for这样的条件的时候（表达式节点），也是非静态节点。

generate
---
generate 会将 AST 转化成 render funtion 字符串，最终得到 render 的字符串以及 staticRenderFns 字符串。

经历过这些过程以后，我们已经把 template 顺利转成了 render function, 接下来我们将介绍 patch 的过程，来看一下具体 VNode 节点如何进行差异的比对。


