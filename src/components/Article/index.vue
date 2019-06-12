<template>
  <div class="article">
  <ul>
    <!-- <router-link to="/detail"> -->
      <li class="article-list" @click="goToDetail">
        <div class="img-div">
          <a href="">
            <img src="@/assets/img/avator.png" alt="" class="imga">
          </a>
        </div>
        <div class="content-div">
          <a href="" class="title">
            <span>服务器简单搭建操作</span>
          </a>
          <a href="" class="content">
            <span>工作中一般都是前后端分离，很少关注后端的操作实现，所以想借助空闲时间学些后端知识。本想捡起在大学期间学过的MySQL知识，不过到现在已经忘得差不多了。最近看到MongoDB这个数据库对JavaScript支持很友好，并且支持的数据结构非常松散，是类似json的bson格式，可以存储比较复杂的数据类型。我觉得值得尝试学习下。😎后端分离，很少关注后端的操作实现，所以想借助空闲时间学些后端知识。本想捡起在大学期间学过的MySQL知识，不过到现在已经忘得差不多了。最近看到MongoDB这个数据库对JavaScript支持很友好，并且支持的数据结构非常松散，是类似json的bson格式，可以存储比较复杂的数据类型。我觉得
            </span>
          </a>
          <div class="bottom-div">
            <span>随笔札记-王晓芳</span>
            <span>2019-05-08</span>
            <span>222次浏览</span>
            <span>13条评论</span>
          </div>
        </div>
    </li>
    <!-- </router-link> -->
     <li class="article-list" @click="goToDetail">
      <div class="img-div">
        <a href="">
          <img src="@/assets/img/avator.png" alt="" class="imga">
        </a>
      </div>
      <div class="content-div">
        <a href="" class="title">
          <span>服务器简单搭建操作</span>
        </a>
        <a href="" class="content">
          <span>工作中一般都是前后端分离，很少关注后端的操作实现，所以想借助空闲时间学些后端知识。本想捡起在大学期间学过的MySQL知识，不过到现在已经忘得差不多了。最近看到MongoDB这个数据库对JavaScript支持很友好，并且支持的数据结构非常松散，是类似json的bson格式，可以存储比较复杂的数据类型。我觉得值得尝试学习下。😎后端分离，很少关注后端的操作实现，所以想借助空闲时间学些后端知识。本想捡起在大学期间学过的MySQL知识，不过到现在已经忘得差不多了。最近看到MongoDB这个数据库对JavaScript支持很友好，并且支持的数据结构非常松散，是类似json的bson格式，可以存储比较复杂的数据类型。我觉得
          </span>
        </a>
        <div class="bottom-div">
          <span>随笔札记-王晓芳</span>
          <span>2019-05-08</span>
          <span>222次浏览</span>
          <span>13条评论</span>
        </div>
      </div>
    </li>
     <li class="article-list" @click="goToDetail">
      <div class="img-div">
        <a href="">
          <img src="@/assets/img/avator.png" alt="" class="imga">
        </a>
      </div>
      <div class="content-div">
        <a href="" class="title">
          <span>服务器简单搭建操作</span>
        </a>
        <a href="" class="content">
          <span>工作中一般都是前后端分离，很少关注后端的操作实现，所以想借助空闲时间学些后端知识。本想捡起在大学期间学过的MySQL知识，不过到现在已经忘得差不多了。最近看到MongoDB这个数据库对JavaScript支持很友好，并且支持的数据结构非常松散，是类似json的bson格式，可以存储比较复杂的数据类型。我觉得值得尝试学习下。😎后端分离，很少关注后端的操作实现，所以想借助空闲时间学些后端知识。本想捡起在大学期间学过的MySQL知识，不过到现在已经忘得差不多了。最近看到MongoDB这个数据库对JavaScript支持很友好，并且支持的数据结构非常松散，是类似json的bson格式，可以存储比较复杂的数据类型。我觉得
          </span>
        </a>
        <div class="bottom-div">
          <span>随笔札记-王晓芳</span>
          <span>2019-05-08</span>
          <span>222次浏览</span>
          <span>13条评论</span>
        </div>
      </div>
    </li>
  </ul>
  </div>
</template>

<script>
// import { getArticle } from '@/api/request'
export default {
  name: 'Content',
  data () {
    return {
      timeTxt: ''
    }
  },
  methods: {
    goToDetail () {
      this.$router.push({ name: 'Detail', path: '/detail' })
    },
    goToAbout () {
      this.$router.push({ name: 'About' })
    }
  },
  created () {
    // getArticle()
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
