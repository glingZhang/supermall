<template>
  <div class="goods-item">
    <img :src="listItem.show.img" alt="">
    <div class="goods-info">
      <p>{{listItem.title}}</p>
      <span class="price">{{listItem.price}}</span>
      <span class="collect">{{listItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props: {
      listItem: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    position: relative;
    padding-bottom: 40px;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    font-size: 12px;
    text-align: center;
  }

  .goods-info p {
    margin-bottom: 3px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>
