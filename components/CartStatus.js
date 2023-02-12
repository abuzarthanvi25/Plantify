import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CartStatus({onPress, cartItemNumber, subTotal}) {
  return (
    <>
      {cartItemNumber && subTotal ? (
        <View
          style={{
            height: 65,
            width: 385,
            backgroundColor: '#0D986A',
            borderRadius: 30,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={onPress ?? null}
            style={{marginHorizontal: 30}}>
            <Icon name="shopping-outline" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress ?? null} style={{marginLeft: 10}}>
            <Text style={{fontSize: 18, fontWeight: '500'}}>
              View {cartItemNumber} item{cartItemNumber > 1 ? 's' : null}
            </Text>
          </TouchableOpacity>
          <View style={{marginLeft: 80}}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '600',
                color: '#fff',
              }}>
              ${subTotal}
            </Text>
          </View>
        </View>
      ) : null}
    </>
  );
}
