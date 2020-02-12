/* 
	该问文件专门用于创建action对象
*/
import {INCREMENT,DECREMENT} from './action_types'

export const createIncrementAction = (value) => ({type:INCREMENT,data:value})
export const createDecrementAction = (value) => ({type:DECREMENT,data:value})

//异步的action---异步action中包裹着同步的action
export const createIncrementAsyncAction = (value,time)=>{
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(createIncrementAction(value))
		},time)
	}
}

