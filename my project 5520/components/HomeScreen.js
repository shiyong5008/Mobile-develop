import React, {Component} from 'react'
import {Button, Text, View, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

export default class HomeScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	
	static defaultProps = {
		
	}

	static navigationOptions = {
		title: 'Home',
		headerStyle: {
			backgroundColor: '#f4511e',
		},
		headerTintColor: '#fff',
		headerTitleStyle: {
			fontWeight: 'bold',
		}
	}

	render() {
		return (
			<View style={styles.container}>

				<Text>Home Screen</Text>
				<Button
					title="go to 2nd screen!"
					onPress={()=>{
						this.props.navigation.navigate('Second', {
							someId: 100,
							someTitle: 'Title',
						})
					}}/>

				<Button
					title="go to 3rd screen!"
					onPress={()=>{
						this.props.navigation.navigate('Third')
					}}/>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f00',
		alignItems: 'center',
		justifyContent: 'center',
	}
})