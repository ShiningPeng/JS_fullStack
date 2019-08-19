<template>
  <div class="rank">
    <ScrollView :data="movieList">
      <Card @select="selectItem" v-for="(item,index) in movieList" :key="item._id"  :movie="item" :sort="index + 1"></Card>
    </ScrollView>
    <div class="loading-wrap" v-show="!movieList.length">
      <Loading/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      list:[],
      movieList:[]
    }
  },
  methods: {
    selectItem(id){
      this.$router.push(`/movie/${id}`);
    },
    getRank(){
      axios.get('/api/api/movie/get_rank').then(res => {
        console.log(res);
        if(res.data.code === 1001){
          this.movieList = res.data.result.movies;
        }
      })
    }
  },
  created() {
    this.getRank();
  },
  //  /api/api/movie/get_rank
}
</script>

<style lang="stylus" scoped>
.rank
  height 100%
  .loading-wrap
    display flex
    align-items center
    height 100%
</style>