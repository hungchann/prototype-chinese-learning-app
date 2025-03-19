import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Text, ProgressBar, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const stats = [
  {
    id: 'time',
    title: 'Total Learning Time',
    value: '12.5 hours',
    icon: 'clock-outline',
  },
  {
    id: 'vocabulary',
    title: 'Vocabulary Learned',
    value: '250 words',
    icon: 'book-alphabet',
  },
  {
    id: 'articles',
    title: 'Articles Completed',
    value: '15 articles',
    icon: 'file-document-outline',
  },
  {
    id: 'quiz',
    title: 'Quiz Performance',
    value: '85%',
    icon: 'check-circle-outline',
  },
];

export default function ProgressScreen() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Learning Progress" />
      </Appbar.Header>

      <ScrollView style={styles.content}>
        <Card style={styles.overviewCard}>
          <Card.Title title="Weekly Overview" />
          <Card.Content>
            <ProgressBar progress={0.7} color={theme.colors.primary} style={styles.progressBar} />
            <Text style={styles.progressText}>70% of weekly goal completed</Text>
          </Card.Content>
        </Card>

        {stats.map((stat) => (
          <Card key={stat.id} style={styles.statCard}>
            <Card.Title
              title={stat.title}
              subtitle={stat.value}
              left={(props) => (
                <MaterialCommunityIcons
                  name={stat.icon as any}
                  size={props.size}
                  color={theme.colors.primary}
                />
              )}
            />
          </Card>
        ))}

        <Card style={styles.streakCard}>
          <Card.Title
            title="Learning Streak"
            subtitle="5 days"
            left={(props) => (
              <MaterialCommunityIcons
                name="fire"
                size={props.size}
                color={theme.colors.primary}
              />
            )}
          />
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  overviewCard: {
    marginBottom: 16,
    elevation: 4,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  progressText: {
    marginTop: 8,
    textAlign: 'center',
    color: '#666',
  },
  statCard: {
    marginBottom: 16,
    elevation: 4,
  },
  streakCard: {
    marginBottom: 16,
    elevation: 4,
  },
}); 