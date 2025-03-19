import React from 'react';
import { Box, Text, VStack, Heading } from 'native-base';

export default function LibraryScreen() {
  return (
    <Box flex={1} bg="white" safeArea>
      <VStack space={4} p={4}>
        <Heading size="xl">Library</Heading>
        <Text>Your saved content will appear here</Text>
      </VStack>
    </Box>
  );
} 