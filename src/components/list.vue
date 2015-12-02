<template>
    <li class="list-item"
        v-for="list in lists"
        v-bind:class="{done:list.done}"
        @dblclick="toggleEdit(list)">
        <div class="item-content"
        v-bind:class="{editable:list.editable}"
        contenteditable="{{list.editable}}">
          <input type="checkbox" v-model="list.done" id="todo-{{$index}}">
          <label for="todo-{{$index}}"></label>
          {{ list.name }}
        </div>
        <a href="#" class="commit-btn" @click="toggleEdit(list)" v-show="list.editable">确认</a>
        <span class="remove-btn" @click="remove(list)">&times;</span>
    </li>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {
            }
        },
        props: ['lists'],
        methods: {
            remove (list) {
                this.lists.$remove(list);
            },
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
                background #fff
                color #333
                border 1px solid #333
            .remove-btn
                color #eee
                float right
                width 10%
                text-align center
                cursor pointer
            .commit-btn
                font-size 14px
                color #333
                text-decoration none
                border-radius 5px
                padding 0 20px
                position absolute
                right 12%
                top 4px
            .time-stamp
                background rgba(0,0,0,0.2)
                padding 5px 10px
                font-size 12px
</style>
