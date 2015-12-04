<template lang="jade">
  div.app
    h1
      img.logo(:src="logoUrl",alt="")
      | {{appTitle}}
    my-item-add(:title.sync="itemTitle",:place-holder="placeHolder")
    div.tabs
      p.info-text(v-show="listCount > 0")
        | {{listCount}} todos remain
      p.info-text(v-show="listCount === 0")
        | No todos
      my-item-filter(:tab="visibility")
    ul.list
      my-item-list(:lists="filteredTodos")
    my-footer
</template>

<script type="text/ecmascript-6">
  import MyItemAdd from './../components/input.vue';
  import MyItemList from './../components/list.vue';
  import MyItemFilter from './../components/filter.vue';
  import MyFooter from './../components/footer.vue';
  // babel-loader 引入js
  import TodoStorage from 'babel!./../common/store';
  // url-loader 引入图片
  import LogoImg from 'url!./../assets/logo.png';

  export default {
    data(){
      return{
        appTitle:'TODO LIST',
        itemTitle:'',
        itemList:TodoStorage.fetch(),
        logoUrl:LogoImg,
        visibility:'all', // 默认过滤为all
        placeHolder:'type your title here...'
      }
    },
    computed:{
      // todo条数
      listCount () {
        return this.itemList.filter(function(todo){
          return todo.done == false;
        }).length;
      },
      // 过滤todos
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
    events:{
      // 切换过滤
      'filter-toggle'(tab){
        this.visibility = tab;
      },
      // 移除todo
      'todo-remove'(todo){
        this.itemList.$remove(todo);
      },
      // 添加todo
      'todo-add'(todo){
        this.itemList.push(todo);
        this.visibility = 'todo';
      }
    },
    watch:{
      // 本地ls储存todolist
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
      transition .2s
  body
      color #95a5a6
  .logo
      width 30px
      height 30px
      margin 0 5px
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
