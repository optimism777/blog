<template>
  <div class="banner">
    <p>Hi, Wang XiaoFang</p>
    <h3>自律态度，爱生活</h3>
    <button @click="getTime">定时器</button>
    <p>{{timeDate}}</p>
    <div class="nav" v-title="bg">
      <ul>
        <li v-title>
          首页
        </li>
        <li>
          归档
        </li>
         <li>
          分类
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  directives: {
    title: {
      bind (el, bindings) {
        console.log('bind')
        el.style.backgroundColor = bindings.value
      },
      update () {
        console.log('update')
      },
      unbind () {
        console.log('unbind')
      }
    }
  },
  data () {
    return {
      timeTxt: '',
      bg: '#fff',
      timeDate: 10
    }
  },
  methods: {
    setIntervalFun () {
      this.timeDate--
    },
    getTime () {
      console.log(7777)
      let timer = setInterval(() => {
        this.setIntervalFun()
        if (this.timeDate <= 0) {
          clearInterval(timer)
          timer = null
        }
      }, 1000)
    }
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>
