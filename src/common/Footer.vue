<template>
  <footer class="footer">
    <div class="footer-warp">
      <div class="footer-logo">
        <img src="" alt="" style="height: 8rem;width: 8rem;">
      </div>
      <div class="contact-us-info">
        <ul>
          <li>联系我们 CONTACT</li>
          <li>E-mail:XXXXXX@XXX.com</li>
          <li>QQ:XXXXX</li>
        </ul>
      </div>
      <div class="footer-wx">
        <h4>微信公众号</h4>
        <img src="" alt="" class="QR-img">
        <p>扫一扫， 我们一起来养猫</p>
      </div>
      <p class="copyright">Copyright © 2018-2018 公益猫版权所有.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CommonFooter'
}
</script>

<style>
  .footer{
    position: relative;
    background: #fc8d59;
    color: #fff;
    text-align: center;
    padding: .5rem 0;
    flex:none;
  }
  .footer-warp{
    display: flex;
    width: 1140px;
    margin: 0 auto;
  }
  .footer-warp>div{
    width: 100%;
    border-right: 1px solid #fff;
  }
  .footer-warp .footer-wx{
    border-right: 0;
  }
  .footer-logo{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer .contact-us-info ul{
    margin: 0;
    padding-left: 3rem;
  }
  .footer .contact-us-info li{
    text-align: left;
    font-size: .9rem;
    list-style-type: none;
  }
  .footer .contact-us-info li:first-child{
    margin-bottom: .8rem;
  }
  .footer .copyright{
    margin: 0;
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    font-size: .8rem;
  }
  .footer .footer-wx h4{
    margin: -4px 0 6px 0;
    font-size: .9rem;
    font-weight: normal;
  }
  .footer .footer-wx p{
    margin: 0;
    font-size: 12px;
  }
  .footer .QR-img{
    width: 8rem;
    height: 8rem;
  }
</style>
