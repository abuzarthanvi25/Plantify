import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Linking,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import CONSTANT from '../Constants.config';

const CustomDrawerMenu = props => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={{margin: 25}}
          onPress={() => props.navigation.closeDrawer()}>
          <Icon name="close" size={35} color={CONSTANT.THEME_TEXT} />
        </TouchableOpacity>
      </View>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: 20,
          paddingHorizontal: 50,
        }}>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
            <Text style={{color: '#fff', fontSize: 24}}>Get The Dirt</Text>
            <TextInput
              placeholder="Enter your Email"
              placeholderTextColor="#EBEBEB"
              style={{
                width: 280,
                borderWidth: 1,
                borderColor: '#fff',
                borderRadius: 10,
                textAlign: 'center',
                fontSize: 16,
                padding: 15,
                marginVertical: 20,
              }}
            />
            <TouchableOpacity style={{marginVertical: 10}}>
              <Text style={{color: '#fff', fontSize: 25, fontWeight: '600'}}>
                FAQ
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginVertical: 10}}>
              <Text style={{color: '#fff', fontSize: 25, fontWeight: '600'}}>
                ABOUT US
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginVertical: 10}}>
              <Text style={{color: '#fff', fontSize: 25, fontWeight: '600'}}>
                CONTACT US
              </Text>
            </TouchableOpacity>
          </View>
        </DrawerContentScrollView>
      </SafeAreaView>
    </>
  );
};

export default CustomDrawerMenu;
