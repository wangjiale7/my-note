# apendChild 

定义和用法
---
appendChild() 方法向节点添加最后一个子节点。
也可以使用 appendChild() 方法从一个元素向另一个元素中移动元素。

```html
<!DOCTYPE html>
<html>
<body>

<ul id="myList1"><li>Coffee</li><li>Tea</li></ul>
<ul id="myList2"><li>Water</li><li>Milk</li></ul>

<p id="demo">请点击按钮把项目从一个列表移动到另一个列表中。</p>

<button onclick="myFunction()">亲自试一试</button>

<script>
function myFunction()
{
var node=document.getElementById("myList2").lastChild;
document.getElementById("myList1").appendChild(node);
}
</script>

</body>
</html>

```
