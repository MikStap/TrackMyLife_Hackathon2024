import { PropsWithChildren, useEffect, Component, ReactElement } from 'react';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { type Icon } from '@expo/vector-icons/build/createIconSet';

type Props = PropsWithChildren<{
  title: string;
  habitColor: string;
  icon: ReactElement;
}>;

export function Habit({ children, title, habitColor, icon}: PropsWithChildren & Props) {
  const theme = useColorScheme() ?? 'light';

  return (
    
    <ThemedView>
      <TouchableOpacity 
      style={[
        styles.rectangle,
        { backgroundColor: habitColor }
        ]}
      activeOpacity={0.5}>

        {icon}
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    borderWidth: 1, // draw border for view => border of the rectangle
    borderColor: Colors.dark.icon,
    borderRadius: 15,
    justifyContent: 'center', // centered by height
    alignItems: 'center', // centered by width
    height: 140,
    width: 140,
  },
});
