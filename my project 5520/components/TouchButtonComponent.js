import React, {Component} from 'react'
import {ScrollView, Alert, Text, View, Button, Image, TouchableHighlight, TouchableOpacity, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

const alertMessage='pls select a pic';


export default class TouchButtonComponent extends Component {

	constructor(props){
		super(props);
		this.state = {

			pic1: true,
			pic2: true,
			pic3: true

		};

		this.btnPress = this.btnPress.bind(this);

	}


	static defaultProps = {
		
	}


	btnPress() {
		Alert.alert('select pic', alertMessage, [
			{text: this.state.pic1 ? 'hide pic1' : 'show pic1', 
			onPress: ()=> this.setState({pic1: !this.state.pic1})},
			{text: this.state.pic2 ? 'hide pic2' : 'show pic2', 
			onPress: ()=> this.setState({pic2: !this.state.pic2})},
			{text: this.state.pic3 ? 'hide pic3' : 'show pic3', 
			onPress: ()=> this.setState({pic3: !this.state.pic3})}
		
		]);
	}


	render() {


		return (
			<View>

				<Image source={{uri: this.state.pic1 ?
				'https://picsum.photos/id/100/200' : null }} 
				    style={{
					width: 193,
					height: 110
				}}/>

				<Image source={{uri: this.state.pic2 ?
				'https://picsum.photos/id/200/200' : null }} 
					style={{
					width: 193,
					height: 110
				}}/>

				<Image source={{uri: this.state.pic3 ?
				'https://picsum.photos/id/180/200' : null }} 
					style={{
					width: 193,
					height: 110
				}}/>

				

				<Button
					onPress={this.btnPress}
					title="select a pic"
					color="violet"
					accesibilityLabel="This is a button"
				/>


			</View>
		)
	}
}

