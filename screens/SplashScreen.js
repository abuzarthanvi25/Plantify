import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CONSTANT from '../Constants.config';

export default function SplashScreen({navigation}) {
  return (
    <View style={{backgroundColor: CONSTANT.THEME_TEXT, height: 840}}>
      <View
        style={{
          height: 520,
          backgroundColor: CONSTANT.THEME_COLOR,
          borderBottomEndRadius: 50,
          borderBottomStartRadius: 50,
        }}>
        <ImageBackground
          style={{height: 500, alignItems: 'center', justifyContent: 'center'}}
          source={require('../assets/Vector.png')}>
          <Image
            style={{marginTop: 20, height: 210, width: 255, marginBottom: 40}}
            source={require('../assets/Logo.png')}
          />
          <Image
            style={{height: 32, width: 250, marginTop: 25}}
            source={require('../assets/Plantify.png')}
          />
        </ImageBackground>
      </View>
      <View>
        <Image
          style={{marginHorizontal: 20, marginTop: 30}}
          source={require('../assets/Home_text.png')}
        />
        <Text
          style={{
            color: CONSTANT.THEME_COLOR,
            marginHorizontal: 20,
            marginVertical: 30,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Shop the Plantify range on our online store and have it delievered to
          yoru door. With nationwide shipping at affordable rates you can have
          any plant or pot
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{
              backgroundColor: CONSTANT.THEME_COLOR,
              paddingHorizontal: 100,
              paddingVertical: 18,
              borderRadius: 30,
            }}>
            <Text
              style={{
                color: CONSTANT.THEME_TEXT,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              GET STARTED
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
