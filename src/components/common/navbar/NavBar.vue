<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    height: 44px;
    line-height: 44px;
    text-align: center;
    position: relative;
    display: flex;
    box-shadow: 0 1px 1px rgba(100,100,100,.2);
  }
  .left ,.right{
    width: 10%;
  }
  .center{
    flex: 1;
  }
</style>
