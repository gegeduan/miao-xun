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
        <button class="login">登录</button>
        <button class="register">注册</button>
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
    width:70px
    height:30px
    border-radius:5px
    background :pink
    color:#fff
  .nav-content ul li
    margin-left:40px
    line-height :50px
</style>
