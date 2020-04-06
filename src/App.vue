<template>
  <div class="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideShow"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
</style>
