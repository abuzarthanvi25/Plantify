import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {Dimensions, Text} from 'react-native';
import RootStack from './RootStack';
import PlantCare from '../screens/PlantCare';
import CONSTANT from '../Constants.config';
import CustomDrawerMenu from '../components/CustomDrawerMenu';
import Profile from '../screens/Profile';
const Drawer = createDrawerNavigator();

function NavigationRoot() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            width: Dimensions.get('window').width,
            backgroundColor: '#0D986A',
          },
        }}
        drawerContent={props => <CustomDrawerMenu {...props} />}>
        <Drawer.Screen
          name="Root Stack"
          options={{
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null,
            headerShown: false,
            drawerItemStyle: {
              display: 'none',
            },
          }}
          component={RootStack}
        />
        <Drawer.Screen
          name="Shop"
          options={{
            drawerLabel: () => (
              <Text
                style={{
                  color: CONSTANT.THEME_TEXT,
                  textAlign: 'center',
                  fontSize: 26,
                  fontWeight: '600',
                  marginVertical: 5,
                }}>
                Shop
              </Text>
            ),
            title: null,
            drawerIcon: () => (
              <Icon
                name="shopping-outline"
                size={30}
                color={CONSTANT.THEME_TEXT}
              />
            ),
            headerShown: false,
          }}
          component={RootStack}
        />
        <Drawer.Screen
          name="Plant Care"
          options={{
            drawerLabel: () => (
              <Text
                style={{
                  color: CONSTANT.THEME_TEXT,
                  textAlign: 'center',
                  fontSize: 26,
                  fontWeight: '600',
                  marginVertical: 5,
                }}>
                Plant Care
              </Text>
            ),
            title: null,
            drawerIcon: () => (
              <Icon
                name="flower-outline"
                size={30}
                color={CONSTANT.THEME_TEXT}
              />
            ),
            // headerShown: false,
          }}
          component={PlantCare}
        />
        {/* <Drawer.Screen
          name="Community"
          options={{
            drawerLabel: () => (
              <Text
                style={{
                  color: CONSTANT.THEME_TEXT,
                  textAlign: 'center',
                  fontSize: 26,
                  fontWeight: '600',
                  marginVertical: 5,
                }}>
                Community
              </Text>
            ),
            title: null,
            drawerIcon: () => (
              <Icon2 name="people" size={30} color={CONSTANT.THEME_TEXT} />
            ),
            headerShown: false,
          }}
          component={RootStack}
        /> */}
        <Drawer.Screen
          name="My Account"
          options={{
            drawerLabel: () => (
              <Text
                style={{
                  color: CONSTANT.THEME_TEXT,
                  textAlign: 'center',
                  fontSize: 26,
                  fontWeight: '600',
                  marginVertical: 5,
                }}>
                My Account
              </Text>
            ),
            title: null,
            drawerIcon: () => (
              <Icon
                name="account-outline"
                size={30}
                color={CONSTANT.THEME_TEXT}
              />
            ),
            // headerShown: false,
          }}
          component={Profile}
        />
        <Drawer.Screen
          name="Track Order"
          options={{
            drawerLabel: () => (
              <Text
                style={{
                  color: CONSTANT.THEME_TEXT,
                  textAlign: 'center',
                  fontSize: 26,
                  fontWeight: '600',
                  marginVertical: 5,
                }}>
                Track Order
              </Text>
            ),
            title: null,
            drawerIcon: () => (
              <Icon
                name="truck-fast-outline"
                size={30}
                color={CONSTANT.THEME_TEXT}
              />
            ),
            headerShown: false,
          }}
          component={RootStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default NavigationRoot;
