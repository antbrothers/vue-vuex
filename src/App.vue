
<script>
    import Home  from './components/home.vue'

    export default{
        name: 'App',

        data(){
            return{}
        },
        components: {
            'operation-main': Home
        }
    }
</script>

<template>
    <div id="app">
        <operation-main></operation-main>
        <router-view></router-view>
    </div>

</template>