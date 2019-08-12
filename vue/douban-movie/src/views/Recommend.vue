<template>
  <div class="recommend">
    <!-- 首页整个页面都支持better-scroll滚动 -->
    <ScrollView>
      <ListBlock :movies="playingMovies" :title="`正在热映（${playingCount}）`"></ListBlock>
    </ScrollView>
  </div>
</template>

<script>
import axios from 'axios'
import ListBlock from '@/components/ListBlock';
export default {
  data () {
    return {
      playingMovies:[],
      playingCount:0
    } 
  },
  components:{
    ListBlock
  },
  methods: {
    getMovie(){
      axios.get('https://www.easy-mock.com/mock/5cbf0110a70f960bc333c4e7/douban-movie').then(res => {
        console.log(res);
        if(res.code === 1001){
          const  { comming, playing } = res.result;
          this.playingMovies = playing.movies;
          this.playingCount = playing.count;
        }
      });
    }
  },
  created() {
    this.getMovie();
  },
}
</script>

<style lang="stylus">
  
</style>