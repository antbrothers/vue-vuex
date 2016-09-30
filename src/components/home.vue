<script>

    export default {
        name: 'Home'
    }
</script>
<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#" v-link="{ path: '/' }">home</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li v-link="{ path: '/home/realNameAuto'}"><a href="#!">realNameAuto</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>