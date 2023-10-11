import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import People from '../Screens/People';
import Login from '../Screens/Login';
import ScreenOne from '../Screens/MobileRecharge/ScreenOne';
import ScreenTwo from '../Screens/MobileRecharge/ScreenTwo';

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
      <Stack.Screen name="ScreenOne" component={ScreenOne} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
    </Stack.Navigator>
  )
}
