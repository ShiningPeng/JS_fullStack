<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props:{
    data:{
      type:Array,
      default: () => []
    },
    pullUpLoad:{
      type:[Boolean, Object],
      default:false
    }
  },
  methods: {
    initScroll(){
      if(!this.$refs.wrapper) {
        return
      }
      // better-scroll的初始化
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        bounce: false,   //反弹效果
        pullUpLoad: this.pullUpLoad
      })

      // 是否派发滚动事件
      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }

      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullUpLoad) {
        this.initPullUpLoad();
      }

      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        this.scroll.on('touchend', (pos) => {
          // 下拉动作
          if (pos.y > 50) {
            this.$emit('pulldown')
          }
        })
      }

      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    initPullUpLoad(){
      this.scroll.on('pullingUp',() => {
        this.$emit('pulling-up');
      })
    },
    refresh(){//防止页面卡住，刷新页面
      this.scroll && this.scroll.refresh();
    },
    forceUpdate(){
      if(this.pullUpLoad){
        this.scroll.finishPullUp()
        this.refresh();
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.initScroll();
    }, 20);
  },
  watch: {//watch监听会有两个参数，新值和旧值
    data (newVal, oldVal) {
      setTimeout(() => {
        this.forceUpdate();
      }, 20);
    }
  },
}
</script>

<style lang="stylus" scoped>
.scroll-wrapper
  height 100%
  overflow hidden
</style>