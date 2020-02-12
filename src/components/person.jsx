import React, { Component } from 'react'

export default class Person extends Component {
	render() {
		return (
			<div>
				<h2>当前总人数为：xxxxx</h2>
				<input type="text" placeholder="请输入名字"/>&nbsp;
				<input type="text" placeholder="请输入年龄"/>&nbsp;
				<button>添加</button>
				<ul>
					<li>姓名：xxxxx，年龄：yyyyy</li>
					<li>姓名：xxxxx，年龄：yyyyy</li>
					<li>姓名：xxxxx，年龄：yyyyy</li>
				</ul>
			</div>
		)
	}
}
