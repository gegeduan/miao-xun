<template>
<div class="search-wrapper">
  <div class="search">
   <div class="search-title">
        <img src="@/imgs/findl.png">
        <h2>寻找喵星人</h2>
   </div>
   <div class="search-content">
     <div class="search-conten-left">
       <label>城市<input type="text"></label>
       <div>
         <span>性别</span>
         <label><input type="radio">公猫</label>
         <label><input type="radio">母猫</label>
       </div>
     </div>
     <div class="search-conten-middle">
       <label>年龄段<input type="number"></label>
       <div>
         <span>性别</span>
         <label><input type="radio">健康</label>
         <label><input type="radio">一般</label>
         <label><input type="radio">较弱</label>
         <label><input type="radio">小疾</label>
         <label><input type="radio">残疾</label>
       </div>
     </div>
     <div class="search-conten-right">
       <div class="reset-btn">重置</div>
       <div class="seach-btn">搜索</div>
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
   width:100%
   .search
    width:1280px
    margin:0 auto
    background:green
    .search-content
     display:flex
</style>
