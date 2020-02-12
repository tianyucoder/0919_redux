/* 
	该文件是recuder，而且是为person组件服务的reducer，所以名为：person_reducer
*/
import {ADDPERSON} from '../action_types'

//若没有传过来preState(是初始化的时候)
export default function (preState=[],action){ 
	console.log(action);
	//从action中获取：type(加？还是减？)、data(加多少？减多少？)
	const {type,data} = action
	//提前准备好一个新状态
	let newState
	//用switch去判断type（到底是加还是减？）
	switch (type) {
		case ADDPERSON:
			newState = [...preState,data]
			return newState
		default:
			return preState
	}
}
