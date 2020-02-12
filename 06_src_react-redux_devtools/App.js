import React, { Component } from 'react'
import Container from './container/count_container'
import PersonContainer from './container/person_container'

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
