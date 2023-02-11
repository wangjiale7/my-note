(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{439:function(t,s,e){"use strict";e.r(s);var n=e(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_3-eslint和prettier冲突"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-eslint和prettier冲突"}},[t._v("#")]),t._v(" 3.eslint和prettier冲突")]),t._v(" "),e("p",[t._v("冲突的本质在于")]),t._v(" "),e("p",[t._v("eslint既负责了代码质量检测，又负责了一部分的格式美化工作,格式化部分的部分规则和 prettier不兼容。 能不能让eslint只负责代码质量检测而让prettier负责美化呢? 好在社区有了非常好的成熟方案，即 "),e("code",[t._v("eslint-config-prettier + eslint-plugin-prettier")]),t._v("。")]),t._v(" "),e("ul",[e("li",[t._v("eslint-config-prettier 的作用是关闭eslint中与prettier相互冲突的规则。")]),t._v(" "),e("li",[t._v("eslint-plugin-prettier 的作用是赋予eslint用prettier格式化代码的能力。 安装依赖并修改.eslintrc文件")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 安装依赖")]),t._v("\nyarn add eslint"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("config"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("prettier eslint"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("prettier "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .eslintrc")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其余的配置")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extends"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint:recommended"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"standard"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"extends"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint:recommended"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"standard"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:prettier/recommended"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其余的配置")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("关键在于新增加的 plugin:prettier/recommended 这个规则。让我们看看它具体做了什么")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// node_modules/eslint-plugin-prettier/eslint-plugin-prettier.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// plugin:prettier/recommended 就是加载这个")]),t._v("\n  configs"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    recommended"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettier'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      plugins"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettier'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      rules"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettier/prettier'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'arrow-body-style'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prefer-arrow-callback'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他的")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("plugin:prettier/recommended 这个语法就是加载了 node_modules/eslint-plugin-prettier/eslint-plugin-prettier.js 文件导出的 configs 中的 recommended 配置项。下面解析他们分别做了什么。")]),t._v(" "),e("p",[t._v("extends: ['prettier']: 通过 eslint-config-prettier 关闭eslint和prettier 相冲突的规则。\nplugins: ['prettier']: 加载 eslint-plugin-prettier，赋予 eslint 用 prettier 格式化文档的功能\n'prettier/prettier': 'error': 让代码文件中不符合prettier格式化规则的都标记为错误，结合vscode-eslint插件便可以看到这些错误被标记为红色，当运行eslint --fix 命令时，将自动修复这些错误。\narrow-body-style 和 prefer-arrow-callback: 这两个规则在eslint 和 prettier 中存在不可解决的冲突，所以关闭掉。")]),t._v(" "),e("p",[t._v("至此, prettier 和 eslint 便可以无冲突协作，保存时候也能自动修复并格式化代码了。")])])}),[],!1,null,null,null);s.default=r.exports}}]);