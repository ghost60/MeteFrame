import {updateObject,updateItemInArray} from '../utility';


const defaultlState = {data:{init:"暂无"}, isFetching: false};

export const getdata = (state = defaultlState , action = {}) => {
    switch(action.type){
        case "GET_DATA_START":
            return updateObject(state,{isFetching:true});
        case "GET_DATA_SUCCESS":
            return updateObject(state,{isFetching:false,data:action.data});;//返回一个新的state
        default:
            return state
    }
}