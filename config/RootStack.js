import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/Signup';
import TabRoot from '../config/TabNavigationRoot';
import PlantDetails from '../screens/PlantDetails';
import Cart from '../screens/Cart';
import OrderCheckout from '../screens/OrderCheckout';
import SplashScreen from '../screens/SplashScreen';
import SeedDetails from '../screens/SeedDetails';
import {View} from 'react-native';
import Header from '../components/Header';
import PlantCareDetails from '../screens/PlantCareDetails';

const Stack = createNativeStackNavigator();

export default function RootStack({navigation}) {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="Signup"
          options={{headerShown: false}}
          component={SignUp}
        />
        <Stack.Screen
          name="Home Screen"
          options={{
            header: () => (
              <View
                style={{
                  padding: 20,
                  backgroundColor: '#fff',
                }}>
                <Header onPressMenu={() => navigation.openDrawer()} />
              </View>
            ),
          }}
          component={TabRoot}
        />
        <Stack.Screen
          name="Plant Detail Screen"
          options={{
            header: () => (
              <View
                style={{
                  padding: 20,
                  backgroundColor: '#fff',
                }}>
                <Header onPressMenu={() => navigation.openDrawer()} />
              </View>
            ),
          }}
          component={PlantDetails}
        />
        <Stack.Screen
          name="Seed Detail Screen"
          options={{
            header: () => (
              <View
                style={{
                  padding: 20,
                  backgroundColor: '#fff',
                }}>
                <Header onPressMenu={() => navigation.openDrawer()} />
              </View>
            ),
          }}
          component={SeedDetails}
        />
        <Stack.Screen
          name="Plant Care Detail Screen"
          options={{
            header: () => (
              <View
                style={{
                  padding: 20,
                  backgroundColor: '#fff',
                }}>
                <Header onPressMenu={() => navigation.openDrawer()} />
              </View>
            ),
          }}
          component={PlantCareDetails}
        />
        <Stack.Screen
          name="Cart Screen"
          options={{
            header: () => (
              <View
                style={{
                  padding: 20,
                  backgroundColor: '#fff',
                }}>
                <Header onPressMenu={() => navigation.openDrawer()} />
              </View>
            ),
          }}
          component={Cart}
        />
        <Stack.Screen
          name="Checkout Screen"
          options={{headerShown: false}}
          component={OrderCheckout}
        />
      </Stack.Navigator>
    </>
  );
}
