import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Searchbar, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const categories = [
  {
    id: 'reading',
    title: 'Bilingual Reading',
    icon: 'book-open-variant',
    route: 'Reading',
  },
  {
    id: 'podcasts',
    title: 'Podcasts',
    icon: 'microphone',
    route: 'Podcast',
  },
  {
    id: 'books',
    title: 'Books & Stories',
    icon: 'bookshelf',
    route: 'Book',
  },
  {
    id: 'videos',
    title: 'Videos',
    icon: 'video',
    route: 'Video',
  },
  {
    id: 'courses',
    title: 'Video Courses',
    icon: 'school',
    route: 'Video',
  },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Chinese Learning" />
        <Appbar.Action icon="account" onPress={() => {}} />
      </Appbar.Header>

      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
      </View>

      <ScrollView style={styles.content}>
        {categories.map((category) => (
          <Card
            key={category.id}
            style={styles.card}
            onPress={() => navigation.navigate(category.route as keyof RootStackParamList, { id: '1' })}
          >
            <Card.Title
              title={category.title}
              left={(props) => (
                <MaterialCommunityIcons
                  name={category.icon as any}
                  size={props.size}
                  color={theme.colors.primary}
                />
              )}
            />
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    padding: 16,
  },
  searchBar: {
    elevation: 4,
  },
  content: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
  },
}); 