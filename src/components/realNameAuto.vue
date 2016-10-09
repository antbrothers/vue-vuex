<template>
    <div>
        <h3>Count {{count.searchGroup}}</h3>
        <div v-for="item in count.searchGroupItem">
            <div>{{item.name}}   {{item.value}}</div>
        </div>
    </div>
</template>

<script>
    import {isEmptySearchKey} from '../vuex/getter'
    import {searchaParmList,initHint} from '../vuex/actions'
    export default {
        vuex: {
            getters:{
                count: isEmptySearchKey
            },
            actions:{
                searchaParmList,
                initHint,
            }
        },
        route: {
            data(){
                this.initHint()
            }
        },
    }
</script>