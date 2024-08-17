import { Image, StyleSheet, Platform, useColorScheme } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import NormalScrollView from '@/components/NormalScrollView';
import { Habit } from '@/components/Habit';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  const theme = useColorScheme() ?? 'light';

  return (
    <NormalScrollView 
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' } 
      }>
      <Habit 
      title = "New" 
      habitColor = "blue"
      icon = {<Entypo
      name={'plus'}
      size={75}
      color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
      />}
      >
      </Habit>
      <Habit 
      title = "2nd" 
      habitColor = "green"
      icon = {<AntDesign
      name={'exclamationcircleo'}
      size={75}
      color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
      />}
      >
      </Habit>
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
    flexDirection: 'column',
  },
});
