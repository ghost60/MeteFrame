import fetch from 'isomorphic-fetch';

export const addAction = () => ({
	type: 'ADD'
})

export const rddAction = () => ({
	type: 'RDD'
})

export const chAction = () => ({
	type: 'CHANGE'
})


// export function 	() {
// 	return {
// 		type: 'add',
// 	}
// }


//异步action
const getDataStart = () => {
    debugger
  return {
    type: "GET_DATA_START"
  }
}


const getDataSuccess = (data) => {
    debugger
  return {
    type: "GET_DATA_SUCCESS",
    data 
  }
}

export const getDataAction = (url, postData) => (dispatch, getState)=> {
    debugger
    return function(dispatch) {
        dispatch(getDataStart())
        return fetch("./data.json")
        .then(response => response.json())
        .then(json => dispatch(getDataSuccess(data)))
        .catch(error => console.log(error))
    }
}