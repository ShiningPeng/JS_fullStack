初始化
src->common->styles->reset.styl 重置默认样式
安装stylus
npm install stylus  stylus-loader -D
建相关的文件夹
在main.js或者在App.vue中引入重置样式文件
1.封装scrollview页面滚动效果的组件:
npm install better-scroll
import BScroll from 'better-scroll'
2.common/js/components.js
全局注册组件
main.js中import
import globalComponents from 'common/js/components'
Vue.use(globalComponents );
3.图片懒加载 vue-lazyload依赖
npm install vue-lazyload --save-dev
在main.js中引入
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  loading:require('./common/images/loading.png')
});//懒加载的占位图

<img v-lazy="item.poster" alt="" width="100%" height="100%">
其中的v-lazy属性

4.axios的简单封装
一般是做响应拦截和请求拦截

5.Recommend和ListBlock页面通信
Recommend.vue
<ListBlock 
:movies="playingMovies"
:title="`正在热映（${playingCount}）`" 
@more="goMore(1)"   //这里可以自己给一个参数来控制
@select="selectItem">
      </ListBlock>
<ListBlock :movies="commingMovies" :title="`正在热映（${commingCount}）`" @more="goMore(0)" @select="selectItem">
      </ListBlock>
data () {
    return {
      playingMovies:[],
      playingCount:0,
    } 
  },
methods:{
  goMore(type){},
  selectItem(id){} 
}
ListBlock.vue
@click="$emit('more')"
@click="$emit('select',item._id)"
props: {
    title: {
      type: String,
      required: true
    },
    movies: {
      type: Array,
      required: true
    }
  },

6.tab切换的底杠，字体
router-link包裹的页面切换选中时会有router-link-active类名
在此类名下加样式
font-weight:700;
color:#fff !important    
border-bottom:3px solid #fff;
即可

7.@click="$router.back()"返回上一个页面
用于页面之间的跳转
8.this.$router.push(`/movie/${id}`);
在其他页面接收到传过来的id
const {id} = this.$route.params
并且在配置路由的时候需要
path:'/movie/:id'
