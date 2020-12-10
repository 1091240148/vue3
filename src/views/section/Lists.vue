
<template>
  <div class="search" >
    
       <van-cell-group>
        <van-field
          v-model="search"
          left-icon="search"
          placeholder="请输入科室名称"
          @keyup.enter="inputSend"
        />
      </van-cell-group>

      <van-tree-select
        @click-nav="clickNav"
        v-model:active-id="activeId"
        v-model:main-active-index="activeIndex" 
        :items="items"
      />
<br />
      <div>
        <van-cell title="选择单个日期" :value="date" @click="show = true" />
<van-calendar v-model:show="show" @confirm="onConfirm" />

        </div>


      <div class="btn"> 查看挂号信息 </div>


<!-- <van-icon name="search" /> -->
    <!-- <el-input
      placeholder="请输入科室名称"
      clearable
      v-model="search"
      class="oInput"
      @input="change($event)"
      @keyup.enter="inputSend"
      prefix-icon="el-icon-search"
    >
    </el-input> -->


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
    setup(){
      return {
        items,
        activeId: 1,
        activeIndex: 0,
        search:"",
        title: '全视眼镜商城',
      date: '',
      show: false,
      }
    },
    name:"navBar",
    components:{
      [Field.name]:Field,
      [Cell.name]:Cell,
      [TreeSelect.name]:TreeSelect,
      [Calendar.name]:Calendar 
    },
    methods:{
      change(){
        this.$forceUpdate();
      },
      inputSend(){
        console.log("进来了",this.search);
      },
      clickNav(activeIndex: number){
        console.log("activeIndex:",activeIndex,"this.activeIndex:",this.activeIndex);
        // this.activeIndex= activeIndex
      },
       formatDate(date: any) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date: any) {
      this.show = false;
      this.date = this.formatDate(date);
    },

    }
  });


</script>

<style lang="scss"  >
.search{
  .van-cell{
      background-color: #ECEDEF;
    border-radius: 50px;
  }
}
</style>
<style lang="scss" scoped >
  @import '@/assets/global.scss';
  .search{
    background-color: #FFF;
    padding:10px;
    margin-bottom: 10px;
  }
  .btn{
    color: rgb(49,183,143);
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width:100%;
  }
</style>