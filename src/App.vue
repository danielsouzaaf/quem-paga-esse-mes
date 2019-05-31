<template>
  <div id="app">
    <Pagantes />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Pagantes from './components/Pagantes'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Pagantes
  }
}
</script>

<style>

  #app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
