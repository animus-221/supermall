<template>
  <div class="zl-swiper">
    <div class="swiper" @touchstart="touchStart" @touchend="touchEnd" @touchmove="touchMove">
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div v-for="(item, index) in slideCount" class="indi-item" :class="{active: index === currentIndex-1}" :key="index"></div>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    data(){
      return{
        slideCount:0,//元素数量
        totalWidth:0,//swiper宽度
        swiperStyle:{},//swiper样式
        currentIndex:1,//当前的index
        isScrolling:false//是否正在滚动
      }
    },
    props:{
      interval:{
        type:Number,
        default:3000
      },
      animDuration: {
        type: Number,
        default: 300
      },
      moveRatio: {
        type: Number,
        default: 0.25
      },
      showIndicator: {
        type: Boolean,
        default: true
      }
    },
    mounted(){
      setTimeout(()=>{
        //操作DOM，在前面添加slide
        this.handleDom()
        //开启计时器
        this.startTimer()
      },3000)
    },
    methods:{
      /**
       * 拖动事件的处理
       */
      touchStart(e){
        //判断当前是否正在滚动

      },
      touchEnd(e){

      },
      touchMove(e){

      },

      //加载轮播图图片
      handleDom(){
        //获取要操作的元素
        let swiperEl = document.querySelector('.swiper')
        let slideEls = swiperEl.getElementsByClassName('slide')

        //保存个数
        this.slideCount = slideEls.length

        //如果元素超过一个那么复制第一张和最后一张图片
        if(slideEls>1){
          let cloneFirst = slideEls[0].cloneNode(true)
          let cloneLast = slideEls[this.slideCount.length-1].cloneNode(true)

          //插入图片
          swiperEl.insertBefore(cloneLast,slideEls[0])
          swiperEl.addChild(cloneFirst)
          this.totalWidth = swiperEl.offsetWidth
          this.swiperStyle = swiperEl.style

          //让swiper显示第一个元素（现在显示的是刚加入的最后一张图片）
          this.setTransform(-this.totalWidth)
        }
      },

      /**
       * 定时器操作
       */
      startTimer(){
        this.playTimer = window.setInterval(() => {
          this.currentIndex++;
          this.scrollContent(-this.currentIndex * this.totalWidth);
        }, this.interval)
      },
      stopTimer(){
        window.clearInterval(this.playTimer);
      }



    },
  }
</script>

<style scoped>

</style>
