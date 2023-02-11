# parentNode,parentElement,childNodes,children讲解

<img src='https://img-blog.csdn.net/20171126113500644?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzYwMTAyOTg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast'>
Dom文档结构中，HTML页面每一部分都是由节点组成的，节点的类型一共有3种，`元素节点，文本节点，属性节点` ，从图中可以看出属性节点属于元素节点的分支，一般不常考虑


childNodes,children
---
childNodes，childern，
childNodes指的是返回当前元素子节点的所有类型节点，其中连空格和换行符都会默认文本节点，

childern指的是返回当前元素的所有元素节点



parentNode,parentElement
---
祖宗元素都是HTML，但是我们试着想一下，再往上一层，就是根部document了，并不是元素(上图可以看出)，我们可以一起来看一下下面的代码

<img src='https://img-blog.csdn.net/20171126124747492?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzYwMTAyOTg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast'>
<img src='https://img-blog.csdn.net/20171126124849040?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMzYwMTAyOTg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast'>
parentElement找的是元素，因此当找到根部document时候就是出现值为null的报错，而且parentNode找的是节点，当然就可以显示出来了！
