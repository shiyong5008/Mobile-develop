import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Image, Text, View, TextInput} from 'react-native'

/*
import SimpleComponent1 from "./components/SimpleComponent1"
import TextInputComponent from "./components/TextInputComponent"
import TestForComponent1 from "./components/TestForComponent1"
import SliderComponent from "./components/SliderComponent"
import PickerComponent from "./components/PickerComponent"
import SwitchComponent from "./components/SwitchComponent"
import Flex2Component from "./components/Flex2Component"
import SimpleComponent from "./components/SimpleComponent"
import TouchComponent from "./components/TouchComponent"
import ButtonComponent from "./components/ButtonComponent"
*/

import TouchButtonComponent from "./components/TouchButtonComponent"


export default function App() {
	return (
		<View style={styles.container}>
			<Text>Touch practice by Yong Shi</Text>

			<StatusBar style = "auto" />

			<TouchButtonComponent/>

		

			
			
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}
})
