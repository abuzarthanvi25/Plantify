import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CONSTANT from '../Constants.config';

export default function DeliveryComponent({deliveryCost}) {
  return (
    <>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        <View
          style={{
            backgroundColor: CONSTANT.CART_VIEW_COLOR,
            width: 70,
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
          }}>
          <Icon
            name="truck-fast-outline"
            size={40}
            color={CONSTANT.THEME_COLOR}
          />
        </View>
        <View style={{marginLeft: 20, marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              width: 255,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: CONSTANT.MAIN_TEXT_COLOR,
                fontSize: 22,
                fontWeight: '700',
              }}>
              Delivery
            </Text>
            <View
              style={{
                height: 6,
                width: 100,
                backgroundColor: CONSTANT.THEME_COLOR,
                marginBottom: 5,
                borderRadius: 15,
              }}></View>
            <Text
              style={{
                fontSize: 25,
                color: CONSTANT.MAIN_TEXT_COLOR,
                fontWeight: '500',
              }}>
              ${deliveryCost}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 22, color: CONSTANT.MAIN_TEXT_COLOR}}>
              Order above $1200 to get free delivery
            </Text>
            <Text
              style={{
                color: CONSTANT.THEME_COLOR,
                fontWeight: '500',
                fontSize: 22,
              }}>
              Shop for more $190
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
