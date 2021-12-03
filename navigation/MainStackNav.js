import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import StatsScreen from '../screens/StatsScreen'
import ArticlesScreen from '../screens/ArticlesScreen'
import VideosScreen from '../screens/VideosScreen'

const Stack = createStackNavigator();

export function HomeStack({navigation}) {
  return(
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#2a4d69',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
        headerTitle: 'Overview',
        headerTitleAlign: 'center',
      }} />
    </Stack.Navigator>
  )
}

export function StatsStack({navigation}) {
  return(
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#2a4d69',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}
    >

      <Stack.Screen name="StatsScreen" component={StatsScreen} options={{
        headerTitle: 'Data',
        headerTitleAlign: 'center',
      }} />
    </Stack.Navigator>
  )
}

export function ArticlesStack({navigation}) {
  return(
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#2a4d69',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}
    >
      <Stack.Screen name="ArticlesScreen" component={ArticlesScreen} options={{
        headerTitle: 'News',
        headerTitleAlign: 'center',
      }} />
    </Stack.Navigator>
  )
}

export function VideosStack({navigation}) {
  return(
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#2a4d69',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}
    >
      <Stack.Screen name="Videos" component={VideosScreen} options={{
        headerTitle: 'Videos',
        headerTitleAlign: 'center',
      }} />
    </Stack.Navigator>
  )
}
