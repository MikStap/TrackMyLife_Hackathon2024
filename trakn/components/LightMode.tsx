import { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { useColorScheme } from "nativewind";
import Entypo from '@expo/vector-icons/Entypo';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export function LightMode({ children}: PropsWithChildren ) {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <Pressable
        onPress={toggleColorScheme}
        style={[{margin: 10}, {marginRight: 30}]}>
        <Entypo
        name='adjust'
        size={75}
        color={colorScheme === 'light' ? Colors.light.icon : Colors.dark.icon}
        />
      </Pressable>
  );
}

const styles = StyleSheet.create({
});
