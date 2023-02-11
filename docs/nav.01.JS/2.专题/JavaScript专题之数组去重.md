# 数组去重

indexOf
---
```js
let arr = [1,2,1,'1',3,3, NaN, NaN]
function unique1(arr){
    let res = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(res.indexOf(element)=== -1) {
            res.push(element)
        }
    }
    return res
}
console.log(unique1(arr));
```

filter
---
```js
function unique2(arr) {
    return arr.filter((ele, index)=> {
        return arr.indexOf(ele) === index
    })
} 
console.log(unique2(arr));
```

Map
----
```js
function unique3(arr) {
    let map = new Map();
    return arr.filter((ele, index)=> {
        return !map.has(ele)  && map.set(ele, ele)
    })
} 
```

sort排序后
---
```js
console.log(unique3(arr));
function unique4(arr) {
    return arr.concat().sort().filter(function(item, index, arr){
        return !index || item !== arr[index - 1]
    })
}

console.log(unique4(arr));
```

set
---
```js
function unique5(arr) {
    return [...new Set(arr)]
}
console.log(unique5(arr));
```

对象去重
---
```js
    let arrObj = [{id: 1}, {id: 2}, {id: 1}]
function unique6(arr) {
    const map = new Map()
    return arr.filter((ele,index) => {
        return !map.has(ele.id) && map.set(ele.id, ele)
    })
}
console.log(unique6(arrObj)); 
```