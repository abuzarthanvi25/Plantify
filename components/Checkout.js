import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function Checkout({subTotal, onCheckout}) {
  return (
    <>
      {subTotal ? (
        <View
          style={{
            height: 70,
            width: 385,
            backgroundColor: '#0D986A',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={onCheckout ?? null}>
            <Text style={{fontSize: 22, fontWeight: '700', color: '#fff'}}>
              Checkout
            </Text>
          </TouchableOpacity>
          <View style={{marginLeft: 80, flexDirection: 'row'}}>
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
