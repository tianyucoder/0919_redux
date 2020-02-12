import React, { Component } from 'react'

export default class Person extends Component {

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
