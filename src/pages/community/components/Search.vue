<template>
<div class="search-wrapper">
  <div class="search">
   <div class="search-title">
        <img src="@/imgs/findl.png">
        <h2>寻找喵星人</h2>
   </div>
   <div class="search-content">
     <div class="search-content-left">
       <label class=" la city"> 城市<input type="text"></label>
       <div class="sex">
         <span>性别</span>
         <label><input name="sex" type="radio">公猫</label>
         <label><input name="sex"  type="radio">母猫</label>
       </div>
     </div>
     <div class="search-content-middle">
       <label class=" la age"> 年龄段<input type="number"></label>
       <div class="health">
         <span>健康状况</span>
         <label><input name="health" type="radio">健康</label>
         <label><input name="health" type="radio">一般</label>
         <label><input name="health" type="radio">较弱</label>
         <label><input name="health" type="radio">小疾</label>
         <label><input name="health" type="radio">残疾</label>
       </div>
     </div>
     <div class="search-content-right">
       <div class="btn">重置</div>
       <div class="btn">搜索</div>
     </div>
   </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CommunitySearch'
}
</script>

<style scoped lang="stylus">
  .search-wrapper
   padding-top:30px
   width:100%
   .search
    padding-left:40px
    width:1280px
    margin:0 auto
   .search-title h2
    font-size:24px
    line-height:30px
    padding-left:20px
    display:inline-block
  .search-title
   padding-bottom:15px
  .search-content
   display:flex
   padding-left:15px
   .search-content-middle
     margin-left:95px
   .city,.age,.sex span,.health span
     font-size:20px
     color:#7498c7
   .sex label,.health label
     font-size:14px
     color:#a2bad9
  .sex,.health
    padding-top:10px
    padding-bottom:5px
   .sex label input,.health label input
    display:inline-block
    margin-left:10px
    width:20px
    height:20px
    margin-right:8px
    border-radius:3px
    appearance: none
    outline: 0 !important
    background:#e0f3f8
   .health input:checked,.sex input:checked
     background-color:cornflowerblue
   .city input,.age input
    display:inline-block
    margin-left:10px
    width:150px
    height:30px
    text-align:center
    appearance: none
    outline: 0 !important
    border-radius:10px
    border:1px solid #91bfdb
  .search-content-right
    margin-left:330px
    .btn
     margin-bottom:10px
     width:50px
     height:30px
     border-radius:5px
     font-size:14px
     color:#e1645d
     text-align:center
     border:1px solid #fc8d59
</style>
