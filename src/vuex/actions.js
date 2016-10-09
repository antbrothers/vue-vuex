import api from './../api'
import *　as types from './mutation-types'

//设置查询分组
export const setSearchGroup = ({dispatch},group,key) =>{
    //设置searchGroup 值
    dispatch(types.SET_SEARCH_GROUP_VAL,group)
}
//clear 查询项
export const clearSearchKey = ({dispatch}) =>{
    dispatch(types.CLEAR_SEARCH_VAL)
}

//更新查询项
export const updateSearchKey = ({dispatch},key) =>{
    dispatch(types.UPDATE_SEARCH_VAL,key);
}
//查询结果集合
export const searchaParmList = ({dispatch},group,key) =>{
    //根据group和key查询
    api.getSearchParamList({type:group,key:key})
        .then(reply =>{
            if (reply.data.result){
                dispatch(types.SET_SEARCH_LIST,reply.data.result);
            }
        })
}

/**
 * 初始化提示
 *
 */
export const initHint = ({ dispatch }) => {
    //return  (function () {
        api.getList({one:'11'})
            .then(res=>{
                dispatch(types.GET_SEARCH_LIST,res.data)
                console.log(res);
            })
   // })()

}