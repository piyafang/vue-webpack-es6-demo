<template>
  <div class="app">
    <h1><img :src="logoUrl" alt="" width="30" height="30" /> {{appTitle}}</h1>
    <my-item-add :title.sync="itemTitle" :place-holder="placeHolder"></my-item-add>
    <div class="tabs">
      <p class="info-text">
        {{listCount}} todo(s) remain
      </p>
      <my-item-filter></my-item-filter>
    </div>
    <ul class="list">
      <my-item-list :lists="filteredTodos"></my-item-list>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

  import MyItemAdd from './../components/input.vue';
  import MyItemList from './../components/list.vue';
  import MyItemFilter from './../components/filter.vue';
  import TodoStorage from 'babel!./../common/store';
  import LogoImg from 'url!./../assets/logo.png';

  export default {
    data(){
      return{
        appTitle:'TODO LIST',
        itemTitle:'',
        itemList:TodoStorage.fetch(),
        filteredTodos:[],
        visibility:'all',
        logoUrl:LogoImg,
        placeHolder:'type your title here...'
      }
    },
    computed:{
      listCount () {
        return this.itemList.filter(function(todo){
          return todo.done == false;
        }).length;
      },
      filteredTodos(){
        let tab = this.visibility;
        return tab == 'all' ? this.itemList: this.itemList.filter(function(todo){
          return tab == 'todo' ? todo.done == false : todo.done == true;
        });
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
  *
      box-sizing border-box
  .app
      margin 0 auto
      width 600px
      @media screen and (max-width: 600px)
        width 100%
  h1
      text-align center
  input,button
      background none
      border 1px solid #999
      padding 5px 10px
      color #999
      line-height 3
  .list
      width 100%
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
