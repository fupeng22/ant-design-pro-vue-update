<template>
  <div>
    <show-pl :t8Id="this.t8Id" :biId="this.biId" ref="showplchild"></show-pl>
  </div>
</template>
<script>
import ShowPl from '@/components/Trade/ShowPl'
export default {
    name: 'ShowPLPage',
    components: {
      ShowPl
    },
    data () {
        return {
            biId: this.$route.query.biId,
            t8Id: this.$route.query.t8Id
        }
    },
    activated () {
      debugger
      this.$refs.showplchild.queryBAppT81()
    },
    mounted () {
      debugger
      this.$refs.showplchild.queryBAppT81()
    }
}
</script>
<style lang="less">
</style>
