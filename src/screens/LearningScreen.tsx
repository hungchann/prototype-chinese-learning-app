import React from 'react';
import { Box, Text, VStack, Heading } from 'native-base';

export default function LearningScreen() {
  return (
    <Box flex={1} bg="white" safeArea>
      <VStack space={4} p={4}>
        <Heading size="xl">Learning</Heading>
        <Text>Track your progress and view saved words here</Text>
      </VStack>
    </Box>
  );
} 