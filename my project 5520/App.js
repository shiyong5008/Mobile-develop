import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View, TextInput, Button, Overlay} from 'react-native'

import * as Permissions from 'expo-permissions'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'

/*
import GPSComponent from "./components/GPSComponent"
import MapComponent from "./components/MapComponent"
*/

import GPSmapComponent from "./components/GPSmapComponent"

export default function App() {
	return (
		<View style={styles.container}>
			<Text>
				 GPS and map by shi yong
			</Text>
			<StatusBar style = "auto" />

			
			<GPSmapComponent/>


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
