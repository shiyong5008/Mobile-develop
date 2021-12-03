import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeStack, StatsStack, ArticlesStack, VideosStack } from './MainStackNav'

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator
    initialRouteName="Home"
    shifting={true}
    activeColor="#fff"
    style={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#2a4d69',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="newspaper" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Data"
      component={StatsStack}
      options={{
        tabBarLabel: 'Data',
        tabBarColor: '#2a4d69',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="chart-bell-curve" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="News"
      component={ArticlesStack}
      options={{
        tabBarLabel: 'News',
        tabBarColor: '#2a4d69',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="file-find-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Videos"
      component={VideosStack}
      options={{
        tabBarLabel: 'Videos',
        tabBarColor: '#2a4d69',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="play-circle-outline" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
)

export default BottomTabs;
