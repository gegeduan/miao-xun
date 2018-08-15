<template>
    <div class="find-wrapper">
     <div class="find">
      <div class="find-left">
         <div class="left-title">
           <img  class="left-img" src="@/imgs/findl.png">
           <h3 class="left-text">发现喵星人</h3>
         </div>
        <div class="left-content">
            <div class="avatar"></div>
            <div class="btn">发现喵星人</div>
        </div>
      </div>
       <div class="find-right">
        <img src="@/imgs/findr.png">
       </div>
     </div>
    </div>
</template>

<script>
export default {
  name: 'CommunityFind'
}
</script>

<style scoped lang="stylus">
  .find-wrapper
    width: 100%
    .find
     display:flex
     width:1280px
     margin:0 auto
     padding-top:30px
     border-bottom:1px solid #d73027
     .left-text
      display:inline-block
      font-size:24px
      padding-left:18px
     .left-content
      display:flex
      padding-top:20px
      padding-left:64px
      .avatar
       width:100px
       height:100px
       border-radius:50px
       background:#ecc6c6
      .btn
       width:200px
       height:60px
       margin-top:20px
       margin-left:50px
       line-height:60px
       text-align:center
       font-size:24px
       color:#fff
       border-radius:5px
       background:#fc8d59
  .find-right
   margin-left:675px
  .find-left
   padding-left:40px
</style>
