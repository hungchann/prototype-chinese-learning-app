import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

// Import screens
import BottomTabNavigator from './BottomTabNavigator';
import ReadingScreen from '../screens/ReadingScreen';
import PodcastScreen from '../screens/PodcastScreen';
import BookScreen from '../screens/BookScreen';
import VideoScreen from '../screens/VideoScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reading"
          component={ReadingScreen}
          options={{ title: 'Bilingual Reading' }}
        />
        <Stack.Screen
          name="Podcast"
          component={PodcastScreen}
          options={{ title: 'Podcast' }}
        />
        <Stack.Screen
          name="Book"
          component={BookScreen}
          options={{ title: 'Book' }}
        />
        <Stack.Screen
          name="Video"
          component={VideoScreen}
          options={{ title: 'Video' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 