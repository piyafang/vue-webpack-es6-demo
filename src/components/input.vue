<template>
    <form v-on:submit="add" class="input-form">
        <input type="text" placeholder="{{placeHolder}}" v-model="title">
        <button type="submit">ADD</button>
    </form>
</template>

<script type="text/ecmascript-6">
    export default {
      props: ['title','placeHolder'],
      methods:{
        add(ev){
          ev.preventDefault();
          if(this.title.trim()){
            this.$dispatch('todo-add',{name:this.title,editable:false,done:false});
          }
          this.title = "";
        }
      }
    }
</script>

<style lang="stylus">
    .input-form
        margin-top 20px
        width 100%
        position relative
        input[type='text']
            width 100%
        button
            position absolute
            right 0
            top 0
</style>
