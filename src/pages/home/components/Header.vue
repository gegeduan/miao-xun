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
      <div class="nav-right" v-show="!show">
        <div class="login">登录</div>
        <div class="register">注册</div>
      </div>
      <div class="nav-right-active" v-show="show">
        <div class="avatar"></div>
        <span class="name">Susie</span>
        <span class="iconfont icon">&#xe63b;</span>
        <span class="info-number">17</span>
      </div>
    </div>
    <div class="banner">
      <div class="find">
        <img src="@/imgs/find.png">
      </div>
      <div class="publish">
        <img  class="publish-img1" src="@/imgs/publish.png">
        <img class="publish-img" src="@/imgs/publish1.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      show: true
    }
  }
}
</script>

<style scoped lang="stylus">
  @import'~styles/varibles.styl'
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
       background:$bgColor
   .nav-right
     display:flex
     margin:10px 0 10px 460px
     line-height:50px
   .nav-right-active
     position:relative
     dispaly:flex
     font-size:14px
     color:#666
     margin:10px 0 10px 400px
     .avatar
      display:inline-block
      width:30px
      height:30px
      border-radius:15px
      background:#4575b4
     .name
      position:relative
      left:3px
      bottom:8px
      display:inline-block
     .info-number
      position:relative
      right:43px
      bottom:15px
      display:inline-block
      width:30px
      height:20px
      font-size:10px
      text-align:center
      color: #fff
      background:#fc8d59
     .icon
      position:relative
      display:inline-block
      font-size:25px
      right:8px
      bottom:5px
      color:#ccc
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
   .publish-img1
     display:inline-block
     padding-bottom:35px
    .publish-img
     display:inline-block
     margin-top:40px
</style>
