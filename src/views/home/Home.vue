<template>
<!--  home是唯一的，所以这里用id-->
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="wrapper"
            ref="scroll"
            @scroll="scrollToTop"
            :probeType="3">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick"></tab-control>
      <good-list :goods="showGoods"></good-list>
    </scroll>
    <back-top
      @click.native="backClick"
      v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  // 公共组件
  import HomeSwiper from "./childConps/HomeSwiper";
  import RecommendView from "./childConps/RecommendView/RecommendView";
  import FeatureView from "./childConps/FeatureView";
  import Scroll from "components/common/scroll/Scroll";

  // 业务组件
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodList from "components/content/goods/GoodList";
  import BackTop from "components/content/backTop/BackTop";

  // 导入方法
  import {getHomeMultidata, getHomeGoods} from "network/home";

  export default {
    name: "Home",
    data(){
      return {
        // result: null,
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        scroll: null,
        isShowBackTop: false
      }
    },
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,
      NavBar,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    created() {
      // 首页组件创建好后，发送网络请求
      // 写主要逻辑，详细的处理逻辑放到methods中

      // 1.请求多个数据
     this.getHomeMultidata()

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods:{
      /**
       * 传过来的方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },

      /**
       * 业务请求相关方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // 函数执行完后，res会被释放掉，数据会被垃圾回收回收掉了，所以要用一个变量把res存储起来
          // this.result = res // 把内存地址复制给result了，result指向了data，所以垃圾回收不会回收掉data
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          // console.log(res)
          this.goods[type].list.push(...res.data.list)
        })
        this.goods[type].page += 1;
      },

      // 回到顶部
      backClick(){
        // 第三个参数，500ms，表示500ms内划到指定位置
        // this.$refs.scroll.scroll.scrollTo(0, 0, 500)
        this.$refs.scroll.scrollTo(0, 0);
      },
      scrollToTop(position) {
        this.isShowBackTop = (-position.y) > 1000
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    }
  }
</script>

<!--scoped 表示作用域，表示效果只作用于当前组件的-->
<style scoped>
  #home {
    padding-top: 44px;
    padding-bottom: 50px;
    height: 100vh;
  }
  .home-nav {
    background: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
    background: #fff;
  }

  .wrapper {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;

    /*height: calc(100% - 93px);*/
    /*overflow: hidden;*/
  }

</style>
