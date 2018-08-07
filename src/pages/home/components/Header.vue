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
    <div class="banner">
      <div class="find">
        <div class="find-icon">此处是一张喇叭图片</div>
        <div class="find-img">报告组织,发现喵星人的足迹!!!</div>
      </div>
      <div class="publish">
        <div class="publish-button">发布喵星人</div>
        <div class="publish-img">此处一张喵星人合影</div>
      </div>
    </div>
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
      padding:5px 200px
    .nav-left
     display:inline-block
     width:240px
     .nav-left-logo
      margin:10px 5px
      display:inline-block
      width:50px
      height:50px
      border-radius:25px
      background:orange
    .nav-left-title
     position:relative
     top:20px
     left:0
     right:160px
     bottom:0
     color:orange
     display:inline-block
     float:right
    .nav-list
     margin-left:30px
     position:relative
     top:-30px
     right:0
     left:0
     bottom:0
     height:80px
     display:inline-block
     .nav-list-first
       color: #ffffff
       background:orange
    .nav-list ul
      height:80px
      display :flex
    .nav-list ul li
     font-size:16px
     padding:0 40px
     line-height:60px
  .nav-right
    margin-left:40px
    position:relative
    top:-30px
    right:0
    left:0
    bottom:0
    height:80px
    display:inline-block
    padding:0 10px
   .login ,.register
    margin:5px 20px
    width:70px
    height:25px
    display:inline-block
    color:#fff
    border-radius:5px
    line-height:25px
    text-align:center
    background:orange
   .banner
    width:100%
    height:300px
    padding:5px 200px
    background:green
  .find-icon
    width:70px
    height:70px
    text-align:center
    background:#eee
</style>
