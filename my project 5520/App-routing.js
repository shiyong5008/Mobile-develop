import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Image, Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler'

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
import TouchButtonComponent from "./components/TouchButtonComponent"
*/

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
