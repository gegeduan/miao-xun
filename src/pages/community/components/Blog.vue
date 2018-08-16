<template>
    <div class="blog-wrapper">
       <div class="blog">
         <div class="blog-content">
          <div class="blog-content-title">
            <img class="blog-content-title-img" src="@/imgs/law.png">
            <h3>标题:xxxxxxxxxxxxxx</h3>
            <div class="blog-content-title-date">2018年08月15日</div>
          </div>
          <div class="blog-content-des">
            <div class="wrapper">
              <div class="box">
              <p class="des-text">
                你个话痨小孩！说实话我觉得活泼张扬、清新单纯的你是还不错，
                就像肯德基柚香鸡腿堡，柚子酱搭配烤鸡腿，酸甜鲜嫩，另外你的约定我勉强答应了。
              </p>
                <p class="detail-btn">查看全文</p>
            </div>
              <div class="picture">
               <img class="pic-img" src="@/imgs/cat.png"/>
                </div>
          </div>
            <div class=" apply">申请成为它的主人</div>
            <ul>
              <li class="iconfont collect">&#xe703; <span class="collect-number">53</span></li>
              <li class="iconfont comment">&#xe640; <span class="comment-number">53</span></li>
              <li class="iconfont consent">&#xe600; <span class="consent-number">53</span></li>
            </ul>
          </div>
          </div>
         <div class="show-comment" v-show="!show">
           <div class="comment-box">
             <div class="avatar">
               <img class="avatar-img" src="@/imgs/avatar.png">
             </div>
             <input type="text" placeholder="说点什么...">
             <div class="comment-btn">评论</div>
           </div>
           <div class="comment-boxs" >
             <div class="avatar">
               <img class="avatar-img" src="@/imgs/avatar.png">
             </div>
             <div class="comment-content">
               <div class="nickName">不将就的皮皮猫:</div>
               <p class="comment-text">床前明月光,疑是地上霜.举头望明月,低头思故乡.</p>
               <div class="comment-bottom">
               <div class="date">今天12:48</div>
                 <div class="reply-btn">回复</div>
             </div>
             </div>
           </div>
         </div>
         </div>
    </div>
</template>

<script>
export default {
  name: 'CommunityBlog',
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped lang="stylus">
  @import'~styles/varibles.styl'
  .blog-wrapper
    width: 100%
    .blog
      width:1280px
      margin:0 auto
      margin-bottom:400px
      padding-top:60px
      .blog-content
       width:996px
       margin:0 auto
       border:2px solid #ccc
      .blog-content-title
        padding-top:8px
       .blog-content-title h3
        font-size:20px
        display:inline-block
        color:#666
        line-height:22px
      .blog-content-title-date
        float:right
        margin-right:16px
        font-size:12px
        line-height:22px
        color:#8c8c8c
    .blog-content-des
     position:relative
     padding-top:15px
     padding-left:28px
     .des-text
      display:inline-block
      width:715px
      text-indent:22px
      font-size:14px
      color: #666
   .box
     position:relative
     .detail-btn
       position:absolute
       top:160px
       left:650px
       font-size:14px
       color:#fc9463
   .wrapper
     display:flex
    .picture
      float:right
      width:180px
      height:180px
      margin-left:52px
      border-radius:5px
      background:cornflowerblue
      .pic-img
       width;100%
       height:100%
   .apply
     width:180px
     height:40px
     margin-left:50px
     margin-bottom:10px
     line-height:40px
     border-radius:5px
     font-size:16px
     font-weight:bold
     color:#fff
     text-align:center
     background:$bgColor
  .blog-content-des ul
   position:absolute
   left:630px
   top:210px
   display:flex
  .blog-content-des ul li
   padding-left:60px
   line-height:16px
   font-size:18px
   color:#a9a9a9
  .blog-content-des ul li span
    display:inline-block
    position:relative
    bottom:3px
    line-height:16px
    font-size:12px
  .show-comment
    padding-top:18px
    .comment-box
     display:flex
     width:996px
     margin:0 auto
     padding-left:10px
     padding-bottom:20px
     border-bottom:2px solid #ccc
    .comment-box .avatar
     width:30px
     height:30px
     border-radius:15px
     background:cornflowerblue
   .avatar-img
     width: 100%
     height:100%
  .comment-box input
   padding-left:5px
   color:#ccc
   display:block
   width:860px
   height:30px
   margin-left:10px
   border:1px solid #ccc
 .comment-btn
   width:40px
   height:30px
   margin-left:20px
   line-height:30px
   border-radius:5px
   font-size:12px
   color: #ffffff
   text-align:center
   background:$bgColor
  .comment-boxs
    display:flex
    width:996px
    margin:0 auto
    padding-left:10px
    padding-top:10px
    border-bottom:1px solid #ccc
  .comment-boxs .avatar
    width:30px
    height:30px
    border-radius:15px
    background:cornflowerblue
  .comment-content
   margin-left:10px
   .nickName,.comment-text
    font-size:12px
    display:inline-block
   .nickName
     color:#fdaa83
   .comment-text
     color:#999
   .comment-bottom
      padding-bottom:10px
   .date
    display:inline-block
    padding-top:5px
    color:#797979
   .reply-btn
    margin-left:850px
    display:inline-block
    color:#797979
</style>
