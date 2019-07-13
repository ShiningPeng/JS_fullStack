## quickstart

## 源码目录介绍
```
./js
├── base                                   // 定义游戏开发基础类
│   ├── animatoin.js                       // 帧动画的简易实现
│   ├── pool.js                            // 对象池的简易实现
│   └── sprite.js                          // 游戏基本元素精灵类
├── libs
│   ├── symbol.js                          // ES6 Symbol简易兼容
│   └── weapp-adapter.js                   // 小游戏适配器
├── npc
│   └── enemy.js                           // 敌机类
├── player
│   ├── bullet.js                          // 子弹类
│   └── index.js                           // 玩家类
├── runtime
│   ├── background.js                      // 背景类
│   ├── gameinfo.js                        // 用于展示分数和结算界面
│   └── music.js                           // 全局音效管理器
├── databus.js                             // 管控游戏状态
└── main.js                                // 游戏入口主函数

```

微信小游戏的架构
/js 
游戏的一部分 main.js 是入口，
通过支持es6的模块化 ，分给不同模块来实现，
每个模块都是一个类 最新的，
require module.exports 是 es5 的 commonJS node 全面支持

libs/放置 game engine
 - adapter.js 适配
 canvas 写游戏
 在小游戏之中，不支持DOM,BOM
 开发方式和H5一样，
