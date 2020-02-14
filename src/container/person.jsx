//该文件是person组件的容器组件,用于给person组件传递：1.状态 2.操作状态的方法
//引入connect
import {connect} from 'react-redux'
//引入action
import {createAddPersonAction} from '../redux/action_creators/person'

import React, { Component } from 'react'

class Person extends Component {

	add = ()=>{
		//1.获取用户的输入
		const name = this.refs.name.value
		const age = this.refs.age.value*1
		//2.操作状态
		this.props.addPerson({name,age})
		//3.清空
		this.refs.name.value = ''
		this.refs.age.value = ''
	}

	render() {
		return (
			<div>
				<h2>当前总人数为：{this.props.persons.length}，上方组件中计数的结果为：{this.props.number}</h2>
				<input ref="name" type="text" placeholder="请输入名字"/>&nbsp;
				<input ref="age" type="text" placeholder="请输入年龄"/>&nbsp;
				<button onClick={this.add}>添加</button>
				<ul>
					{
						this.props.persons.map((personObj,index)=>{
							return <li key={index}>姓名：{personObj.name}，年龄：{personObj.age}</li>
						})
					}
				</ul>
			</div>
		)
	}
}


export default connect(
	(state)=>({
		persons:state.persons,
		number:state.number
	}), //映射状态 ---若无东西课可以传，那么返回空对象
	{addPerson:createAddPersonAction} //映射操作状态的方法 ---若无东西课可以传，那么写空对象
)(Person)