DOM 树
快点看到页面，将页面分成几件事
html + css 形成了静态页面，
讲js jquery vue 等框架，100kb ,下载，要执行，要花（几十毫秒，几百，或几秒）
网页优化，所以js 尽量放在页面的最底下，即body的最后
window.onload 

DOMContentLoaded 是js最佳也是最快执行的地方
图片资源 js 资源，ajax 请求资源 ，通过网络，依次到达浏览器，不应该影响网页DOM Ready
