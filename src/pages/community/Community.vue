<template>
  <div>
    <community-header></community-header>
    <community-find></community-find>
    <community-search></community-search>
  </div>
</template>

<script>
import CommunityHeader from './components/Header'
import CommunityFind from './components/Find'
import CommunitySearch from './components/Search'
export default {
  name: 'Community',
  components: {
    CommunityHeader,
    CommunityFind,
    CommunitySearch
  }
}
</script>

<style scoped lang="stylus">

</style>
