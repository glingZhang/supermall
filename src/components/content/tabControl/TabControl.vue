<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item, index) in titles"
          :class="{active: index === currentIndex}"
         @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      // 只是文字不一样的时候，不建议用slot
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
  }

  .tab-control-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active span {
    border-bottom: 2px solid var(--color-high-text);
    color: var(--color-tint);
  }
</style>
