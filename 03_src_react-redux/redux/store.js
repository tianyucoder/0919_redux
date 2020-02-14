/* 
	给文件是整个redux中最为核心的文件---store
*/

//引入createStore，用于创建一个store对象
import {createStore} from 'redux'
//引入reducer，用于操作状态
import countReducer from './count_reducer'

//调用createStore时，必须传入一个reducer ----- 老板在创业之初就找好了手下人
export default createStore(countReducer)