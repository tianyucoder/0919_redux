//该文件是person组件的容器组件,用于给person组件传递：1.状态 2.操作状态的方法
//引入UI组件
import Person from '../components/person'
//引入connect
import {connect} from 'react-redux'
//引入action
import {createAddPersonAction} from '../redux/action_creators/person_action_creator'

export default connect(
	(state)=>({
		persons:state.persons,
		number:state.number
	}), //映射状态 ---若无东西课可以传，那么返回空对象
	{addPerson:createAddPersonAction} //映射操作状态的方法 ---若无东西课可以传，那么写空对象
)(Person)