<template>
  <div class="GoodsListItem" v-for="item in goodsList ">
    <goods-list-item/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem"
  export default {
    name: "GoodsListItem",
    components:{
      GoodsListItem
    },
    props:{
      goodsList:{
        type:Array,
        default:[]
      }

    }
  }
</script>

<style scoped>

</style>
