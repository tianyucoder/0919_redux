/* 
	该问文件专门用于创建action对象
*/
import {ADDPERSON} from '../action_types'

export const createAddPersonAction = (personObj) => ({type:ADDPERSON,data:personObj})