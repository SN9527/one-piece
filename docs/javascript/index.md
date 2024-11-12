## bom与dom

### bom

- Browser Object Model 浏览器对象模型
- 作用：跟浏览器做一些交互效果


#### window
#### location
#### navigator
#### screen
#### history


### dom

- Document Object Model 文档对象模型
- 作用：操作页面显示


## 数据类型
### 基础类型

#### Number

##### NaN不合理运算

```js
console.log(0/0)
```

##### 数值精度丢失

- 1. 自定义函数

```js
function add(num1, num2) {
  	const num1Digits = (num1.toString().split('.')[1] || '').length;
  	const num2Digits = (num2.toString().split('.')[1] || '').length;
  	const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
  	return (num1 * baseNum + num2 * baseNum) / baseNum;
}
```

- 2. 使用第三方库Math.js、BigDecimal.js

#### String
#### Boolean
#### Underfined
#### Null
#### Symbol

### 引用类型

#### Object
#### Array
#### Function
#### Date
#### RegExp
#### Map
#### Set



## 数据缓存
### 函数缓存

```js
const memoize = function (func, content) {
  let cache = Object.create(null)
  content = content || this
  return (...key) => {
    if (!cache[key]) {
      cache[key] = func.apply(content, key)
    }
    return cache[key]
  }
}

const calc = memoize(add);
const num1 = calc(100,200)
const num2 = calc(100,200) // 缓存得到的结果
```

### sessionStorage

- 大小：5M
- 窗口关闭失效

### localStorage

- 大小：5M
- 窗口关闭失效

### cookie

- 大小：小于4k
- 可设置过期时间
- 主动发送给服务器

### indexedDB

- 大小：计算机大小
- 除非手动删除
- 可存储js对象
- 所有操作都是异步的