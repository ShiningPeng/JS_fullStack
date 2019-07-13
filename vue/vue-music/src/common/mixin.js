import { mapGetters, mapMutations, mapActions } from 'vuex';

export const searchMixin = {
  data() {
    return {
      query: '',
      refreshDelay: 120
    }
  },
  computed: {
    ...mapGetters([
      'searchHistory'
    ])
  },
  methods: {

    onQueryChange (query) {
      // console.log(query)
      this.query = query
    },
    blurInput(){
      this.$refs.searchBox.blur()
      // 父组件调用子组件方法，不需要传数据时，可这样直接调用
    },
    addQuery (query) {
      this.$refs.searchBox.setQuery(query)
    },
    saveSearch(song){
      console.log(song);
      this.selectPlaySong(song)
      // 调用actions里面的方法
      // 1.this.$store.dispatch('saveSearchHistory',song)
      // 2.引入一个mapActions到需要使用的组件中，在组件中调用actions里面的方法,如下
      this.saveSearchHistory(this.query)
    },
    ...mapActions([
      'saveSearchHistory',
      'selectPlaySong'
    ])
  },
}