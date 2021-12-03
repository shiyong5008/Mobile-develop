import React, {Component} from 'react'
import {Text, View, Image, TouchableHighlight, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'




export default class SimpleComponent1 extends Component {

	constructor(){
		super();
		this.state = {
			showRandomImage: false,
			id: 300,
			toggle: true
		}
	}

	

	

	static defaultProps = {
		pic: 'https://picsum.photos/id/237/536/354',
		message: 'Welcome to Vancouver!'
	}

	render() {

		
		let isToggle = this.state.toggle ? 'YES' : 'NO';

		let pic = this.state.showRandomImage ?
		'https://picsum.photos/seed/picsum/536/354' : this.props.pic

		return (
			<View>

				<Text>{isToggle}</Text>

				<TouchableHighlight
				underlaycolor='yellow'
				onPress={() => this.setState({toggle: !this.state.toggle})}>
				<Text style={styles2.toggle}>Toggle</Text>
				</TouchableHighlight>


				<Text>
					{this.props.message}
				</Text>

				<Image source={require('../assets/icon.png')} style={{
					width: 193,
					height: 110
				}}/>

			</View>
		)
	}
}


/*
	SimpleComponent1.propTypes = {
		pic: PropTypes.string.isRequired,	
	}
	*/


const styles2 = StyleSheet.create({
	toggle: {
		padding: 5,
		backgroundColor: '#ccc',
	}

})