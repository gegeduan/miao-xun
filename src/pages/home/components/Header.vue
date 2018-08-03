<template>
    <div class="nav">
      <div class="nav-left">
        <div class="nav-left-logo"></div>
        <img class="nav-left-img">
      </div>
      <div class="nav-content">
        <ul>
          <li>首页</li>
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
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped lang="stylus">
.nav
  padding:0
  width:1800px
  height:50px
  background:pink
  display:flex
  .nav-content
    padding:0 30px
    width:50%
    line-height 50px
  .nav-content ul
    display:flex
    background: pink
  .nav-left-logo
    margin:0 10px
    width:50px
    height:50px
    border-radius:25px
    background:green
  .login,.register
    display:inline-block
    width:70px
    height:30px
    line-height:30px
    border-radius:5px
    text-align:center
    background :orange
    color:#fff
  .nav-content ul li
    margin-left:40px
    line-height :50px
  .nav-right
   height:80px
   line-height:80px
   paddding:0
</style>
