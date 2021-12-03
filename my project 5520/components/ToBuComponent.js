import React, {Component} from 'react'
import {Text, View, Image, TouchableHighlight, TouchableOpacity, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'


export default class ToBuComponent extends Component {

	constructor(props){
		super(props);
		this.state = {
			toggle: true
		}
	}


	static defaultProps = {
	
	}


	render() {

		let isToggle = this.state.toggle ? 'YES' : 'NO';

		return (
			<View>

				<Text>{isToggle}</Text>

				<TouchableHighlight
				underlaycolor='yellow'
				onPress={() => this.setState({toggle: !this.state.toggle})}>
					<Text style={styles2.toggle}>Togglle</Text>
				</TouchableHighlight>

				<TouchableOpacity>
				<Image source={require('../assets/icon.png')} style={{
					width: 193,
					height: 110
				}}/>
				</TouchableOpacity>

			</View>
		)
	}
}


const styles2 = StyleSheet.create({
	toggle: {
		padding: 5,
		backgroundColor: '#ccc',
	}

})
