//Todo filter components

<template>
    <div class="filter-pane">
        <div>
            <a href="#" v-for="tab in activeTabs"  @click="toggleFilter(tab)" :class="{active:tab.active}">{{tab.type | uppercase}}</a>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        computed:{
          tabs(){
            let tabs = [];
            ['all','todo','done'].forEach(function(tab){
              tabs.push({
                type:tab,
                active:false
              });
            })
            return tabs;
          },
          activeTabs(){
            let type = this.tab;
            return this.tabs.map(function(tab){
              tab.type == type ? tab.active = true : tab.active = false;
              return tab;
            });
          }
        },
        props:['tab'],
        methods:{
          toggleFilter:function(tab){
            this.$dispatch('filter-toggle',tab.type);
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .filter-pane
      vertical-align middle
      a
        text-decoration none
        color #ddd
        padding 5px 10px
        font-size 12px
        margin-left 2px
        &:hover
          outline 1px solid #ddd
        &.active
          color #34495e
          outline 1px solid #34495e
</style>
