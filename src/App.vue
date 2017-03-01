<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>

body {
  background-color: #134c6c;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

img {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  opacity: 0.2;
  width: 4rem;
}
</style>
