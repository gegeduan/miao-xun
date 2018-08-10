<template>
  <div>
    <home-header></home-header>
    <home-content></home-content>
    <common-footer></common-footer>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeContent from './components/Content'
import CommonFooter from '@/common/Footer'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeContent,
    CommonFooter
  }
}
</script>

<style scoped lang="stylus">

</style>
