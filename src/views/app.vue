<template>
  <div class="app">
    <h1>{{appTitle}}</h1>
    <my-item-add :title.sync="itemTitle" :place-holder="placeHolder"></my-item-add>
    <div class="tabs">
      <p class="info-text" v-show="listCount > 0">
        {{listCount}} todos remain
      </p>
      <p class="info-text" v-show="listCount === 0">
        No todos
      </p>
      <my-item-filter :tab="visibility"></my-item-filter>
    </div>
    <ul class="list">
      <my-item-list :lists="filteredTodos"></my-item-list>
    </ul>
    <my-footer></my-footer>
  </div>
</template>

<script type="text/ecmascript-6">

  import MyItemAdd from './../components/input.vue';
  import MyItemList from './../components/list.vue';
  import MyItemFilter from './../components/filter.vue';
  import MyFooter from './../components/footer.vue';
  import TodoStorage from 'babel!./../common/store';

  export default {
    data(){
      return{
        appTitle:'TODO LIST',
        itemTitle:'',
        itemList:TodoStorage.fetch(),
        filteredTodos:[],
        visibility:'all',
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
        return tab == 'all' ?
            this.itemList
            :
            this.itemList.filter(function(todo){
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
      MyItemFilter,
      MyFooter
    }
  }

</script>

<style lang="stylus">
  *
      box-sizing border-box
  body
      color #95a5a6
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
      display flex
      flex-direction row
      align-items center
  .info-text
      color #999
      font-size 14px
      flex auto
      width 68%
</style>
