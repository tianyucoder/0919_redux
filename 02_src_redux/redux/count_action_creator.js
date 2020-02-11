/* 
	该问文件专门用于创建action对象
*/
import {INCREMENT,DECREMENT} from './action_types'

export const createIncrementAction = (value) => ({type:INCREMENT,data:value})
export const createDecrementAction = (value) => ({type:DECREMENT,data:value})