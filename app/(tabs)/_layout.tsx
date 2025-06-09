import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { Pressable, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={({ navigation }) => ({
          drawerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].tabBackgroundCOlor,
            width: 240,
          },
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: Colors[colorScheme ?? 'light'].text,
          },
          drawerActiveTintColor: Colors[colorScheme ?? 'light'].tabIconSelected,
          drawerInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
          headerStyle: {
            backgroundColor: Colors[colorScheme ?? 'light'].tabBackgroundCOlor,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.toggleDrawer()}
              style={{ marginLeft: 15 }}
            >
              <Ionicons
                name="menu"
                size={24}
                color={Colors[colorScheme ?? 'light'].text}
              />
            </Pressable>
          ),
        })}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
