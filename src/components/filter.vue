<template>
    <div class="filter-pane">
        <div @click="toggleActive">
            <a href="#" data-button="all">ALL</a>
            <a href="#" data-button="todo">TODO</a>
            <a href="#" data-button="done">DONE</a>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {

        },
        methods:{
          toggleActive:function(ev){
            switch (ev.target){
              case 'all':
                break;
              case 'todo':
                break;
              case 'done':
                break;
            }
          }
        }
    }
</script>

<style lang="stylus">
  .filter-pane
      a
        background #ddd
        text-decoration none
        color #333
        padding 5px 10px
</style>
