import React, {Component} from 'react'
import {Button, Text, View, Image, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

export default class SecondScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	
	static defaultProps = {
		
	}

	render() {
		var titles = ['Rock', 'Paper', 'Scissor']
		const {route, navigation} = this.props
		const {someId, someTitle} = route.params
		return (
			<View style={styles.container}>

				<Text>
					Second Screen
				</Text>

				<Text>
					Id:
					{JSON.stringify(someId)}
				</Text>
				<Text>
					Title:
					{JSON.stringify(someTitle)}
				</Text>

				<Image source={{uri:'https://picsum.photos/id/'+ 
				someId +'/200'}}
					style={{
					width: 193,
					height: 110
				}}/>

				<Button
					title="reresh pic"
					onPress={()=> {
						navigation.setParams({
							someId: Math.floor(Math.random()*100),
							someTitle: titles[Math.floor(Math.random()*titles.length)]
							})
						navigation.push('Details')
					}}/>

				<Button
					title="go to home screen"
					onPress={()=> navigation.navigate('Home')
					}/>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ff0',
		alignItems: 'center',
		justifyContent: 'center',
	}
})