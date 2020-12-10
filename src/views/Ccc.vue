
<template>

  <div class="about">

    <h1>This is new page</h1>

    <el-button v-on:click="increment" type="primary">el-button</el-button>

    <div>{{count}}</div>

  </div>
  
</template>

<script lang="ts">
  // import store from '../store';
  import { defineComponent } from 'vue';
  // console.log(Vue)
  export default defineComponent({
    name: 'Home',
    data(){
      return {
        count:1,
      }
    },
    components: {
    },

    methods:{
      increment() {
        this.count++
      }
    }
  });
</script>
<style lang="scss" scoped>

</style>