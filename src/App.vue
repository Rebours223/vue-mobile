<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 45px;
  height:100%;
}
html,body{height:100%;font-size:12px;background:#f7f7f7;}
#app header h3{text-align:center;margin-top:10px;}
</style>
