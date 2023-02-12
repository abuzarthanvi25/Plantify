import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import CONSTANT from '../Constants.config';

export default function OrderCheckout({navigation}) {
  return (
    <>
      <ScrollView style={{backgroundColor: '#fff', padding: 25}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/backLogo.png')} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            height: 400,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: 200}}>
            <Text
              style={{
                fontSize: 50,
                color: CONSTANT.THEME_COLOR,
                fontWeight: '800',
                textAlign: 'center',
              }}>
              Order
            </Text>
            <Text
              style={{
                fontSize: 50,
                color: CONSTANT.THEME_COLOR,
                fontWeight: '800',
                textAlign: 'center',
              }}>
              Received
            </Text>
            <Text
              style={{
                color: CONSTANT.MAIN_TEXT_COLOR,
                fontSize: 20,
                textAlign: 'center',
                marginVertical: 10,
                fontWeight: '500',
              }}>
              Order ID : #293092309
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={{height: 150, width: 150, marginBottom: 10}}
            source={require('../assets/CheckoutLogo.png')}
          />
          <TouchableOpacity
            style={{
              backgroundColor: CONSTANT.THEME_COLOR,
              paddingHorizontal: 125,
              paddingVertical: 16,
              flex: 1,
              borderRadius: 30,
            }}>
            <Text
              style={{
                color: CONSTANT.THEME_TEXT,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              CONFIRM
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
