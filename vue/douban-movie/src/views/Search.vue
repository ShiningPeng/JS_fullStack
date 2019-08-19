<template>
  <div class="search">
    <ScrollView :data="list">
      <div class="input-wrap">
        <SearchBox @input="search" @clear="handleClear" ref="searchBox" @inputIsNull="handleInputIsNull"></SearchBox>
      </div>
      <div class="hotkey-wrap">
        <h1 class="title">热门搜索</h1>
        <div class="list">
          <span v-for="item in hotKeys" :key="item._id" class="item">{{item.name}}</span>
        </div>
      </div>
      <div v-if="searchHistory.length" class="history-wrap">
        <div class="title">
          <span>搜索历史</span>
          <i class="iconfont icon-clear" @click="showConfirm"/>
        </div>
        <div v-for="item in searchHistory" :key="item" class="item">
          <i class="iconfont icon-history"/>
          <span class="text" @click="changeToDetail(item)">{{ item }}</span>
          <i class="iconfont icon-del" />
        </div>
      </div>
    </ScrollView>
    <div class="result-wrap" v-show="isShow">
      <ScrollView :data="movieList">
        <Card v-for="movie in movieList" :key="movie._id" :movie="movie" @select="getMovie"></Card>
      </ScrollView>
    </div>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox';
import axios from 'axios';
import { mapMutations, mapState } from 'vuex';
export default {
  data () {
    return {
      list:[],
      movieList:[],
      isShow:false,
      hotKeys:[],
      // searchHistory:[1]
    }
  },
  computed: {
    //把仓库里的东西搬出来了
    ...mapState([
      'searchHistory'
    ])
  },
  components:{
    SearchBox
  },
  methods: {
    handleInputIsNull(bool){
      this.isShow = bool;
    },
    changeToDetail(item){
      this.$refs.searchBox.setQuery(item);
      this.search(item);
    },
    getMovie(id){
      this.$router.push(`/movie/${id}`);
    },
    showConfirm(){},
    search (query) {
      if(this.timer){
        clearTimeout(this.timer);
      }
      const params = {
        keyword:query
      };
      this.timer = setTimeout(() => {
        axios.get('/api/api/movie/search', {params}).then(res => {
          // console.log(res);
          if (res.data.code === 1001 ){
            this.movieList = res.data.result.movies;
            this.isShow = true;
          }
        });
        this.saveSearchHistory(query);
      }, 500);
    },
    handleClear () {
      this.isShow = false;
    },
    getHotKeys () {
      axios.get('/api/api/movie/get_hot_search').then(res => {
        // console.log(res);
        if(res.data.code === 1001) {
          this.hotKeys = res.data.result.keywords
        }
      })
    },
    ...mapMutations([
      'saveSearchHistory'
    ])
  },
  created() {
    this.getHotKeys();
  }
}
</script>

<style lang="stylus" scoped>
.search
  height 100%
  background #f9f9f9
  .input-wrap
    background #f5f5f5
    padding: 10px 15px
  .hotkey-wrap
    padding  0 0 8px 15px
    background-color #fff
    .title
      padding 15px 0
      font-size 15px
      color #666
    .list
      display flex
      flex-wrap wrap
      overflow hidden
      .item
        padding 6px 12px
        margin: 0 12px 12px 0
        border-radius 4px
        font-size 13px
        color #333
        background-color #f5f5f5
  .history-wrap
    .title
      padding 15px 0
      font-size 15px
      color #666
      .icon-clear
        float right
        font-size 15px
    margin-top 10px
    padding 0 15px 8px 15px
    .item
      height 40px
      line-height 40px
      display flex
      font-size 15px
      color #333
      border-bottom 1px solid #e5e5e5
      .icon
        font-size 15px
        color #999
      .icon-history
        margin-right 10px
      .text
        flex 1
  .result-wrap
    position fixed
    top 111px
    bottom 0
    width 100%
    overflow scroll
    background #fff
    .no-result
      position absolute
      top 40%
      left 50%
      transform translate(-50%,-50%)
      color #999
      text-align center
      .img
        width 100px
        height 100px
        filter grayscale(1)
        margin-bottom 15px
</style>