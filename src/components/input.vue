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
            this.$parent.itemList.push({name:this.title,editable:false});
          }
          this.title = "";
        }
      }
    }
</script>

<style lang="stylus">
    .input-form
        margin-top 20px
        width 600px
        input[type='text']
            width 500px
        button
            width 74px
</style>
