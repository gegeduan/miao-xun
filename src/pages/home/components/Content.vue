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
                <span>性别 </span>
                <input type="radio" name="sex"> 公猫
                <input type="radio" name="sex"> 母猫
                <input type="radio" name="sex"> 不明
            </div>
            </div>
            <div class="content-navigater-middle">
              <label class="age">年龄段 <input type="number"></label>
              <div class="health">
                <span>健康状况 </span>
                <input type="radio" name="health"> 健康
                <input type="radio" name="health"> 一般
                <input type="radio" name="health"> 较弱
                <input type="radio" name="health"> 小疾
                <input type="radio" name="health"> 残疾
            </div>
            </div>
            <div class="content-navigater-right">
              <button  class="reset">重置</button>
              <button class="search">搜索</button>
            </div>
          </div>
        <div class="content-list">
          <div class="content-item" v-for="(item, index) of list" :key="index">
          <div class="item-top">
            <img :src="item.imgUrl">
            <span class=" iconfont collect">&#xe703;</span>
          </div>
          <div class="item-bottom">
            <div class="avatar"></div>
            <span class="nick-name">{{item.nickName}}</span>
            <span class="iconfont praise">&#xe600;</span>
            <span class="iconfont criticism">&#xe640;</span>
          </div>
        </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'HomeContent',
  data () {
    return {
      list: [
        {
          nickName: 'ketty',
          imgUrl: ''
        },
        {
          nickName: 'happy',
          imgUrl: ''
        },
        {
          nickName: 'misy',
          imgUrl: 'http://img1.sc115.com/uploads/sc/jpg/144/18319.jpg '
        },
        {
          nickName: 'tony',
          imgUrl: ' http://pic3.16pic.com/00/25/78/16pic_2578667_b.jpg'
        },
        {
          nickName: 'maky',
          imgUrl: 'http://www.biaobaiju.com/uploads/20180211/01/1518283053-BsTljudyDK.png '
        },
        {
          nickName: 'kemi',
          imgUrl: 'http://img.juimg.com/tuku/yulantu/120614/188906-120614163U856.jpg'
        },
        {
          nickName: 'lily',
          imgUrl: ' http://old.bz55.com/uploads/allimg/121008/1-12100Q52J5.jpg'
        },
        {
          nickName: 'lucy',
          imgUrl: 'http://img02.tooopen.com/Downs/images/2010/8/1/sy_20100801110124385065.jpg'
        },
        {
          nickName: 'lucky',
          imgUrl: 'http://img17.3lian.com/d/file/201702/23/0b43900d038eb2a3fc31ed1d8cb1ae3f.jpg'
        },
        {
          nickName: 'honery',
          imgUrl: 'http://pic20.photophoto.cn/20110827/0035035951943657_b.jpg '
        },
        {
          nickName: 'ketty',
          imgUrl: 'http://img2.woyaogexing.com/2018/01/04/0199a0f3cf96a0b4%21600x600.jpg'
        },
        {
          nickName: 'jasper',
          imgUrl: 'http://pic39.photophoto.cn/20160620/1155116868658436_b.jpg '
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  .content-wapper
    width:100%
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
        text-align:center
        appearance :none
        outline: 0 !important
        border:1px solid #91bfdb
        border-radius:10px
       .city,.sex span,.age,.health span
        font-size:16px
        color:#666
      .health,.sex
        margin-top:15px
        margin-bottom:5px
        font-size:14px
        color:#aeaeae
       .health input,.sex input
        display: inline-block
        width: 20px
        height: 20px
        appearance: none
        background-color:#e0f3f8
        outline: 0 !important
        border-radius:3px
        margin-left:15px
      .health input:checked,.sex input:checked
        background-color:cornflowerblue
      .reset,.search
       display:block
       outline: 0 !important
       width:50px
       line-height:30px
       font-size:14px
       color:#fc8d59
       text-align:center
       background:#fff
       border:1px solid #fc8d59
       border-radius:5px
      .search
       margin-top:8px
     .content-list
      display:flex
      flex-direction:row
      justify-content :center
      flex-wrap:wrap
      align-items:center
      align-content:center
      padding-top:35px
      .content-item
       overflow:hidden
       padding:5px
       .item-top
        overflow:hidden
        position:relative
        width:278px
        height:324px
        color:#fee090
        border-radius:10px
        background:#e78686
      .item-top img
        width:100%
        height:100%
        z-index:2
        position:relative
        border-radius:10px
      .collect
       cursor:pointer
       z-index:10
       display:block
       float:right
       font-size:25px
       position:absolute
       top:10px
       bottom:330px
       right:0
       left:240px
      .item-bottom
       margin-top:10px
       padding-left:15px
       height:30px
       .avatar
        display:inline-block
        margin-right:5px
        width:30px
        height:30px
        border-radius:15px
        background:#e8c3c3
       .nick-name,.praise,.criticism
        display:inline-block
        position:relative
        height:30px
       .criticism,.praise
        cursor:pointer
        float:right
       .criticism
        right:5px
        top:7px
       .praise
        right:45px
        top:7px
       .nick-name
        bottom:10px
</style>
