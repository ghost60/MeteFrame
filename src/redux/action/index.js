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
  return {
    type: "GET_DATA_START"
  }
}


const getDataSuccess = (data) => {
  return {
    type: "GET_DATA_SUCCESS",
    data 
  }
}

export const getDataAction = (url, postData) => {
    return function(dispatch) {
        dispatch(getDataStart())
        return fetch("http://www.fjocean.com/szyb?name=西太平洋")
        .then(response => response.json())
        .then(data => dispatch(getDataSuccess(data)))
        .catch(error => console.log(error))
    }
}