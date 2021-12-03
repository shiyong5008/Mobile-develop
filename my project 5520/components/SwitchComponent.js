import React, {Component} from 'react'
import {TextInput, View, Text, Image, Switch} from 'react-native'
import PropTypes from 'prop-types'
// import {Picker} from '@react-native-picker/picker'

export default class SwitchComponent extends Component {

	constructor(props){
		super(props);
		this.state = {
		value: this.props.value
		}
	}
	
	static defaultProps = {
		value: false
	}

	render() {

		let toggle = this.state.value ? 'ON' : 'OFF'	

		return (
			<View style={{width:250}}>
				<Text>
					Value of the switch:
					{toggle}
				</Text>

				<Switch
					value={this.state.value}
					onValueChange={(value)=>
						this.setState({value: value})}
				/>

			</View>
		)
	}
}