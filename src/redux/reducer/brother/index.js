import {updateObject,updateItemInArray} from '../utility';

const initialState = {
    data: '旧数据'
};

// export const brother = (state = initialState, action) => {
//     debugger
//     switch(action.type){
//         case "CHANGE":
//             return Object.assign({}, state, {
//                 data:"新数据"
//             });
//         default:
//             return state;
//     }
// }
 
export const brother = (state = initialState, action) => {
    switch(action.type){
        case "CHANGE":
            return updateObject(state, {
                data:"新数据"
            });
        default:
            return state;
    }
}