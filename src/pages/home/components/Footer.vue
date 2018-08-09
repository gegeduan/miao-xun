<template>
  <div class="footer-wrapper">
     <div class="footer">
       <div class="footer-left">
         <div class="logo">LOGO</div>
       </div>
       <div class="footer-contact">
         <div class="box">
           <h3>联系我们CONTACT</h3>
           <p>E-mail:xxxxxxxxxx@xx.com</p>
           <p>QQ:xxxxxxxxxx</p>
           <p class="copy">Copyright 2018-2018 公益猫 版权所有 .</p>

       </div>
       </div>
       <div class="footer-right">
         <div class="footer-right-box">
           <h3>微信公众号</h3>
           <div class="weixin"></div>
           <p>扫一扫,我们一起养猫 .</p>
       </div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style scoped lang="stylus">
  .footer-wrapper
   width:1920px
   height:200px
   background:#fc8d59
   .footer
    width:1280px
    margin:0 auto
    display:flex
    .footer-left,.footer-contact
      padding-top:10px
      width: 33.3%
      height:200px
      .logo
       width:150px
       height:150px
       font-size:40px
       color:#807570
       margin:10px auto
       text-align:center
       line-height:150px
       background:#cfa28c
    .footer-contact
      color:#fff
      padding-left:60px
      .box
       margin:10px auto
       .copy
        margin-top:80px
     .footer-right
       color:#fff
       .footer-right-box
         margin-left:60px
        .footer-right-box h3
         padding-left:20px
        .weixin
          width:150px
          height:150px
          font-size:40px
          color:#807570
          text-align:center
          line-height:150px
          background:#cfa28c
</style>
