import React, { Component } from 'react'
import Container from './container/count'
import PersonContainer from './container/person'

export default class App extends Component {
	render() {
		return (
			<div>
				<Container/>
				<br/>
				<br/>
				<br/>
				<PersonContainer/>
			</div>
		)
	}
}
