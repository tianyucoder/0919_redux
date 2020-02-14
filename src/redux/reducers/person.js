/* 
	该文件是recuder，而且是为person组件服务的reducer，所以名为：person_reducer
	注意：recuder必须是纯函数
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
			newState = [data,...preState] //此种写法就会产生新数组，地址发生改变，redux就不会错误判断，界面就会更新
			//不允许像17、18行这样写，这样写不会改变数组的地址，从而引起redux做出错误的判断，从而不会更新页面
			/* preState.unshift(data)
			newState = preState */
			return newState
		default:
			return preState
	}
}
