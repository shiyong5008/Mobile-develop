import React, {Component} from 'react'
import {TextInput, View, Text, Image, Switch} from 'react-native'
import PropTypes from 'prop-types'
import {Picker} from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'

export default class PickerComponent extends Component {

	constructor(props){
		super(props);
		this.state = {
		// id: Math.round(Math.random() * 500),
		// id: 237,
		valueSW: this.props.value,

		value: this.props.value,
		min: this.props.min,
		max: this.props.max,
		step: this.props.step,

		pic1: this.props.pic1,
		pic2: this.props.pic2,
		pic3: this.props.pic3,

		pic: this.props.pic,
		}
	}

	static defaultProps = {
		valueSW: false,

		value: 100,
		min: 25,
		max: 200,
		step: 50,

		pic1: 'https://picsum.photos/id/'
			+Math.round(Math.random() * 500)+'/367/267.jpg',
		pic2: 'https://picsum.photos/id/'
			+Math.round(Math.random() * 500)+'/367/267.jpg',
		pic3: 'https://picsum.photos/id/'
			+Math.round(Math.random() * 500)+'/367/267.jpg',

		pic: 'https://picsum.photos/200/300.jpg',

		label: 1
	}

	render() {

		// let pic = 'https://picsum.photos/id/' + 
		// this.state.id.toString() + '/500/500'

		// let pic = 'https://picsum.photos/200/300'

		let toggle = this.state.valueSW ? 0 : 180
		// console.log(this.state.pic)

		
		return (
			<View style={{width:250}}>
				<Text>
					Select a pic:
					
				</Text>

				<Picker
					selectedValue={this.state.label}
					style={{height: 50, width: 100}}
					onValueChange={(itemValue, itemIndex)=>
						this.setState({pic: itemValue})}>

					
					<Picker.Item
						label="1"
						value={this.state.pic1} />
					<Picker.Item
						label="2"
						value={this.state.pic2} />
					<Picker.Item
						label="3"
						value={this.state.pic3} />

				</Picker>

				<Image source={this.state.pic} style={{
				width: 200 * this.state.value /100,
				height: 100 * this.state.value /100,
				transform: [{ rotate: toggle+'deg' }]
				}}/>


				<Text>
					Rotate pic:
					{toggle} deg
				</Text>

				<Switch
					value={this.state.valueSW}
					onValueChange={(value)=>
						this.setState({valueSW: value})}
				/>

				<Text>
					The value of the slider is equal to:
					{this.state.value}%
				</Text>

				<Slider
					style={{width:200, height:40}}
					minimumValue={this.state.min}
					maximumValue={this.state.max}
					step={this.state.step}
					value={this.state.value}
					onValueChange={(value)=>
						this.setState({value})}
					minimumTrackTintColor="#FFFF00"
					maximumTrackTintColor="#FF0000"
				
				/>

			</View>
		)
	}
}