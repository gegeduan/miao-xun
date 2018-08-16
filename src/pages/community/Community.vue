<template>
  <div>
    <community-header></community-header>
    <community-find></community-find>
    <community-search></community-search>
    <community-blog></community-blog>
  </div>
</template>

<script>
import CommunityHeader from './components/Header'
import CommunityFind from './components/Find'
import CommunitySearch from './components/Search'
import CommunityBlog from './components/Blog'
export default {
  name: 'Community',
  components: {
    CommunityHeader,
    CommunityFind,
    CommunitySearch,
    CommunityBlog
  }
}
</script>

<style scoped lang="stylus">

</style>
