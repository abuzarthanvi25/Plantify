import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import CONSTANT from '../Constants.config';

export default function DetailComponent({
  imgUrl,
  title,
  category,
  price,
  size,
  cartAction,
  onPressFavourite,
}) {
  return (
    <>
      <View
        style={{
          height: 380,
          width: 390,
          backgroundColor: category !== 'Air Purifier' ? '#fff' : '#9CE5CB',
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 300,
          position: 'relative',
        }}>
        <Image
          style={{position: 'absolute', top: 0}}
          source={require('../assets/Vector.png')}
        />
        <Image
          style={{
            width: 200,
            height: 290,
            position: 'absolute',
            top: 108,
            left: 180,
            zIndex: 99,
          }}
          resizeMode="cover"
          source={{
            uri:
              imgUrl ??
              'http://craftsnippets.com/articles_images/placeholder/placeholder.jpg',
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 50,
          width: 240,
          left: 40,
        }}>
        <Text
          style={{
            color: CONSTANT.MAIN_TEXT_COLOR,
            fontSize: 44,
            fontWeight: 'bold',
          }}>
          {/* 28 */}
          {title.length > 28 ? title.toString().slice(0, 25) + '...' : title}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 25,
          zIndex: 333,
          width: 300,
          left: 40,
        }}>
        <Text
          style={{
            color: CONSTANT.MAIN_TEXT_COLOR,
            fontSize: 20,
            fontWeight: '700',
          }}>
          {category ?? ''}
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 180,
          zIndex: 333,
          width: 300,
          left: 40,
        }}>
        <Text
          style={{
            color: '#00214090',
            fontSize: 20,
            fontWeight: '700',
          }}>
          Price
        </Text>
        <Text
          style={{
            color: CONSTANT.MAIN_TEXT_COLOR,
            fontSize: 20,
            fontWeight: '800',
          }}>
          {price ? `$${price}` : ''}
        </Text>
      </View>
      {size ? (
        <View
          style={{
            position: 'absolute',
            top: 240,
            zIndex: 333,
            width: 300,
            left: 40,
          }}>
          <Text
            style={{
              color: '#00214090',
              fontSize: 20,
              fontWeight: '700',
            }}>
            Size
          </Text>
          <Text
            style={{
              color: CONSTANT.MAIN_TEXT_COLOR,
              fontSize: 20,
              fontWeight: '800',
            }}>
            {size ?? ''}
          </Text>
        </View>
      ) : null}
      <TouchableOpacity
        onPress={cartAction}
        style={{
          position: 'absolute',
          top: 330,
          left: 40,
          backgroundColor: CONSTANT.THEME_COLOR,
          padding: 12,
          borderRadius: 20,
          paddingHorizontal: 15,
        }}>
        <Icon2 name={'shopping-bag'} size={24} color={'#fff'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressFavourite ?? null}
        style={{position: 'absolute', top: 330, left: 120}}>
        <View
          style={{
            backgroundColor: category !== 'Air Purifier' ? '#DFDFDF' : 'white',
            padding: 14,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name={'heart'} size={25} color={'#000'} />
        </View>
      </TouchableOpacity>
    </>
  );
}
