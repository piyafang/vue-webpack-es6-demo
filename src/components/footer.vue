<template>
  <div class="footer">
    <span><iframe src="http://ghbtns.com/github-btn.html?user=zephyrpersonal&amp;repo=vue-webpack-es6-demo&amp;type=watch&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="80" height="20"></iframe></span>
    <span>powered by <a href="http://vuejs.org/" target="_blank">vue.js</a></span>
    <span>{{time}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  import Moment from 'moment';
  Moment.locale('zh-cn');

  export default {
    data () {
      return{
        time:Moment().format('YYYY-MM-DD·HH:mm:ss')
      }
    },
    ready(){
      setInterval(addTime.bind(this),1000);
    }
  }

  // 简单的计时器
  function addTime (){
    return this.time = Moment().add(1,'s').format('YYYY-MM-DD·HH:mm:ss');
  }

</script>

<style lang="stylus" scoped>
  .footer
    height 20px
    text-align center
    display flex
    flex-direction raw
    align-items center
    font-size 14px
    width 70%
    margin 0 auto
    span
      flex auto
  a,a:visited,a:link
    color #2c3e50
    vertical-align top
    text-decoration none
</style>
