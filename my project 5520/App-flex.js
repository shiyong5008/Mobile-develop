import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'

/*
import SimpleComponent1 from "./components/SimpleComponent1"
import TextInputComponent from "./components/TextInputComponent"
import TestForComponent1 from "./components/TestForComponent1"
import SliderComponent from "./components/SliderComponent"
import PickerComponent from "./components/PickerComponent"
import SwitchComponent from "./components/SwitchComponent"
*/

import Flex2Component from "./components/Flex2Component"

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Flex styles practice - Yong Shi</Text>

			<StatusBar style = "auto" />

			<Flex2Component/>
			
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
