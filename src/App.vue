<template>
  <div>
     <!-- <router-view></router-view> -->
      <!-- <bu v-on="b"></bu> -->
      {{$store.state.acc.ccc}}
      <button @click="handleClick">点击</button>  
  </div>
</template>

<script>
// import bu from './a'
export default {
  data(){
    return {
      data:false,
    }
  },
  mounted(){
    this.data == true;
  },
  methods:{
    handleClick(){
      this.$store.commit('acc/bbb')
    }
  }
};
</script>

<style>
</style>
