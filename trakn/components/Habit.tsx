import Entypo from '@expo/vector-icons/Entypo';
import { PropsWithChildren, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

export function Habit({ children, title }: PropsWithChildren & { title: string }) {
  const theme = useColorScheme() ?? 'light';

  return (
    
    <ThemedView>
      <TouchableOpacity 
      style={theme === 'light' ? styles.rectangleLightDefault : styles.rectangleDarkDefault}
      activeOpacity={0.5}>
        <ThemedView style={styles.button}>
          <Entypo
            name={'plus'}
            size={75}
            color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          />
          <ThemedText type="defaultSemiBold">{title}</ThemedText>
        </ThemedView>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  button: {
    alignItems: 'center',
  },
  rectangleLightDefault: {
    borderWidth: 1, // draw border for view => border of the rectangle
    backgroundColor: Colors.light.background,
    borderColor: Colors.dark.icon,
    borderRadius: 15,
    justifyContent: 'center', // centered by height
    alignItems: 'center', // centered by width
    height: 140,
    width: 140,
  },
  rectangleDarkDefault: {
    borderWidth: 1, // draw border for view => border of the rectangle
    backgroundColor: Colors.dark.background,
    borderColor: Colors.dark.icon,
    borderRadius: 15,
    justifyContent: 'center', // centered by height
    alignItems: 'center', // centered by width
    height: 140,
    width: 140,
  },
});
