//该文件用于汇总所有的reducer
import countReducer from './count_reducer'
import personReducer from './person_reducer'

import {combineReducers} from 'redux'

//combineReducers用于合并多个reducer，最终生成一个总的reducer
export default combineReducers({
	number:countReducer,
	persons:personReducer
})
//combineReducers传入的对象，就是redux帮我们保存的那个状态对象