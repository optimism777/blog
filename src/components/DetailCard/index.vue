<template>
  <div class="detail-card">
    <div class="card-container">
      <div class="detail-top">
        <img src="@/assets/img/bg.png" alt="">
      </div>
      <div class="detail-description">
        <p>关于 JavaScript 数组乱序的方法有多种实现方式，或者借助一些第三方开源工具库如 loadsh 也可以轻松实现，然而要做到数组足够的无规律乱序也非易予，还是有一些要点需要考虑。</p>
      </div>
      <div class="detail-content">
        <p>关于 JavaScript 数组乱序的方法有多种实现方式，或者借助一些第三方开源工具库如 loadsh 也可以轻松实现，然而要做到数组足够的无规律乱序也非易予，还是有一些要点需要考虑。</p>
         <p>关于 JavaScript 数组乱序的方法有多种实现方式，或者借助一些第三方开源工具库如 loadsh 也可以轻松实现，然而要做到数组足够的无规律乱序也非易予，还是有一些要点需要考虑。</p>
      </div>
      <div class="category-content">
        <div class="prev">
          上一篇: {{prevTitle}}
        </div>
        <div class="next">
          下一篇: {{nextTitle}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCard',
  data () {
    return {
      prevTitle: 'Git常用命令整理',
      nextTitle: '服务器的简单搭建'
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
