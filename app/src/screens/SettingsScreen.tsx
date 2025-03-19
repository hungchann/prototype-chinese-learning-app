import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, List, Switch, Divider, useTheme } from 'react-native-paper';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [defaultSpeed, setDefaultSpeed] = React.useState(1.0);
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Settings" />
      </Appbar.Header>

      <ScrollView>
        <List.Section>
          <List.Subheader>Appearance</List.Subheader>
          <List.Item
            title="Dark Mode"
            left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
            right={() => (
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                color={theme.colors.primary}
              />
            )}
          />
          <Divider />
        </List.Section>

        <List.Section>
          <List.Subheader>Audio</List.Subheader>
          <List.Item
            title="Default Playback Speed"
            description={`${defaultSpeed}x`}
            left={(props) => <List.Icon {...props} icon="speedometer" />}
            onPress={() => {
              const newSpeed = defaultSpeed >= 2 ? 0.5 : defaultSpeed + 0.25;
              setDefaultSpeed(newSpeed);
            }}
          />
          <Divider />
        </List.Section>

        <List.Section>
          <List.Subheader>Language</List.Subheader>
          <List.Item
            title="App Language"
            description="English"
            left={(props) => <List.Icon {...props} icon="translate" />}
          />
          <Divider />
        </List.Section>

        <List.Section>
          <List.Subheader>Data</List.Subheader>
          <List.Item
            title="Clear Cache"
            description="Free up space"
            left={(props) => <List.Icon {...props} icon="trash-can-outline" />}
            onPress={() => {}}
          />
          <List.Item
            title="Download Settings"
            description="Manage offline content"
            left={(props) => <List.Icon {...props} icon="download" />}
            onPress={() => {}}
          />
          <Divider />
        </List.Section>

        <List.Section>
          <List.Subheader>About</List.Subheader>
          <List.Item
            title="Version"
            description="1.0.0"
            left={(props) => <List.Icon {...props} icon="information" />}
          />
          <List.Item
            title="Privacy Policy"
            left={(props) => <List.Icon {...props} icon="shield-check" />}
            onPress={() => {}}
          />
          <List.Item
            title="Terms of Service"
            left={(props) => <List.Icon {...props} icon="file-document" />}
            onPress={() => {}}
          />
        </List.Section>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
}); 