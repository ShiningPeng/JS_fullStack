<template>
  <div id="app">
    <el-button type="primary" size="mini" @click="doButtonPressed" disabled>主要按钮</el-button>
    <el-button type="success" size="small" @click="doButtonPressed">成功按钮</el-button>
    <el-button type="message">信息按钮</el-button>
  </div>
</template>

<script>
import ElButton from './components/ElButton';
export default {
  name: 'App',
  components:{
    ElButton
  },
  methods: {
    doButtonPressed(evt){
      console.log('pressed');
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
