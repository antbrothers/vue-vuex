
<script>
    import store from './vuex/store'
    import Home  from './components/home.vue'
    import RealNameInfor from './components/realNameInfor.vue'

    export default{
        name: 'App',
        store,
        data(){
            return {}
        },
        /*components: {
            'operation-main': Home
        }*/
    }
</script>

<template>
    <div id="app">
        <!--<operation-main></operation-main>-->
        <router-view></router-view>
    </div>

</template>