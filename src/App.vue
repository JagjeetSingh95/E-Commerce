<template>
  <div id="app">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Vue from 'vue';
import Header from './pages/header/Header.vue'
import Footer from './pages/footer/Footer.vue'
export default {
  name: "app",
  components: {
    "app-header": Header,
    "app-footer": Footer
  }
};
</script>

 <style>
</style>