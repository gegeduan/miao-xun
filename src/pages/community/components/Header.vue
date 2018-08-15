<template>
  <div class="header-wrapper">
    <div class="header">
     <div class="header-left">
     <img src="@/imgs/logo.png">
     </div>
     <div class="header-nav">
       <ul>
         <router-link
           tag="li"
           to="/"
         >
         首页
         </router-link>
         <li class="community-title">社区</li>
         <li>日记</li>
         <li>发布</li>
         <li>我的</li>
       </ul>
     </div>
     <div class="header-right">
       <div class="avatar"></div>
       <span>susie</span>
       <div class="info iconfont">&#xe63b;</div>
       <span class="info-number">17</span>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityHeader'
}
</script>

<style scoped lang="stylus">
  @import'~styles/varibles.styl'
  .header-wrapper
    width:100%
    .header
      margin:0 auto
      width:1280px
      display:flex
      height:50px
      .header-nav ul
        display:flex
      .header-nav ul li
       cursor:default
       padding:0 20px
       font-size:20px
       line-height:50px
      .community-title
        color: #ffffff
        background:$bgColor
    .header-right
      padding-left:420px
      line-height:50px
      font-size:20px
      .avatar,.info
       display:inline-block
      .info
        color: #666
        font-size:25px
      .info-number
       font-size:12px
       position:relative
       bottom:10px
       right:35px
       dispay:inline-block
       color:#fff
       background:$bgColor
      .avatar
       position:relative
       top:8px
       left:0
       bottom:0
       right:0
       width:30px
       height:30px
       border-radius:15px
       background:#4575b4
</style>
