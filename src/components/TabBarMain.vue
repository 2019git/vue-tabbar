<template>
  <TabBar>
    <TabBarItem path = "/home">
      <img slot="item-icon" src="@/assets/img/tabbar/home.png">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home-active.png">
      <div slot="item-name">首页</div>
    </TabBarItem>
    <TabBarItem path = "/category" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/category.png">
      <img slot="item-icon-active" src="@/assets/img/tabbar/category-active.png">
      <div slot="item-name">分类</div>
    </TabBarItem>
    <TabBarItem path = "/shopcart" activeColor="pink">
      <img slot="item-icon" src="@/assets/img/tabbar/shopcart.png">
      <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart-active.png">
      <div slot="item-name">购物车</div>
    </TabBarItem>
    <TabBarItem path = "/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.png">
      <img slot="item-icon-active" src="@/assets/img/tabbar/profile-active.png">
      <div slot="item-name">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from '@/components/tabbar/TabBar'
  import TabBarItem from '@/components/tabbar/TabBarItem'
  export default {
    name: "TabBarMain",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
