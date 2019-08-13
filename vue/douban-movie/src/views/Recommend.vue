<template>
  <div class="recommend">
    <!-- 首页整个页面都支持better-scroll滚动 -->
    <ScrollView>
      <ListBlock :movies="playingMovies" :title="`正在热映（${playingCount}）`" @more="goMore(1)" @select="selectItem">
      </ListBlock>
      <div class="space" style="background-color:#f6f6f6; height:10px"></div>
      <ListBlock :movies="commingMovies" :title="`正在热映（${commingCount}）`" @more="goMore(0)" @select="selectItem">
      </ListBlock>
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
      playingCount:0,
      commingMovies:[],
      commingCount:0
    } 
  },
  components:{
    ListBlock
  },
  methods: {
    getMovie(){
      axios.get('/api/api/movie/get_hot').then(res => {
        console.log(res);
        if(res.data.code === 1001){
          const  { comming, playing } = res.data.result;
          this.playingMovies = playing.movies;
          this.playingCount = playing.count;
          this.commingMovies = comming.movies;
          this.commingCount = comming.count;
        }
      });
    },
    goMore() {
      console.log('goMore');
    },
    selectItem(id){
      // console.log(id);
      this.$router.push(`/movie/${id}`);
    }
  },
  created() {
    this.getMovie();
  },
}
</script>

<style lang="stylus">
.recommend
  height 100%
</style>