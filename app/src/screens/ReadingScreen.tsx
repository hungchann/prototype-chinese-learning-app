import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Text, IconButton, Card, Button, useTheme, SegmentedButtons } from 'react-native-paper';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';

type ReadingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Reading'>;
type ReadingScreenRouteProp = RouteProp<RootStackParamList, 'Reading'>;

const sampleText = {
  chinese: '你好，我是小明。我喜欢学习中文。',
  pinyin: 'Nǐ hǎo, wǒ shì Xiǎo Míng. Wǒ xǐhuān xuéxí zhōngwén.',
  english: 'Hello, I am Xiao Ming. I like learning Chinese.',
};

export default function ReadingScreen() {
  const [showPinyin, setShowPinyin] = React.useState(true);
  const [displayMode, setDisplayMode] = React.useState('paragraph');
  const [isPlaying, setIsPlaying] = React.useState(false);
  const navigation = useNavigation<ReadingScreenNavigationProp>();
  const route = useRoute<ReadingScreenRouteProp>();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Bilingual Reading" />
        <Appbar.Action icon="bookmark-outline" onPress={() => {}} />
      </Appbar.Header>

      <View style={styles.audioPlayer}>
        <IconButton
          icon={isPlaying ? 'pause' : 'play'}
          size={32}
          onPress={() => setIsPlaying(!isPlaying)}
        />
        <View style={styles.progressBar}>
          <View style={[styles.progress, { backgroundColor: theme.colors.primary }]} />
        </View>
        <Text>0:00 / 2:30</Text>
        <IconButton icon="speed" size={24} onPress={() => {}} />
      </View>

      <View style={styles.controls}>
        <SegmentedButtons
          value={displayMode}
          onValueChange={setDisplayMode}
          buttons={[
            { value: 'paragraph', label: 'Paragraph' },
            { value: 'table', label: 'Table' },
          ]}
        />
        <Button
          mode={showPinyin ? 'contained' : 'outlined'}
          onPress={() => setShowPinyin(!showPinyin)}
          icon="alphabetical"
        >
          Pinyin
        </Button>
      </View>

      <ScrollView style={styles.content}>
        <Card style={styles.textCard}>
          <Card.Content>
            <Text style={styles.chineseText}>{sampleText.chinese}</Text>
            {showPinyin && <Text style={styles.pinyinText}>{sampleText.pinyin}</Text>}
            <Text style={styles.englishText}>{sampleText.english}</Text>
          </Card.Content>
        </Card>

        <View style={styles.bottomTabs}>
          <IconButton icon="book" size={24} onPress={() => {}} />
          <IconButton icon="format-list-bulleted" size={24} onPress={() => {}} />
          <IconButton icon="microphone" size={24} onPress={() => {}} />
          <IconButton icon="check-circle" size={24} onPress={() => {}} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  audioPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 16,
    borderRadius: 2,
  },
  progress: {
    width: '30%',
    height: '100%',
    borderRadius: 2,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  textCard: {
    marginBottom: 16,
  },
  chineseText: {
    fontSize: 20,
    marginBottom: 8,
  },
  pinyinText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  englishText: {
    fontSize: 16,
    color: '#444',
  },
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 16,
  },
}); 