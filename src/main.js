import Vue from 'vue'
import VueRouter from 'vue-router'
import ConfigRouter from './router'
import App from './App.vue'

Vue.config.devtools = true
Vue.use(VueRouter)

var  router = new VueRouter()
ConfigRouter(router)

router.beforeEach(function() {
    window.scrollTo(0, 0)
})
router.afterEach(function (transition) {
    console.log('成功浏览到: ' + transition.to.path)
})

//默认/重定向
router.redirect({
    '*': '/home'
})
router.start(App,"#root")
