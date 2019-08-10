<template>
  <button class="el-button" :disabled="buttonDisabled" 
  :class="[
    type?'el-button--' + type:'',
    size?'el-button--' + size:'',
    {
      'is-disabled': buttonDisabled
    }
  ]"  @click="handleClick" 
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props:{
    disabled: Boolean,
    type:{
      string:String,
      default:'default'
    },
    size:String
  },
  methods: {
    handleClick(evt){
      this.$emit('click', evt);
    }
  },
  computed: {
    buttonDisabled(){
    return  this.disabled
    }
  },
}
</script>
<style lang="">
  
</style>