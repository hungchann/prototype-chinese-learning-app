import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Text, List, useTheme } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

function SavedContent({ type }: { type: string }) {
  return (
    <View style={styles.contentContainer}>
      <List.Item
        title="Sample Content"
        description="Tap to continue learning"
        left={props => <MaterialCommunityIcons name="bookmark" {...props} size={24} />}
      />
      <Text style={styles.emptyText}>No more saved {type}</Text>
    </View>
  );
}

export default function LibraryScreen() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="My Library" />
      </Appbar.Header>

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: theme.colors.surface },
          tabBarIndicatorStyle: { backgroundColor: theme.colors.primary },
        }}
      >
        <Tab.Screen
          name="Readings"
          children={() => <SavedContent type="readings" />}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-open-variant" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Podcasts"
          children={() => <SavedContent type="podcasts" />}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="microphone" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Books"
          children={() => <SavedContent type="books" />}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bookshelf" color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Videos"
          children={() => <SavedContent type="videos" />}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="video" color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#666',
  },
}); 