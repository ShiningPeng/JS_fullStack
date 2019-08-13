<template>
  <!-- <transition name="fade"> -->
    <!-- @touchmove.prevent  阻止touch的默认事件 -->
    <!-- <div class="player-wrapper" @touchmove.prevent>
        <div ref="player" class="player"/>
        <i class="iconfont icon-left" @click="$router.back()"/>
      </div>
      <div class="info-wrapper">
        <ScrollView>

        </ScrollView>
      </div>
  </transition> -->
  <div></div>
</template>

<script>
import axios from 'axios';
export default {
  name:'Movie',
  data () {
    return {

    }
  },
  methods: {
    //拿到电影的id去请求数据
    getDetail () {
      const { id } = this.$route.params
      // console.log('this.route',this.$route);
      axios.get(`/api/api/movie/get_detail/${id}`).then(res => {
        console.log(res);
      });
    }
  },
  created() {
    this.getDetail();
  },
}
</script>

<style lang="stylus" scoped>
  
</style>