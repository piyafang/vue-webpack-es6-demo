<template>
    <li class="list-item"
        v-for="list in lists"
        @dblclick="toggleEdit(list)">
        <div class="item-content"
        v-bind:class="{editable:list.editable}"
        contenteditable="{{list.editable}}">
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
                list.editable = !list.editable;
            }
        }
    }
</script>

<style lang="stylus">
    .list
        .list-item
            color #fff
            line-height 3
            border-bottom 1px solid #333
            position relative
            overflow hidden
            .item-content
                width 90%
                float left
                text-indent 1em
                box-sizing border-box
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
                background #eee
                color #333
                text-decoration none
                border-radius 5px
                padding 0 20px
                position absolute
                right 12%
                top 4px

</style>
