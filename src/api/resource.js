import Vue from 'vue'
import VueResource from 'vue-resource'
import  {API_ROOT} from '../config'

Vue.use(VueResource);

export const searchParmList = (options) => Vue.http.post(API_ROOT+'/search',options)
export const getList = (options) =>Vue.http.get(API_ROOT+'/list.json');