/* 
	该文件是recuder，而且是为person组件服务的reducer，所以名为：person_reducer
*/
import {ADDPERSON} from '../action_types'

//若没有传过来preState(是初始化的时候)
export default function (preState=[{name:'lisi',age:19}],action){ 
	//console.log(action);
	//从action中获取：type、data
	const {type,data} = action
	//提前准备好一个新状态
	let newState
	switch (type) {
		case ADDPERSON:
			newState = [data,...preState]
			return newState
		default:
			return preState
	}
}
