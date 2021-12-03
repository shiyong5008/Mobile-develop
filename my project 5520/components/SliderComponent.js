import React, {Component} from 'react'
import {TextInput, View, Text, Image} from 'react-native'
import PropTypes from 'prop-types'
import Slider from '@react-native-community/slider'

export default class SliderComponent extends Component {

	constructor(props){
		super(props);
		this.state = {
		value: this.props.value,
		min: this.props.min,
		max: this.props.max,
		step: this.props.step
		}
	}
	
	static defaultProps = {
		value: 100,
		min: 25,
		max: 200,
		step: 50
	}

	render() {
		return (
			<View>
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
					onValueChange={(value)=>this.setState({value})}
					minimumTrackTintColor="#FFFF00"
					maximumTrackTintColor="#FF0000"
				
				/>
			
			</View>
		)
	}
}