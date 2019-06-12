<template>
  <div id="blogs">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'APP'
}
</script>

<style lang="less">
@import url('./assets/reset.less');
body{
  margin: 0;
  padding: 0;
}
#blogs {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  background: yellowgreen;
  // background: url('~@/assets/img/bg.png');
  background-size: 100% 100%;
  background-attachment: fixed;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
