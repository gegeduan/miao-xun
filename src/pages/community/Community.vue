<template>
  <div>
    <community-header></community-header>
    <community-find></community-find>
  </div>
</template>

<script>
import CommunityHeader from './components/Header'
import CommunityFind from './components/Find'
export default {
  name: 'Community',
  components: {
    CommunityHeader,
    CommunityFind
  }
}
</script>

<style scoped lang="stylus">

</style>
