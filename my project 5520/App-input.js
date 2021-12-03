import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'

import SimpleComponent1 from "./components/SimpleComponent1"
import TextInputComponent from "./components/TextInputComponent"

import TestForComponent1 from "./components/TestForComponent1"

export default function App() {
	return (
		<View style={styles.container}>
			<Text>
				You can check pics at below! - yong
			</Text>
			<StatusBar style = "auto" />

			<SimpleComponent1/>

		    <TestForComponent1/>

			<TextInputComponent/>
			

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
