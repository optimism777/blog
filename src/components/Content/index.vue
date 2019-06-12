<template>
  <div class="content">
    <p>你好啊，欢迎来到我的博客！</p>
    <p>今天是{{date}} --- {{weekend}}</p>
    <p>每天的心情要棒棒哦！</p>
  </div>
</template>

<script>
const moment = require('moment')
moment.locale('zh-cn')
export default {
  name: 'Content',
  data () {
    return {
      date: '',
      weekend: ''
    }
  },
  methods: {
    getDate () {
      this.date = moment().format('ll')
      this.weekend = moment().format('dddd')
    }
  },
  created () {
    this.getDate()
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
