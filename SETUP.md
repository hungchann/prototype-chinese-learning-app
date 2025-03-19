# Chinese Learning App - Setup Guide

## Prerequisites
1. Install Node.js from https://nodejs.org/ (LTS version recommended)
2. Install Git from https://git-scm.com/downloads

## Setup Steps

1. First, install Expo CLI globally:
```bash
npm install -g expo-cli
```

2. Install project dependencies:
```bash
npm install
```

3. Install additional dependencies:
```bash
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs native-base react-native-safe-area-context react-native-svg @expo/vector-icons expo-av @react-native-async-storage/async-storage zustand react-native-reanimated
```

4. Start the development server:
```bash
npm start
```

## Development

- Use Expo Go app on your mobile device to test the application
- Scan the QR code that appears in the terminal or browser
- The app will reload automatically when you save changes

## Troubleshooting

If you encounter any TypeScript errors:
1. Make sure TypeScript is installed:
```bash
npm install -D typescript @types/react @types/react-native
```

2. If you see JSX-related errors, check that your tsconfig.json has the correct JSX configuration:
```json
{
  "compilerOptions": {
    "jsx": "react-native"
  }
}
```

3. If you see module resolution errors, try:
```bash
npm install --save-dev @types/react @types/react-native @types/react-navigation
```

## Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started)
- [NativeBase Documentation](https://docs.nativebase.io/) 