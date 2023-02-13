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
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export default function RootStack({navigation}) {
  const authInfo = useSelector(state => state.auth);
  return (
    <>
      <Stack.Navigator>
        {!authInfo.user ? (
          <Stack.Screen
            name="Splash"
            options={{headerShown: false}}
            component={SplashScreen}
          />
        ) : null}
        {!authInfo.user ? (
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={Login}
          />
        ) : null}
        {!authInfo.user ? (
          <Stack.Screen
            name="Signup"
            options={{headerShown: false}}
            component={SignUp}
          />
        ) : null}
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
