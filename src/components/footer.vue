<template>
  <div class="footer">
    powered by <a href="http://vuejs.org/">vue.js</a> {{time}}
  </div>
</template>

<script type="text/ecmascript-6">
  import Moment from 'moment';
  Moment.locale('zh-cn');

  export default {
    data () {
      return{
        time:Moment().format('HH:mm:ss·YYYY-MM-DD')
      }
    },
    ready(){
      setInterval(addTime.bind(this),1000);
    }
  }

  function addTime (){
    return this.time = Moment().add(1,'s').format('HH:mm:ss·YYYY-MM-DD');
  }

</script>

<style lang="stylus">
  .footer
    text-align center
</style>
