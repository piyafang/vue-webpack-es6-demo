//Todo filter components

<template>
    <div class="filter-pane">
        <div>
            <a href="#" v-for="tab in filterTab"  @click="toggleFilter(tab,$event)" :class="{active:tab.active}">{{tab.type | uppercase}}</a>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
          return {
            filterTab:[
              {type:'all',active:false},
              {type:'todo',active:false},
              {type:'done',active:false}
            ]
          }
        },
        props:['tab'],
        ready () {
            let type = this.tab;
            this.filterTab.forEach(function(tab){
              if(tab.type == type) return tab.active = true;
            });
        },
        methods:{
          toggleFilter:function(tab,ev){
            this.$dispatch('filter-toggle',tab.type);
            this.filterTab.map(function(tab){
              return tab.active = false;
            });
            tab.active = true;
          }
        }
    }
</script>

<style lang="stylus">
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
