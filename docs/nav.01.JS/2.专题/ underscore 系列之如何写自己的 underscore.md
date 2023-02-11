
#  为什么需要使用 exports = module.exports = _ 
```js
module.exports.num = 3
exports.num = 3

console.log(module.exports);
console.log(exports);
console.log(module.exports === exports);


module.exports = {num: 3}
exports = {num: 3}

console.log(module.exports);
console.log(exports);
console.log(module.exports === exports);
```
// exports 是 module.exports 的一个引用，当你使用了 module.exports = function(){}，实际上覆盖了 module.exports，但是 exports 并未发生改变，为了避免后面再修改 exports 而导致不能正确输出，就写成这样，将两者保持统一。
