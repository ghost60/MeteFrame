import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducer';
// import thunk from 'redux-thunk';

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。

// var store = createStore(
//     reducer
// );

// export default store;





const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
  )
)

export default store;