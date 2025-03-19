import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Text, IconButton, useTheme, Button } from 'react-native-paper';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type PodcastScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Podcast'>;
type PodcastScreenRouteProp = RouteProp<RootStackParamList, 'Podcast'>;

const samplePodcast = {
  title: 'Learning Chinese Through Stories',
  episode: 'Episode 1: Daily Conversations',
  duration: '15:30',
  transcript: [
    {
      time: '0:00',
      chinese: '大家好，欢迎收听中文学习播客。',
      pinyin: 'Dàjiā hǎo, huānyíng shōutīng zhōngwén xuéxí bōkè.',
      english: 'Hello everyone, welcome to the Chinese Learning Podcast.',
    },
    {
      time: '0:30',
      chinese: '今天我们要学习日常对话。',
      pinyin: 'Jīntiān wǒmen yào xuéxí rìcháng duìhuà.',
      english: "Today we're going to learn daily conversations.",
    },
  ],
};

export default function PodcastScreen() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [showTranscript, setShowTranscript] = React.useState(true);
  const navigation = useNavigation<PodcastScreenNavigationProp>();
  const route = useRoute<PodcastScreenRouteProp>();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={samplePodcast.title} subtitle={samplePodcast.episode} />
        <Appbar.Action icon="bookmark-outline" onPress={() => {}} />
      </Appbar.Header>

      <Card style={styles.playerCard}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <View style={styles.audioPlayer}>
            <IconButton
              icon={isPlaying ? 'pause' : 'play'}
              size={32}
              onPress={() => setIsPlaying(!isPlaying)}
            />
            <View style={styles.progressBar}>
              <View style={[styles.progress, { backgroundColor: theme.colors.primary }]} />
            </View>
            <Text>{samplePodcast.duration}</Text>
            <IconButton icon="speed" size={24} onPress={() => {}} />
          </View>
        </Card.Content>
      </Card>

      <View style={styles.transcriptHeader}>
        <Text variant="titleMedium">Transcript</Text>
        <Button
          mode={showTranscript ? 'contained' : 'outlined'}
          onPress={() => setShowTranscript(!showTranscript)}
        >
          {showTranscript ? 'Hide' : 'Show'}
        </Button>
      </View>

      {showTranscript && (
        <ScrollView style={styles.transcript}>
          {samplePodcast.transcript.map((line, index) => (
            <Card key={index} style={styles.transcriptCard}>
              <Card.Content>
                <Text style={styles.timestamp}>{line.time}</Text>
                <Text style={styles.chineseText}>{line.chinese}</Text>
                <Text style={styles.pinyinText}>{line.pinyin}</Text>
                <Text style={styles.englishText}>{line.english}</Text>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  playerCard: {
    margin: 16,
  },
  audioPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
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
  transcriptHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  transcript: {
    flex: 1,
    padding: 16,
  },
  transcriptCard: {
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