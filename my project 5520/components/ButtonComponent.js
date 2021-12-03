import React, {Component} from 'react'
import {ScrollView, Alert, Text, View, Button, Image, TouchableHighlight, TouchableOpacity, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

const alertMessage='you pressed aa button';


export default class ButtonComponent extends Component {

	constructor(props){
		super(props);
		this.state = {
			
		}
	}


	static defaultProps = {
	
	}


	btnPress() {
		Alert.alert('My alert', alertMessage, [
			{text: 'cancel', onPress: ()=> console.log('you cancelled')},
			{text: 'ok', onPress: ()=> console.log('you agreed')},
		
		]);
	}


	render() {

		return (
			<View>


				<ScrollView
					ref={(scrollView) => {_scrollView = scrollView}}	

					contentContainerStyle={{padding: 30}}
					// horizontal={false}
					onContentSizeChange={(contentWidth, contentHeight)=>
						{console.log('Height: ' + contentHeight 
						+ 'Width: ' + contentWidth)}
					}
					onScroll={()=>console.log('you are scrolling')}
					pagingEnabled={true}
				>
					<Text style={{fontSize:96}}>large text</Text>
					<Text style={{fontSize:96}}>large text</Text>
					<Text style={{fontSize:96}}>large text</Text>
					<Text style={{fontSize:96}}>large text</Text>
					<Text style={{fontSize:96}}>large text</Text>
					<Text style={{fontSize:96}}>large text</Text>
					<Text style={{fontSize:96}}>large text</Text>
					<Text style={{fontSize:96}}>large text</Text>
					<Text style={{fontSize:96}}>large text</Text>
					<Text style={{fontSize:96}}>large text</Text>
				</ScrollView>
				

				<Button
					// onPress={this.btnPress}
					onPress={() => _scrollView.scrollTo({y:200})}
					title="learn more"
					color="violet"
					accesibilityLabel="This is a button"
				/>


			</View>
		)
	}
}

