<template>
  <div>
    <community-header></community-header>
    <community-find></community-find>
    <community-search></community-search>
    <community-blog></community-blog>
    <home-footer></home-footer>
  </div>
</template>

<script>
import CommunityHeader from './components/Header'
import CommunityFind from './components/Find'
import CommunitySearch from './components/Search'
import CommunityBlog from './components/Blog'
import HomeFooter from '@/common/Footer'
export default {
  name: 'Community',
  components: {
    CommunityHeader,
    CommunityFind,
    CommunitySearch,
    CommunityBlog,
    HomeFooter
  }
}
</script>

<style scoped lang="stylus">

</style>
