import React, { Component } from 'react'

export default class Count extends Component {
	//加
	increment = ()=>{
		//1.获取用户选择的数字
		const value = this.refs.checkNumber.value
		//const number = this.state.number
		//this.setState({number:number+value*1})
		//2.调用dispatch分发一个“加”的action
		this.props.store.dispatch({type:'increment',data:value*1})
	}

	//减
	decrement = ()=>{
		//1.获取用户选择的数字
		const value = this.refs.checkNumber.value
		//2.更新状态
		//const number = this.state.number
		//this.setState({number:number-value*1})
		this.props.store.dispatch({type:'decrement',data:value*1})
	}

	//奇数才去加
	incrementOdd = ()=>{
		//1.获取用户选择的数字
		const value = this.refs.checkNumber.value
		//2.更新状态
		const number = this.props.store.getState()
		if(number%2 === 1){
			this.props.store.dispatch({type:'increment',data:value*1})
		}
	}

	//延迟一会加
	incrementAsync = ()=>{
		//1.获取用户选择的数字
		const value = this.refs.checkNumber.value
		//2.更新状态
		//const number = this.state.number
		setTimeout(()=>{
			this.props.store.dispatch({type:'increment',data:value*1})
		},1000)
	}

	render() {
		return (
			<div>
				<h2>当前计数为：{this.props.store.getState()}</h2>
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
