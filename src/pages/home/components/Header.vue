<template>
  <div class="header">
    <div class="nav">
      <div class="nav-left">
        <img src="@/imgs/logo.png">
      </div>
      <div class="nav-list">
        <ul>
          <li class="homepage">首页</li>
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
        <img src="@/imgs/find.png">
      </div>
      <div class="publish">
        <img src="@/imgs/publish.png">
        <img class="publish-img" src="@/imgs/publish1.png">
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
    background:#fcd8d8
   .nav
     width:1280px
     height:50px
     margin:0 auto
     display:flex
     .nav-list ul
      display:flex
      margin-left:30px
     .nav-list ul li
      padding:0 20px
      text-align:center
      line-height:50px
      font-size:20px
     .homepage
       color: #ffffff
       background:#fc8d59
   .nav-right
     display:flex
     margin:10px 0 10px 460px
     line-height:50px
     .login,.register
      margin-left:15px
      width:50px
      height:30px
      border-radius:10px
      line-height:30px
      font-size:14px
      color:#fff
      text-align:center
      background:#fc8d59
  .banner
    width:1280px
    padding-top:55px
    margin:0 auto
   .find
    margin-left:135px
   .publish
    margin-top:5px
    margin-left:340px
    .publish-img
     display:inline-block
     margin-top:40px
</style>
