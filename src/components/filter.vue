//Todo filter components

<template lang="jade">
    div.filter-pane
        div
            a(href="#",v-for="tab in activeTabs",@click="toggleFilter(tab)",:class="{active:tab.active}")
              | {{tab.type | uppercase}}
</template>

<script type="text/ecmascript-6">
    export default {
        // 继承自父组件的data
        props:['tab'],
        data(){
          return {
            // 标签
            tabs:[
              {type:'all',active:false},
              {type:'todo',active:false},
              {type:'done',active:false}
            ]
          }
        },
        computed:{
          // 激活的标签
          activeTabs(){
            let type = this.tab;
            return this.tabs.map(function(tab){
              tab.type == type ? tab.active = true : tab.active = false;
              return tab;
            });
          }
        },
        methods:{
          // 切换
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
