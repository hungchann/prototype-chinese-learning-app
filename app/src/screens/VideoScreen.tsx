import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Appbar, Text, IconButton, Button, Card, useTheme } from 'react-native-paper';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type VideoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Video'>;
type VideoScreenRouteProp = RouteProp<RootStackParamList, 'Video'>;

const sampleVideo = {
  title: 'Basic Chinese Conversations',
  description: 'Learn everyday Chinese phrases with native speakers',
  subtitles: [
    {
      time: '0:05',
      chinese: '你好！你今天好吗？',
      pinyin: 'Nǐ hǎo! Nǐ jīntiān hǎo ma?',
      english: 'Hello! How are you today?',
    },
    {
      time: '0:10',
      chinese: '我很好，谢谢。你呢？',
      pinyin: 'Wǒ hěn hǎo, xièxiè. Nǐ ne?',
      english: "I'm good, thank you. And you?",
    },
  ],
};

export default function VideoScreen() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [subtitleMode, setSubtitleMode] = React.useState<'bilingual' | 'chinese' | 'english'>('bilingual');
  const navigation = useNavigation<VideoScreenNavigationProp>();
  const route = useRoute<VideoScreenRouteProp>();
  const theme = useTheme();

  const toggleSubtitleMode = () => {
    const modes: ('bilingual' | 'chinese' | 'english')[] = ['bilingual', 'chinese', 'english'];
    const currentIndex = modes.indexOf(subtitleMode);
    setSubtitleMode(modes[(currentIndex + 1) % modes.length]);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={sampleVideo.title} />
        <Appbar.Action icon="bookmark-outline" onPress={() => {}} />
      </Appbar.Header>

      <View style={styles.videoContainer}>
        <View style={styles.videoPlaceholder}>
          <IconButton
            icon={isPlaying ? 'pause' : 'play'}
            size={48}
            iconColor="#fff"
            onPress={() => setIsPlaying(!isPlaying)}
          />
        </View>

        <View style={styles.videoControls}>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { backgroundColor: theme.colors.primary }]} />
          </View>
          <View style={styles.timeControls}>
            <Text>0:00 / 5:30</Text>
            <View style={styles.rightControls}>
              <IconButton icon="speed" size={24} onPress={() => {}} />
              <IconButton
                icon="closed-caption"
                size={24}
                onPress={toggleSubtitleMode}
              />
              <IconButton icon="fullscreen" size={24} onPress={() => {}} />
            </View>
          </View>
        </View>
      </View>

      <Card style={styles.descriptionCard}>
        <Card.Content>
          <Text variant="titleMedium">{sampleVideo.title}</Text>
          <Text variant="bodyMedium" style={styles.description}>
            {sampleVideo.description}
          </Text>
        </Card.Content>
      </Card>

      <View style={styles.subtitlesContainer}>
        <Text variant="titleMedium" style={styles.subtitlesHeader}>
          Subtitles ({subtitleMode})
        </Text>
        {sampleVideo.subtitles.map((subtitle, index) => (
          <Card key={index} style={styles.subtitleCard}>
            <Card.Content>
              <Text style={styles.timestamp}>{subtitle.time}</Text>
              {(subtitleMode === 'bilingual' || subtitleMode === 'chinese') && (
                <>
                  <Text style={styles.chineseText}>{subtitle.chinese}</Text>
                  <Text style={styles.pinyinText}>{subtitle.pinyin}</Text>
                </>
              )}
              {(subtitleMode === 'bilingual' || subtitleMode === 'english') && (
                <Text style={styles.englishText}>{subtitle.english}</Text>
              )}
            </Card.Content>
          </Card>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  videoContainer: {
    backgroundColor: '#000',
  },
  videoPlaceholder: {
    width: '100%',
    height: Dimensions.get('window').width * (9 / 16),
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoControls: {
    padding: 16,
    backgroundColor: '#000',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#666',
    borderRadius: 2,
    marginBottom: 8,
  },
  progress: {
    width: '30%',
    height: '100%',
    borderRadius: 2,
  },
  timeControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionCard: {
    margin: 16,
  },
  description: {
    marginTop: 8,
    color: '#666',
  },
  subtitlesContainer: {
    flex: 1,
    padding: 16,
  },
  subtitlesHeader: {
    marginBottom: 16,
  },
  subtitleCard: {
    marginBottom: 16,
  },
  timestamp: {
    color: '#666',
    marginBottom: 4,
  },
  chineseText: {
    fontSize: 18,
    marginBottom: 4,
  },
  pinyinText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  englishText: {
    fontSize: 14,
    color: '#444',
  },
}); 