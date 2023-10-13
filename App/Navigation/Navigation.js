import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import People from '../Screens/People';
import Login from '../Screens/Login';
import ScreenOne from '../Screens/MobileRecharge/ScreenOne';
import ScreenTwo from '../Screens/MobileRecharge/ScreenTwo';
import ScreenThree from '../Screens/MobileRecharge/ScreenThree';
import ScreenFour from '../Screens/MobileRecharge/ScreenFour';

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
      <Stack.Screen name="ScreenThree" component={ScreenThree} />
      <Stack.Screen name="ScreenFour" component={ScreenFour} />
    </Stack.Navigator>
  )
}
