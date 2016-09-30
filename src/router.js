//设置路由
export default function (router) {
    router.map({
        '/home':{
            component: function (resolve) {
                require(['./components/home.vue'],resolve)
            },
            subRoutes: {
                '/realNameAuto':{
                    component:function (resolve) {
                        require(['./components/realNameAuto.vue'],resolve);
                    }
                }
            }
        }
    })
}