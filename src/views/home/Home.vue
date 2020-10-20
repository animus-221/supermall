<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
  <goods-list :goodsList="showGoodsList"></goods-list>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import GoodsList from "componrents/content/GoodsList"
  import {getHomeMultidata,getHomeData} from 'network/home'

  export default {
    name: "Home",
    components:{
      NavBar,
      GoodsList
    },
    data(){
      return{
        banners:[],
        recommends:[],
        goodsList:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:"pop"
      }
    },
    created() {
      this.getHomeMultidata();
      this.getHomeData("pop");
      this.getHomeData("new");
      this.getHomeData("sell")

    },
    computed:{
      showGoodsList(){
        return this.goodsList[this.currentType].list
      }
    },
    methods:{
      /**
       * 事件监听相关方法
       */




      /**
       * 网络请求相关方法
       */
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners=res.data.banner.list;
          this.recommends=res.data.recommend.list;
          console.log(this.banners);
        })
      },
      getHomeData(type){
        const page = this.goodsList[type].page + 1;
        getHomeData(type,page).then(res=>{
          this.goodsList[type].list.push(...res.data.list);
          this.goodsList[type].page += 1;
        })
      }
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: #ffa7c9;
    color:#fff
  }
</style>
