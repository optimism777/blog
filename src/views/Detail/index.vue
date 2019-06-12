<template>
  <div class="detail">
    <!-- <img src="@/assets/img/bg.png" alt=""> -->
    <Banner></Banner>
    <DetailCard></DetailCard>
    <Comment></Comment>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import DetailCard from '@/components/DetailCard'
import Comment from '@/components/Comment'
export default {
  name: 'Detail',
  components: {
    Banner,
    DetailCard,
    Comment
  }
}
</script>

<style lang="less" scoped>
.detail{
  width: 100%;
  height: 100%;
  // background: url('~@/assets/img/bg.png') no-repeat;
  // background-attachment: fixed;
  img{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }
}
</style>
