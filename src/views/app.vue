<template>
  <div style="margin:0 auto;width:600px;">
    <h1>{{appTitle}}</h1>
    <my-item-add :title.sync="itemTitle" :place-holder="placeHolder"></my-item-add>
    <div class="tabs">
      <p class="info-text">
        当前共有{{listCount}}条todos
      </p>
      <my-item-filter></my-item-filter>
    </div>
    <ul class="list">
      <my-item-list :lists="itemList"></my-item-list>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

  import MyItemAdd from './../components/input.vue';
  import MyItemList from './../components/list.vue';
  import MyItemFilter from './../components/filter.vue';
  import TodoStorage from 'babel!./../common/store';

  export default {
    data(){
      return{
        appTitle:'Todo List',
        itemTitle:'',
        itemList:TodoStorage.fetch(),
        visibility:'all',
        placeHolder:'type your title here...'
      }
    },
    computed:{
      listCount () {
        return this.itemList.length;
      }
    },
    ready(){
      this.$on('filter-toggle',function(tab){
        this.visibility = tab;
      })
      this.$on('todo-add',function(todo){
        this.itemList.push(todo);
      })
    },
    watch:{
      itemList:{
        handler (lists) {
          TodoStorage.save(lists);
        },
        deep:true
      }
    },
    components:{
      MyItemAdd,
      MyItemList,
      MyItemFilter
    }
  }

</script>

<style lang="stylus">
  h1
      text-align center
  input,button
      background none
      border 1px solid #999
      padding 5px 10px
      color #999
      line-height 3
  .list
      width 600px
      background #666
      list-style none
      padding 0
  .tabs
      overflow hidden
      border-bottom 1px solid #ddd
      vertical-align bottom
  .info-text
      color #999
      font-size 14px
      display inline-block
      width 68%
</style>
