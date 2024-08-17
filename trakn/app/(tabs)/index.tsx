import { Image, StyleSheet, Pressable, View, type ViewProps} from 'react-native';
import { useColorScheme } from "nativewind";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import NormalScrollView from '@/components/NormalScrollView';
import { Habit } from '@/components/Habit';
import { Colors } from '@/constants/Colors';

export default function HomeScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  return (
    <NormalScrollView 
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' } 
      }>
        <View style={ [{flexDirection: 'row'}] }>
          <Habit 
          title = "New" 
          habitColor = {colorScheme === 'light' ? Colors.light.background : Colors.dark.background}
          link = "/setup1"
          icon = {<Entypo
          name={'plus'}
          size={75}
          color={colorScheme === 'light' ? Colors.light.icon : Colors.dark.icon}
          />}
          >
          </Habit>
          <Habit 
          title = "Sitemap" 
          habitColor = "green"
          link = "/_sitemap"
          icon = {<AntDesign
          name={'exclamationcircleo'}
          size={75}
          color={colorScheme === 'light' ? Colors.light.icon : Colors.dark.icon}
          />}
          >
          </Habit>
        </View>
      </NormalScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    margin: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    flexDirection: 'column',
  },
});
