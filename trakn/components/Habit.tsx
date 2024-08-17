import { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, TouchableOpacity, Pressable, } from 'react-native';
import { useColorScheme } from "nativewind";
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Href, Link } from 'expo-router';

type Props = PropsWithChildren<{
  title: string;
  habitColor: string;
  icon: ReactElement;
  link: Href;
}>;

export function Habit({ children, title, habitColor, icon, link}: PropsWithChildren & Props) {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    
    <ThemedView>
      <Link href={link} asChild>
        <Pressable>
          <TouchableOpacity 
          style={[
            styles.rectangle,
            { backgroundColor: habitColor }
            ]}
          activeOpacity={0.5}>

            {icon}
            <ThemedText type="defaultSemiBold">{title}</ThemedText>
          </TouchableOpacity>
          </Pressable>
        </Link>
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
    margin: 15,
  },
});
