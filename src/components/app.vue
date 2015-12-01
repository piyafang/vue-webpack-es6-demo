<template>
  <div style="margin:0 auto;width:600px;">
    <h1>{{appTitle}}</h1>
    <my-item-add :title.sync="itemTitle" :place-holder="placeHolder"></my-item-add>
    <ul class="list">
      <my-item-list :lists="itemList"></my-item-list>
    </ul>
    <my-item-filter></my-item-filter>
  </div>
</template>

<script type="text/ecmascript-6">

  import MyItemAdd from './input.vue';
  import MyItemList from './list.vue';
  import MyItemFilter from './filter.vue';

  export default {
    data(){
      return{
        appTitle:'Todo List',
        itemTitle:'',
        itemList:[{name:'first item',editable:false}],
        placeHolder:'type your title here...'
      }
    },
    ready(){
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
</style>
