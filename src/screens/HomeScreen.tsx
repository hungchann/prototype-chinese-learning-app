import React from 'react';
import { View, ScrollView } from 'react-native';
import { Box, Text, VStack, HStack, Heading, Input, Icon, Pressable } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '../navigation/types';

type Category = {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  screen: keyof RootStackScreenProps<any>['route']['params'];
};

const categories: Category[] = [
  { id: '1', title: 'Bilingual Reading', icon: 'book', screen: 'Reading' },
  { id: '2', title: 'Podcasts', icon: 'mic', screen: 'Podcast' },
  { id: '3', title: 'Videos', icon: 'videocam', screen: 'Video' },
  { id: '4', title: 'Books & Stories', icon: 'library', screen: 'Book' },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Box flex={1} bg="white" safeArea>
      <VStack space={4} p={4}>
        <HStack alignItems="center" justifyContent="space-between">
          <Heading size="xl">Learn Chinese</Heading>
          <Pressable onPress={() => navigation.navigate('Settings')}>
            <Icon as={Ionicons} name="person-circle-outline" size={8} />
          </Pressable>
        </HStack>

        <Input
          placeholder="Search content..."
          variant="filled"
          bg="gray.100"
          px={3}
          InputLeftElement={
            <Icon ml={2} size={5} as={Ionicons} name="search" color="gray.400" />
          }
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={4}>
            <Heading size="md">Categories</Heading>
            <VStack space={3}>
              {categories.map((category) => (
                <Pressable
                  key={category.id}
                  onPress={() => navigation.navigate(category.screen)}
                >
                  <HStack
                    bg="gray.100"
                    p={4}
                    rounded="lg"
                    space={3}
                    alignItems="center"
                  >
                    <Icon
                      as={Ionicons}
                      name={category.icon}
                      size={6}
                      color="primary.600"
                    />
                    <Text fontSize="md" fontWeight="medium">
                      {category.title}
                    </Text>
                  </HStack>
                </Pressable>
              ))}
            </VStack>
          </VStack>
        </ScrollView>
      </VStack>
    </Box>
  );
} 