import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
  <Tabs screenOptions={{
    tabBarActiveTintColor: '#f9e7f0',
    headerStyle: {
      backgroundColor: '#e8a1c4'
    }, 
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
      backgroundColor: '#e8a1c4',
    }
  }}>
    <Tabs.Screen 
    name="index" 
    options={{ 
      title: 'Início',
      tabBarIcon: ({ color, focused }) =>(
            <Ionicons 
            name={ focused ?'home-sharp' : 'home-outline'}
            color={color} size={24} />
      ),
    }}
    />
     <Tabs.Screen 
    name="about" 
    options={{ 
      title: 'Saiba mais',
      tabBarIcon: ({ color, focused }) =>(
            <Ionicons 
            name={ focused ? 'information-circle' : 'information-circle-outline'}
            color={color} size={24} />
      ),
    }}
    />
  </Tabs>
  );
}
