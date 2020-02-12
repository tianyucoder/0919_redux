import React, { Component } from 'react'

export default class Count extends Component {
	//加
	increment = ()=>{
		//1.获取用户选择的数字
		const value = this.refs.checkNumber.value
		//2.调用了从容器组件传递过来的加法函数
		this.props.increment(value*1)
	}

	//减
	decrement = ()=>{
		//1.获取用户选择的数字
		const value = this.refs.checkNumber.value
		//2.调用了从容器组件传递过来的减法函数
		this.props.decrement(value*1)
	}

	//奇数才去加
	incrementOdd = ()=>{
		//1.获取用户选择的数字
		const value = this.refs.checkNumber.value
		//2.如果当前展示的数字是奇数，就可以加
		const number = this.props.number
		if(number%2 === 1){
			this.props.increment(value*1)
		}
	}

	//延迟一会加
	incrementAsync = ()=>{
		//1.获取用户选择的数字
		const value = this.refs.checkNumber.value
		//2.更新状态
		/* setTimeout(()=>{
			this.props.increment(value*1)
		},1000) */

		this.props.incrementAsync(value*1,1000)
	}

	render() {
		//console.log(this.props);
		return (
			<div>
				<h2>当前计数为：{this.props.number}</h2>
				<select ref="checkNumber">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementOdd}>increment if odd</button>&nbsp;
				<button onClick={this.incrementAsync}>increment async</button>
			</div>
		)
	}
}
