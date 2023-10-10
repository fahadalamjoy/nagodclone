import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import People from '../Screens/People';
import Login from '../Screens/Login';

export default function Navigation() {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
        
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Notifications" component={People} />
    </Stack.Navigator>
  )
}
