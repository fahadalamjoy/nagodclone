import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Transaction from '../Screens/Transaction';
import { Image } from 'react-native';
import ImagePath from '../constants/ImagePath';
import tw from 'twrnc';
import People from '../Screens/People';
import MyNagad from '../Screens/MyNagad';

export default function BottomTabs() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
            paddingRight: 10,
            paddingLeft: 10,
            height: 50,
        }

      }}
    >
      <Tab.Screen name="Home" component={Home} 
         options={{
          headerShown: false,
           tabBarIcon: ({focused}) => {
             return (
               <Image style={{tintColor : focused ? 'tomato' : 'gray'}} source={ImagePath.HomeIcon}  />
             )
           }
         }}
      />
      <Tab.Screen name="Transaction" component={Transaction} 
         options={{
          headerShown: false,
           tabBarIcon: ({focused}) => {
             return (
               <Image style={{tintColor : focused ? 'tomato' : 'gray'}} source={ImagePath.TransactionIcon} />
             )
           }
         }}
      />
      <Tab.Screen name="People" component={People} 
         options={{
          headerShown: false,
           tabBarIcon: ({focused}) => {
             return (
               <Image style={{tintColor : focused ? 'tomato' : 'gray'}} source={ImagePath.PeopleIcon}/>
             )
           }
         }}
      />
      <Tab.Screen name="My Nagad" component={MyNagad} 
        
         options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTitleStyle: {
            color: 'white',
          },
           tabBarIcon: ({focused}) => {
             return (
               <Image style={{tintColor : focused ? 'tomato' : 'gray'}} source={ImagePath.MynagadIcon}/>
             )
           }
         }}
      />
    </Tab.Navigator>
  )
}