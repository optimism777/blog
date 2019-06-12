<template>
  <div class="footer">
   <p>Copyright © 2018-2019</p>
   <p>晓芳啊 <span>{{timeTxt}}</span></p>
  </div>
</template>

<script>
const moment = require('moment')
export default {
  name: 'Footer',
  data () {
    return {
      timeTxt: ''
    }
  },
  methods: {
    getTimeStamp () {
      let day = moment(moment()).diff('2019-05-07', 'day')
      let hour = moment(moment()).diff('2019-05-07', 'hour') % 24
      let minute = moment(moment()).diff('2019-05-07', 'minutes') % 60
      let second = moment(moment()).diff('2019-05-07', 'seconds') % 60
      this.timeTxt = `${day}天${hour}小时${minute}分${second}秒`
      setInterval(() => {
        this.getTimeStamp()
      }, 1000)
    }
  },
  created () {
    this.getTimeStamp()
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
