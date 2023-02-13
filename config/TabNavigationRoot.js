import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeRoot';
import Cart from '../screens/Cart';
import Favourites from '../screens/Favourites';
import Profile from '../screens/Profile';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

export default function Tabroot() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        title: '',
        tabBarIcon: ({focused, color}) => {
          if (route.name === 'Home') {
            return (
              <Image
                style={{
                  backgroundColor: focused ? '#FEE909' : '#fff',
                  padding: 16,
                  borderRadius: 10,
                  width: 20,
                }}
                resizeMode="contain"
                source={require('../assets/homeIcon.png')}
              />
            );
          }
          if (route.name === 'Cart') {
            return (
              <Image
                style={{
                  backgroundColor: focused ? '#FEE909' : '#fff',
                  padding: 16,
                  borderRadius: 10,
                  width: 20,
                }}
                resizeMode="contain"
                source={require('../assets/cartIcon.png')}
              />
            );
          }
          if (route.name === 'Favourites') {
            return (
              <Image
                style={{
                  backgroundColor: focused ? '#FEE909' : '#fff',
                  padding: 16,
                  borderRadius: 10,
                  width: 20,
                }}
                resizeMode="contain"
                source={require('../assets/favouriteIcon.png')}
              />
            );
          }
          if (route.name === 'Profile') {
            return (
              <Image
                style={{
                  backgroundColor: focused ? '#FEE909' : '#fff',
                  padding: 16,
                  borderRadius: 10,
                  width: 20,
                }}
                resizeMode="contain"
                source={require('../assets/profileIcon.png')}
              />
            );
          }
        },
        tabBarStyle: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          borderLeftWidth: 0.2,
          borderRightWidth: 0.2,
          position: 'absolute',
          overflow: 'hidden',
          height: 60,
          paddingTop: 10,
          shadowRadius: 2,
          shadowOffset: {
            width: 0,
            height: -10,
          },
          shadowColor: '#000000',
          elevation: 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          height: 25,
          fontWeight: 'bold',
        },
      })}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Favourites"
        component={Favourites}
      />
      <Tab.Screen options={{headerShown: false}} name="Cart" component={Cart} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
