import React, {Component} from 'react'
import {TextInput, View, Text, Image, Switch} from 'react-native'
import PropTypes from 'prop-types'
import {Picker} from '@react-native-picker/picker'

export default class PickerComponent extends Component {

	constructor(props){
		super(props);
		this.state = {
//		id: Math.round(Math.random() * 500),
		id: 237
		}
	}


	render() {

		let pic = 'https://picsum.photos/id/' + 
		this.state.id.toString() + '/500/500'
		
		return (
			<View style={{width:250}}>
				<Text>
					Select a pic:
					{this.state.id}
				</Text>

				<Picker
					selectedValue={this.state.id}
					style={{height: 50, width: 100}}
					onValueChange={(itemValue, itemIndex)=>
						this.setState({id: itemValue})}>
					
					<Picker.Item
						label="dog"
						value="237" />
					<Picker.Item
						label="light tower"
						value="870" />
					<Picker.Item
						label="bird"
						value="50" />
				</Picker>

				<Image source={pic} style={{
				width: 193,
				height: 110}}/>

			</View>
		)
	}
}