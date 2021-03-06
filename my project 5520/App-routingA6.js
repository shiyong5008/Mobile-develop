import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Image, Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler'

import HomeScreen from "./components/HomeScreen"
import SecondScreen from "./components/SecondScreen"
import ThirdScreen from "./components/ThirdScreen"

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
				/>
				<Stack.Screen
					name="Second"
					component={SecondScreen}
				/>
				<Stack.Screen
					name="Third"
					component={ThirdScreen}
				/>

			</Stack.Navigator>
		</NavigationContainer>
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
