/* 
	该文件是recuder，而且是为count组件服务的reducer，所以名为：count_reducer
*/
import {INCREMENT,DECREMENT} from '../action_types'

//若没有传过来preState(是初始化的时候)
export default function (preState=0,action){ 
	console.log(action);
	//从action中获取：type(加？还是减？)、data(加多少？减多少？)
	const {type,data} = action
	//提前准备好一个新状态
	let newState
	//用switch去判断type（到底是加还是减？）
	switch (type) {
		//如果是加法操作
		case INCREMENT:
			newState = preState + data //相加
			return newState //返回新状态
		//如果是减法操作
		case DECREMENT:
			newState = preState - data //相减
			return newState //返回新状态
		//不是加也不是减，即：是初始化的时候
		default:
			return preState
	}

}