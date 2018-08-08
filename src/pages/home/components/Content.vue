<template>
  <div class="content-wapper">
      <div class="content">
      <div class="content-title">
        <div class="content-title-before"></div>
        <h2>寻找喵星人</h2>
        <div class="content-title-after"></div>
      </div>
        <div class="content-navigater">
            <div class="content-navigater-left">
             <label class="city">城市 <input type="text"></label>
              <div class="sex">
                <span>性别</span>
                <input type="radio" name="sex">公猫
                <input type="radio" name="sex">母猫
                <input type="radio" name="sex">不明
            </div>
            </div>
            <div class="content-navigater-middle">
              <label class="age">年龄 <input type="text"></label>
              <div class="health">
                <span>健康状况</span>
                <input type="radio" name="health">健康
                <input type="radio" name="health">一般
                <input type="radio" name="health">较弱
                <input type="radio" name="health">小疾
                <input type="radio" name="health">残疾
            </div>
            </div>
            <div class="content-navigater-right">
              <div class="reset">重置</div>
              <div class="search">搜索</div>
            </div>
          </div>
        <div class="content-list"></div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'HomeContent'
}
</script>

<style scoped lang="stylus">
  .content-wapper
    width:1920px
    .content
     width:1280px
     margin:0 auto
     padding:20px
     .content-title
       display:flex
       width: 400px
       height:25px
       margin:0 auto
       line-height 25px
     .content-title h2
       width:200px
       font-size:28px
       color:#666
       text-align:center
       vertical-align :middle
      .content-title-before,.content-title-after
       width:100px
       height:2px
       margin-top:11.5px
       background:#fc8d59
      .content-navigater
       margin-top:25px
       display:flex
       justify-content:center
       border-top:1px solid #d73027
       padding-top:15px
       .content-navigater-left
        padding-left:10px
       .content-navigater-middle
         margin-left:40px
       .content-navigater-right
        margin-left:330px
       .city,.age
        display:block
       .city input,.age input
        width:150px
        height:30px
        border:1px solid #91bfdb
        border-radius:10px
</style>
