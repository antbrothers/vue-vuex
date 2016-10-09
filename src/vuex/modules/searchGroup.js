import {SET_SEARCH_GROUP_VAL ,GET_SEARCH_LIST} from '../mutation-types'

const  state = {
    // 分组值
    searchGroup : "1",
    // 查询分组项
    searchGroupItem : [
        {
            name: "个人",
            value: 1
        }, {
            name: "公司",
            value: 2
        },{
            name: "国家",
            value: 3
        }
    ]
}

const  mutations = {
    //设置查询分组的值
    [SET_SEARCH_GROUP_VAL] (state,searchGroup) {
        state.searchGroup = searchGroup;
    },

    // 获取列表数据
    [GET_SEARCH_LIST] (state,list){
        state.searchGroup = 33;
      state.searchGroupItem = list;
    }
}

export  default {
    state,
    mutations
}