//Todo filter components

<template>
    <div class="filter-pane">
        <div>
            <a href="#" v-for="tab in filterTab"  @click="toggleFilter(tab,$event)">{{tab | uppercase}}</a>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
          return {
            filterTab:['all','todo','done']
          }
        },
        methods:{
          toggleFilter:function(tab,ev){
            this.$dispatch('filter-toggle',tab);
          }
        }
    }
</script>

<style lang="stylus">
  .filter-pane
      display inline-block
      text-align right
      a
        text-decoration none
        color #ddd
        padding 5px 10px
        &.active
          color #333
</style>
