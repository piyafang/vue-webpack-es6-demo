var Vue = require('vue');

module.exports = new Vue({
  el: 'body',
  components: {
    app: require('components/app.vue')
  }
});
