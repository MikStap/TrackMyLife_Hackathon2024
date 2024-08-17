import { Image, Pressable, StyleSheet, useColorScheme, View, } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

export default function SetupScreen() {
  const theme = useColorScheme() ?? 'light';
  const color = theme === 'light' ? '#A1CEDC' : '#1D3D47'
  return (
    <ThemedView style={styles.container}>
      <View
        style={[
          styles.header,
          { backgroundColor: color},
        ]}>
          <Link href="/" asChild>
          <Pressable>
          <Entypo
          name={'back'}
          size={75}
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          style={styles.back}/>
          </Pressable>
          </Link>
      </View>
      <ThemedView style={styles.content}>
        <ThemedText type="title">Setup Page!</ThemedText>
      </ThemedView>
  </ThemedView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    overflow: 'hidden',
    alignContent: 'center',
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  back: {
    margin: 10,
    marginLeft: 30,
  }
});
