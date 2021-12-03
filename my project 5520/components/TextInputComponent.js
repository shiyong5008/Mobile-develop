import React, {Component} from 'react'
import {TextInput, View, Text, Image} from 'react-native'
import PropTypes from 'prop-types'

export default class TextInputComponent extends Component {

	constructor(props){
		super(props);
		this.state = {
			id: Math.round(Math.random() * 500)

		}
	}
	
	static defaultProps = {
		message: 'input pic id'
	}


	render() {
		let pic = 'https://picsum.photos/id/' + this.state.id.toString() + '/500/500'

		return (
			<View>
				<Text> {this.props.message} </Text>

				<TextInput style = {{
				height: 40,
				width: 250,
				borderColor: 'gray',
				borderWidth: 1
			}}
			placeholder = "Pls provide pic id, eg input: 99"


			onSubmitEditing = {(event) => this.setState({id:event.nativeEvent.text})}

			/>

			<Image source={pic} style={{
				width: 193,
				height: 110
			}}/>

			
			</View>
		)
	}
}