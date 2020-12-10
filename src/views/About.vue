<template>
  <div class="about">
    <h1>This is an about page</h1>
    
      <van-tree-select
        v-model:active-id="activeId"
        v-model:main-active-index="activeIndex"
        :items="items"
        @click-nav="aa"
      />

  </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

import { Field,TreeSelect  ,Calendar ,Cell} from 'vant';

  const items=[
  {
    text: '所有城市',
  }, {
    text: '所有2城市',
  }, {
    text: '所有3城市',
  },
];

export default defineComponent({
  name: 'Home',
    setup(){
      return {
      items,
      activeId: 1,
      activeIndex: 0,
      }
    },
    methods:{
aa(a2a: any){
  console.log(this.activeIndex,a2a)
  // this.activeIndex=a2a
  // this.activeIndex=

}
    },
  components:{
    [Field.name]:Field,
    [Cell.name]:Cell,
    [TreeSelect.name]:TreeSelect,
    [Calendar.name]:Calendar 
  },
  
});
</script>
