import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CONSTANT from '../Constants.config';

export default function Header({onPressMenu, onPressNotification}) {
  return (
    <>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../assets/logoSmall.png')} />
        <Image
          style={{marginLeft: 30}}
          source={require('../assets/plantifySmall.png')}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 80,
          }}>
          <TouchableOpacity
            onPress={onPressNotification ?? null}
            style={{marginHorizontal: 10}}>
            <Icon
              name={'notifications-none'}
              size={26}
              color={CONSTANT.MAIN_TEXT_COLOR}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressMenu ?? null}
            style={{marginHorizontal: 10}}>
            <Icon name={'menu'} size={28} color={CONSTANT.MAIN_TEXT_COLOR} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
