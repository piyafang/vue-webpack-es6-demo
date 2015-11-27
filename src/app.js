var Vue = require('vue');
var VueAsyncData = require('vue-async-data');

Vue.use(VueAsyncData);

module.exports = new Vue({
  el: 'body',
  data: function(){
    return {
      itemTitle:''
    }
  },
  components: {
    app: require('components/app.vue')
  }
});
