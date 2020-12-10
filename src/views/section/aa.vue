<template>
  
  <div class="search" >

      <van-tree-select
          @click-nav="clickNav"
        v-model:active-id="activeId"
        v-model:main-active-index="activeIndex"
        :items="items"
      />

  </div>
</template>
<script lang="ts">

  import { Field,TreeSelect  } from 'vant';
  const items=[
      { 
        text: '浙江', 
        children: [
        {
          text:"aa",
          id:12,
        },{
          text:"aa",
          id:12,
        }
      ],  },
      { text: '江苏', children: [{
          text:"aa",
          id:12,
        },{ 
          text:"aa",
          id:12,
        }], },
       { text: '江苏2', children: [{
          text:"aa",
          id:12,
        },{
          text:"aa",
          id:12,
        }], },
    ];
  export default {
    setup(){
      return {
        items,
        activeId: 1,
        activeIndex: 0,
        search:"",
        title: '全视眼镜商城'
      }
    },
    name:"navBar",
    components:{
      [TreeSelect.name]:TreeSelect,
    },
    methods:{
      clickNav(activeIndex: number){
        console.log(activeIndex,this.activeIndex);
        // this.activeIndex= activeIndex
      }
    }
  };

</script>