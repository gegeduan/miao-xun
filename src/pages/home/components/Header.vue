<template>
  <div class="header">
    <div class="nav">
      <div class="nav-left">
        <div class="nav-left-logo"></div>
        <div class="nav-left-title">
            <h3 class="title-top">公益猫</h3>
            <p class="title-bottom">每只猫都值得被爱.为ta寻找港湾</p>
        </div>
      </div>
      <div class="nav-list">
        <ul>
          <li class="nav-list-first">首页</li>
          <li>社区</li>
          <li>日记</li>
          <li>发布</li>
          <li>我的</li>
        </ul>
      </div>
      <div class="nav-right">
        <div class="login">登录</div>
        <div class="register">注册</div>
      </div>
    </div>
    <div class="banner"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped lang="stylus">
  .header
    width:1920px
    height:380px
    background:lightpink
    .nav
      width: 100%
      height:80px
      padding:5px 300px
      background:green
      .nav-left
       display:inline-block
       width:240px
       background:red
       .nav-left-logo
        width:50px
        height:50px
        border-radius:25px
        background:orange
      .nav-left-title
       float:right
       background:yellow
</style>
