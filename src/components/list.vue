// 模板
<template lang="jade">
    li.list-item(v-for="list in lists",v-bind:class="{done:list.done}",@dblclick="toggleEdit(list)")
        div.item-content(v-bind:class="{editable:list.editable}",contenteditable="{{list.editable}}")
          input(type="checkbox",v-model="list.done",id="todo-{{$index}}")
          label(for="todo-{{$index}}",v-show="!list.editable")
          |   {{ list.name }}
        a.commit-btn(href="#",@click="toggleEdit(list)",v-show="list.editable") √
        span.remove-btn(@click="remove(list)") &times;
</template>

<script type="text/ecmascript-6">
    export default {
        // 继承自父组件的data
        props: ['lists'],
        methods: {
            // 移除todo
            remove (list) {
                this.$dispatch('todo-remove',list);
            },
            // 切换todo编辑状态
            toggleEdit (list) {
                if(!list.done) list.editable = !list.editable;
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .list
        .list-item
            color #fff
            background #3d566e
            line-height 3
            border-bottom 1px solid #2c3e50
            position relative
            overflow hidden
            &.done
              background #1abc9c
              color #fff
              border-bottom 1px solid #16a085
              .item-content
                text-decoration line-through
            .item-content
                width 90%
                float left
                text-indent 1em
                box-sizing border-box
                label
                  border-radius 50%
                  width 15px
                  height 15px
                  background #fff
                  display inline-block
                  vertical-align middle
                  position relative
                  &:checked
                    background #333
                input[type="checkbox"]
                  display none
                  &:checked+label:before
                    content ''
                    position absolute
                    background #16a085
                    border-radius 50%
                    width 60%
                    height 60%
                    left 20%
                    top 20%
            .editable
                background #ecf0f1
                color #333
            .remove-btn
                color #eee
                float right
                width 10%
                text-align center
                cursor pointer
                &:hover
                  background #c0392b
            .commit-btn
                font-size 14px
                color #fff
                text-decoration none
                padding 0 20px
                position absolute
                right 60px
                height 100%
                top 0
                line-height 50px
                background #f39c12
            .time-stamp
                background rgba(0,0,0,0.2)
                padding 5px 10px
                font-size 12px
</style>
