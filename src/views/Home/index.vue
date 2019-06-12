<template>
  <div class="home">
    <Header></Header>
    <Banner></Banner>
    <Content></Content>
    <Article></Article>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import Content from '@/components/Content'
import Article from '@/components/Article'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Banner,
    Content,
    Article
  }
}
</script>
