<template>
  <div style="margin:0 auto;width:600px;">
    <my-item-add :title.sync="itemTitle" :place-holder="placeHolder"></my-item-add>
    <ul class="list">
      <my-item-list :lists="itemList"></my-item-list>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

  import * as MyItemAdd from './input.vue';
  import * as MyItemList from './list.vue';

  export default {
    data(){
      return{
        itemTitle:'',
        itemList:[{name:'first item',editable:false}],
        placeHolder:'type your title here...'
      }
    },
    ready(){
    },
    components:{
      MyItemAdd,
      MyItemList
    }
  }

</script>

<style lang="stylus">
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
