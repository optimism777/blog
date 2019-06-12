<template>
  <div class="header">
    <!-- <ul>
      <li v-for="(item, index) in headerList" :key="index">{{item}}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      headerList: ['首页', '分类', '关于', '学习']
    }
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
