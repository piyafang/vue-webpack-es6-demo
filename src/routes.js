import VueRouter from 'vue-router';

let router = new VueRouter();

router.map({
  '/foo':function(){
    console.log(arguments);
  }
})

export default router;
