<template>
  <div class="comment">
    <button class="btn">游客评论</button>
    <div class="comment-number">
      <span class="num">{{commentNum}}条评论</span>
    </div>
    <div class="comment-container">
      <div class="avator">
        <div></div>
      </div>
      <div class="get-comment">
        <textarea name="" id="" cols="100" rows="6" class="get-textarea" placeholder="说点什么">
        </textarea>
        <button class="submit">评论</button>
        <!-- <p>支持Markdown语法</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data () {
    return {
      commentNum: 10
    }
  }
}
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
