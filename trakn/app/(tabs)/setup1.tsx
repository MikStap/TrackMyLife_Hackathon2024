import { Image, StyleSheet, Platform } from 'react-native';

import NormalScrollView from '@/components/NormalScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <NormalScrollView 
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' } 
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Setup Page!</ThemedText>
      </ThemedView>
    </NormalScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
