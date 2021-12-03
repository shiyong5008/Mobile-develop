import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'

/*
import SimpleComponent1 from "./components/SimpleComponent1"
import TextInputComponent from "./components/TextInputComponent"
import TestForComponent1 from "./components/TestForComponent1"
*/

import SliderComponent from "./components/SliderComponent"
import PickerComponent from "./components/PickerComponent"
import SwitchComponent from "./components/SwitchComponent"


export default function App() {
	return (
		<View style={styles.container}>
			<Text>
				Picker/Switch/Slider - Yong Shi
			</Text>

			<StatusBar style = "auto" />

			<PickerComponent/>
			
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
