import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'

import FlatListComponent from "./components/FlatListComponent"
import FetchComponent from "./components/FetchComponent"

export default function App() {
	return (
		<View style={styles.container}>
			<Text>
				 FlatList Fetch by shi yong
			</Text>
			<StatusBar style = "auto" />

			
			<FetchComponent/>


		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}
})
