import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Text, IconButton, useTheme, Menu, Button } from 'react-native-paper';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type BookScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Book'>;
type BookScreenRouteProp = RouteProp<RootStackParamList, 'Book'>;

const sampleBook = {
  title: '小王子',
  chapter: 'Chapter 1',
  content: [
    {
      chinese: '从前，当我还是六岁的时候，在一本描写原始森林的书中，看到了一幅精彩的插画。',
      pinyin: 'Cóngqián, dāng wǒ hái shì liù suì de shíhòu, zài yī běn miáoxiě yuánshǐ sēnlín de shū zhōng, kàn dàole yī fú jīngcǎi de chāhuà.',
      english: 'Once when I was six years old I saw a magnificent picture in a book about the primeval forest.',
    },
    {
      chinese: '画的是一条蟒蛇正在吞食一只野兽。',
      pinyin: 'Huà de shì yī tiáo mǎngshé zhèngzài tūnshí yī zhī yěshòu.',
      english: 'It was a picture of a boa constrictor swallowing a wild animal.',
    },
  ],
};

export default function BookScreen() {
  const [fontSize, setFontSize] = React.useState(16);
  const [showMenu, setShowMenu] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const navigation = useNavigation<BookScreenNavigationProp>();
  const route = useRoute<BookScreenRouteProp>();
  const theme = useTheme();

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={sampleBook.title} subtitle={sampleBook.chapter} />
        <Appbar.Action icon="bookmark-outline" onPress={() => {}} />
        <Menu
          visible={showMenu}
          onDismiss={() => setShowMenu(false)}
          anchor={
            <Appbar.Action icon="dots-vertical" onPress={() => setShowMenu(true)} />
          }
        >
          <Menu.Item
            onPress={() => setFontSize(fontSize + 2)}
            title="Increase Font Size"
            leadingIcon="format-font-size-increase"
          />
          <Menu.Item
            onPress={() => setFontSize(Math.max(12, fontSize - 2))}
            title="Decrease Font Size"
            leadingIcon="format-font-size-decrease"
          />
          <Menu.Item
            onPress={() => setDarkMode(!darkMode)}
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
            leadingIcon={darkMode ? 'weather-sunny' : 'weather-night'}
          />
        </Menu>
      </Appbar.Header>

      <ScrollView style={styles.content}>
        {sampleBook.content.map((paragraph, index) => (
          <View key={index} style={styles.paragraph}>
            <Text
              style={[
                styles.chineseText,
                { fontSize: fontSize + 4 },
                darkMode && styles.darkText,
              ]}
            >
              {paragraph.chinese}
            </Text>
            <Text
              style={[
                styles.pinyinText,
                { fontSize: fontSize - 2 },
                darkMode && styles.darkText,
              ]}
            >
              {paragraph.pinyin}
            </Text>
            <Text
              style={[
                styles.englishText,
                { fontSize: fontSize },
                darkMode && styles.darkText,
              ]}
            >
              {paragraph.english}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomBar}>
        <Button
          icon="translate"
          mode="contained"
          onPress={() => {}}
          style={styles.translateButton}
        >
          Translate
        </Button>
        <IconButton icon="bookmark-plus-outline" size={24} onPress={() => {}} />
        <IconButton icon="share-variant" size={24} onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  paragraph: {
    marginBottom: 24,
  },
  chineseText: {
    marginBottom: 8,
  },
  pinyinText: {
    color: '#666',
    marginBottom: 8,
  },
  englishText: {
    color: '#444',
  },
  darkText: {
    color: '#fff',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  translateButton: {
    flex: 1,
    marginRight: 16,
  },
}); 