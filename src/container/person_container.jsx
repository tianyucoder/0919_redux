//该文件是person组件的容器组件,用于给person组件传递：1.状态 2.操作状态的方法
//引入UI组件
import Person from '../components/person'
//引入connect
import {connect} from 'react-redux'

export default connect(
	()=>({}), //映射状态 ---若无东西课可以传，那么返回空对象
	{} //映射操作状态的方法 ---若无东西课可以传，那么写空对象
)(Person)