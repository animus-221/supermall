<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data(){
      return{

      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.link)!==-1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    props:{
      link:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    font-size: 14px;
    height: 49px;
    text-align: center;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    margin-bottom: 2px;
    margin-top:3px;
    vertical-align: middle;
  }
</style>
