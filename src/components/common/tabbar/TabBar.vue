<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;

    /*x偏移量向右，y偏移量向下 ，模糊值，颜色t透明度，1是不透明，0是完全透明*/
    box-shadow: 0 -3px 1px rgba(100,100,100,.1);
  }
</style>
