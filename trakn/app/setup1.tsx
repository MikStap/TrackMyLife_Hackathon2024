import { Image, Pressable, StyleSheet, View, } from 'react-native';
import { useColorScheme } from "nativewind";
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '@/constants/Colors';
import { LightMode } from '@/components/LightMode';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

export default function SetupScreen() { 
  const { colorScheme, toggleColorScheme } = useColorScheme()
  const color = colorScheme === 'light' ? '#A1CEDC' : '#1D3D47'
  return (
    <ThemedView style={styles.container}>
      <View
        style={[
          styles.header,
          { backgroundColor: color},
        ]}>
          <View style={[{flexDirection: 'row'}]}>
            <Link href="/">
              <Pressable>
                <Entypo
                name={'back'}
                size={75}
                color={colorScheme === 'light' ? Colors.light.icon : Colors.dark.icon}
                style={styles.back}/>
              </Pressable>
            </Link>
            <div style={styles.spacer}></div>
           <LightMode></LightMode>
        </View>
      </View>
      <ThemedView style={styles.content}>
        <ThemedText type="title">New Habit</ThemedText>
        <div style={styles.row}>
        <ThemedText>Label  </ThemedText>
        <input></input>
        </div>
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
  },
  row: {
    flexDirection: 'row',
  },
  spacer: {
    flexGrow:2
  }
});
