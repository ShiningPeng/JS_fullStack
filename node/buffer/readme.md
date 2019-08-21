## 编码
计算机世界都是二进制的 0 / 1，需要一个规则 把这些二进制对应到不同的字符串。
utf-8 编码需要发送的字符串，接收方再用 utf-8解码，这样对应才能得到正确的内容
## 常见的编码
- 16进制 hex
- unicode 编码： 如iconfont库中的unicode 编码
  国际通用的计算机界字符标准，全世界的语言文字都有一个对应的 unicode。
  utf-8 就是 unicode 的一种实现
- base64 编码:  用 64 个字符 来表示一段二进制

- 传输
流
```js
fs.createReadStream().pipe(fs.WriteStream);
```
流的好处：
- 不用一次性读取所有的内容，中间有一个管道 源源不断的传输数据
A(读取)  ->   B(写入)
读取和写入速度不一致会导致 数据不对等，
Buffer 有单独的空间管理 这些数据。
缓冲一下传输速度，这个单独的开辟出来的区域 就是 Buffer。

## Buffer 基础
```js
{ [Function: Buffer]
  poolSize: 8192, //8kb 8*1024
  //buffer创建的方式
  from: [Function: from],
  of: [Function: of],
  alloc: [Function: alloc],
  allocUnsafe: [Function: allocUnsafe],
  allocUnsafeSlow: [Function: allocUnsafeSlow],

  isBuffer: [Function: isBuffer],
  compare: [Function: compare],
  isEncoding: [Function: isEncoding],
  concat: [Function: concat],
  byteLength: [Function: byteLength],
  [Symbol(kIsEncodingSymbol)]: [Function: isEncoding] }
```
<Buffer 68 65 6c 6c 6f 20 62 75 66 66 65 72>
以十六进制的ASCII输出 'hello buffer'