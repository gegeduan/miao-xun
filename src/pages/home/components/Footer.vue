<template>
  <div class="footer-wrapper">
     <div class="footer">
       <div class="footer-logo"></div>
       <div class="footer-contact"></div>
       <div class="weixin"></div>
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
    .footer-logo,.footer-contact,.weixin
      width: 33.3%
      height:200px
      border:1px solid #666
</style>
