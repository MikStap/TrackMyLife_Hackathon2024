import { Image, StyleSheet, Platform } from 'react-native';
import NormalScrollView from '@/components/NormalScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function InfoScreen() {
  return (
    <NormalScrollView 
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' } 
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Trakt</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">1. Catagories</ThemedText>
        <ThemedText>
          Find what in 
          <ThemedText type="defaultSemiBold"> your</ThemedText> life needs some extra accountability.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">2: Entry Options</ThemedText>
        <ThemedText>
          Configure 
          <ThemedText type="defaultSemiBold"> your</ThemedText> entry options for these catagories.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">3: Trak!</ThemedText>
        <ThemedText>
          When you're ready, get monitoring, and take control of 
          <ThemedText type="defaultSemiBold"> your</ThemedText> life again!
        </ThemedText>
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
