import {combineReducers} from 'redux';
import {counter} from './counter';
import {brother} from './brother';
import {getdata} from './getdata';

const rootReducer = combineReducers({
	counter:counter,
	brother:brother,
	getdata:getdata
})
export default rootReducer;