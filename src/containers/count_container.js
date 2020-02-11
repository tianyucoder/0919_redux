//该文件是容器组件--负责给UI组件传递：1.redux中的状态。2.用于操作状态的方法
import Count from '../components/count'
//引入connect方法
import {connect} from 'react-redux'

export default connect(
	()=>({a:1,b:2}), //这个函数必须返回一个对象，该对象的key作为props属性的key，该对象的value作为props属性的value
	()=>({}) //这个函数必须返回一个对象,该对象的key作为props属性的key，该对象的value作为props属性的value
)(Count)
/* 
	connect的作用：
		1.connect函数调用所返回的那个函数能够生成一个容器组件
		2.connect函数能让UI组件和容器组件建立起联系
*/

{/* <Demo>
	<Test a="1"/>
</Demo>

this.props.a */}

