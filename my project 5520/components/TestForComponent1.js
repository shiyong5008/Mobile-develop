import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {TextInput, View, Text, Image} from 'react-native'



export default class TestForComponent1 extends Component {

	constructor(props){
		super(props);
		this.state = {
//			id: Math.round(Math.random() * 500),
			value: this.props.value

		}
	}
	
	static defaultProps = {
		value: 'Test Value'
	}


	render() {
//		let pic = 'https://picsum.photos/id/' + this.state.id.toString() + '/500/500'

		return (
			<View>
				

				<TextInput style = {{
				height: 40,
				width: 250,
				borderColor: 'gray',
				borderWidth: 1
			}}
			placeholder = "Pls provide pic id"
			
			value={this.state.value}

			onChangeText={(value)=>this.setState({value})}

			/>
			<Text>{this.state.value}</Text>

			
			</View>
		)
	}
}