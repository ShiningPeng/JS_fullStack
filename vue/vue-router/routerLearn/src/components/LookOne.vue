<template>
  <div class="look-one">{{msg}}
    <div class="go-two" @click='goTwo'>去look2</div>
  </div>
</template>

<script>
export default {
  name:'LookOne',
  data () {
    return {
      msg:'怎么怎么了，'
    }
  },
  methods: {
    goTwo() {
      // this.$router.push('/look/look-two')
      // this.$router.push({ path: '/look/look-two'})
      this.$router.push({name:'LookTwo',param:{ id: 12345}})
    }
  },
  beforeRouteEnter (to, from, next) {
    // 类似于生命周期函数，在路由跳转的时候产生
    console.log(from, to);
    next();

  },
  beforeRouteLeave (to, from, next) {
    // ...
    console.log(from, to);
  }
}
</script>
