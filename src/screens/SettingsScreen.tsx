import React from 'react';
import { Box, Text, VStack, Heading } from 'native-base';

export default function SettingsScreen() {
  return (
    <Box flex={1} bg="white" safeArea>
      <VStack space={4} p={4}>
        <Heading size="xl">Settings</Heading>
        <Text>App settings and preferences will appear here</Text>
      </VStack>
    </Box>
  );
} 