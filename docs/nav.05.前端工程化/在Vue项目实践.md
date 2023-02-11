# 在Vue项目实践

@vue/cli-plugin-eslint
---
这个包它主要干了 2 件事情：
1. 往 package.json 里注册了一个命令：
```js
    "scripts": {
        "lint": "vue-cli-service lint"
    }
```
执行这个命令之后，它会去检查和修复部分可以修复的问题。默认查找的文件是 src 和 tests 目录下所有的 .js,.jsx,.vue 文件，以及项目根目录下所有的 js 文件（比如，也会检查 .eslintrc.js）

2.增加了代码保存触发校验的功能 lintOnSave，这个功能默认是开启的。如果想要关闭这个功能，可以在 vue.config.js 里配置，习惯上只开启 development 环境下的代码保存校验功能：
```js
module.exports = {
    lintOnSave: process.env.NODE_ENV === 'development',
}
```
lintOnSave 参数说明：
* true 或者 warning：开启保存校验，会将 errors 级别的错误在终端中以 WARNING 的形式显示。默认的，WARNING 将不会导致编译失败；
* false：不开启保存校验；
* error：开启保存校验，会将 errors 级别的错误在终端中以 ERROR 的形式出现，会导致编译失败，同时浏览器页面变黑，显示 Failed to compile。

eslint-plugin-vue
---
eslint-plugin-vue 是对 .vue 文件进行代码校验的插件。


Prettier 管控代码风格
---
针对 Prettier 不得不提出以下疑问？

Prettier 是什么？
为什么有了 ESLint，还需要引入 Prettier 呢？它两之间有什么区别？
如何配置 Prettier？
Prettier 如何和 ESLint 结合使用？


Prettier 对比 ESLint
---
我们知道 ESLint 负责了对代码的校验功能，并且主要提供了 2 类规则：

* 检查格式化的规则
* 检查代码质量的规则
说到底 ESLint 就是通过一条条的规则去限制代码的规范，但是这些规则毕竟是有限的，而且更重要的是这些规则的重点并不在代码风格上，所以单凭 ESLint 并不能完全的统一代码风格。

引入 Prettier 了，因为它干的事就是只管代码格式化，不管代码质量。

如何配置 Prettier
---
```js
# 安装包
npm i prettier -D  

# 新建 .prettierrc.js
echo module.exports = {} > .prettierrc.js

# 新建 .prettierignore
echo > .prettierignore
```
Prettier 支持可以配置参数不多，总共才 21 个
```js
module.exports = {
    printWidth: 80,                    //（默认值）单行代码超出 80 个字符自动换行
    tabWidth: 2,                       //（默认值）一个 tab 键缩进相当于 2 个空格
    useTabs: true,                     // 行缩进使用 tab 键代替空格
    semi: false,                       //（默认值）语句的末尾加上分号
    singleQuote: true,                 // 使用单引号
    quoteProps: 'as-needed',           //（默认值）仅仅当必须的时候才会加上双引号
    jsxSingleQuote: true,              // 在 JSX 中使用单引号
    trailingComma: 'all',              // 不用在多行的逗号分隔的句法结构的最后一行的末尾加上逗号
    bracketSpacing: true,              //（默认值）在括号和对象的文字之间加上一个空格
    jsxBracketSameLine: true,          // 把 > 符号放在多行的 JSX 元素的最后一行
    arrowParens: 'avoid',              // 当箭头函数中只有一个参数的时候可以忽略括弧
    htmlWhitespaceSensitivity: 'ignore', // vue template 中的结束标签结尾尖括号掉到了下一行
    vueIndentScriptAndStyle: false,    //（默认值）对于 .vue 文件，不缩进 <script> 和 <style> 里的内容
    embeddedLanguageFormatting: 'auto', //（默认值）允许自动格式化内嵌的代码块
};
```
然后可以通过命令来格式化代码：
```sh
# 将格式化当前目录及子目录下所有文件
npx prettier --write .

# 检查某个文件是否已经格式化
npx prettier --check src/main.js
```
如果有些文件不想被 Prettier 格式化，可以将其写入到 .prettierignore 里：


Prettier 和 ESLint 一起干活更配哦
---
上面介绍了 Prettier 的具体配置，这里主要介绍和 ESLint 结合使用的配置和注意事项。
和 ESLint 配合使用需要用到 eslint-plugin-prettier 这个插件：
npm i eslint-plugin-prettier -D

```js
{
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error'
    }
}
```
