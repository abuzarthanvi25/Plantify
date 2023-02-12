import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import CONSTANT from '../Constants.config';

export default function CardComponent({
  imageUrl,
  title,
  category,
  price,
  onPress,
  cartAction,
  bgColor,
  onPressFavourite,
}) {
  return (
    <View
      style={{
        height: 260,
        position: 'relative',
        margin: 20,
      }}>
      <ImageBackground
        style={{
          backgroundColor: bgColor ?? '#fff',
          height: 200,
          borderRadius: 40,
          position: 'absolute',
          top: 80,
          width: 320,
          left: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: 8,
        }}
        source={require('../assets/Rectangle28.png')}>
        <Image
          style={{width: 400, height: 200}}
          source={require('../assets/MaskGroup.png')}
        />
      </ImageBackground>
      <Image
        style={{
          height: category !== 'Air Purifier' ? 100 : 210,
          width: 215,
          position: 'absolute',
          left: category !== 'Air Purifier' ? 170 : 185,
          zIndex: 99,
          bottom: 60,
        }}
        resizeMode="contain"
        source={{
          uri:
            imageUrl ??
            'https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/mathier190500002.jpg?ver=6',
        }}
      />
      <Text
        style={{
          position: 'absolute',
          top: 95,
          left: 45,
          fontSize: 20,
          color: CONSTANT.MAIN_TEXT_COLOR,
          fontWeight: '600',
        }}>
        {category}
      </Text>
      <View style={{width: 210}}>
        <Text
          style={{
            position: 'absolute',
            top: 115,
            left: 45,
            fontSize: 42,
            color: CONSTANT.MAIN_TEXT_COLOR,
            fontWeight: '700',
          }}>
          {title && typeof title === 'string' && title.length > 20
            ? title.slice(0, 17) + '..'
            : title}
        </Text>
      </View>
      <Text
        style={{
          position: 'absolute',
          top: 215,
          left: 45,
          fontSize: 30,
          color: CONSTANT.MAIN_TEXT_COLOR,
          fontWeight: '600',
        }}>
        ${price}
      </Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: CONSTANT.THEME_COLOR,
            padding: 10,
            position: 'absolute',
            left: 140,
            top: 208,
            borderRadius: 20,
            paddingHorizontal: 15,
          }}
          onPress={onPressFavourite}>
          <Icon2 name="heart" size={24} color={CONSTANT.THEME_TEXT} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: CONSTANT.THEME_COLOR,
            padding: 10,
            position: 'absolute',
            left: 260,
            top: 208,
            borderRadius: 20,
            paddingHorizontal: 15,
          }}>
          <Icon name={'view-in-ar'} size={24} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={cartAction ?? null}
          style={{
            backgroundColor: CONSTANT.THEME_COLOR,
            padding: 10,
            position: 'absolute',
            left: 200,
            top: 208,
            borderRadius: 20,
            paddingHorizontal: 15,
          }}>
          <Icon name={'shopping-bag'} size={24} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
