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
    props: {
      // 由父组件传过来
      path: String,
      // tabbar的字体颜色
      activeColor: {
        type: String,
        default: '#d4237a'
      }
    },
    computed: {
      isActive() {
        // 在this.$route.path中找(this.path)，如果找到了就不等于-1
        return this.$route.path.indexOf(this.path) !== -1
      },
      // 如果绑定class的时候，过于复杂，可以抽到methods或者computed中
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    data() {
      return {
      //   isActive: true
      }
    },
    methods: {
      itemClick() {
        // 点击item跳转到对应的界面
        // console.log(this.$route.path)
        // console.log(this.path)
        if(this.$route.path !== this.path) {
          // console.log('11');
          this.$router.replace(this.path)
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    /*移动端的tabbar高度一般都是49px*/
    height: 49px;
  }

  .active {
    color: #d4237a;
  }

</style>
