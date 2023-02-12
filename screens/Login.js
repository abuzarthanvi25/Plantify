import React from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import CONSTANT from '../Constants.config';

export default function Login({navigation}) {
  return (
    <ScrollView
      style={{backgroundColor: CONSTANT.THEME_TEXT, height: 840, padding: 20}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../assets/backLogo.png')} />
      </TouchableOpacity>
      <View
        style={{
          marginLeft: 8,
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
          width: 170,
          justifyContent: 'space-between',
        }}>
        <Image source={require('../assets/logoSmall.png')} />
        <Image source={require('../assets/plantifySmall.png')} />
      </View>
      <View style={{marginLeft: 8}}>
        <Text
          style={{
            color: CONSTANT.THEME_COLOR,
            fontSize: 70,
            fontWeight: 'bold',
          }}>
          Login
        </Text>

        <Text
          style={{
            color: CONSTANT.THEME_COLOR,
            fontSize: 20,
            marginTop: 10,
          }}>
          Enter your credentials to access your account
        </Text>

        <View style={{marginTop: 40}}>
          <Text
            style={{
              color: CONSTANT.THEME_LABEL_COLOR,
              fontSize: 20,
              opacity: 0.4,
              marginBottom: 5,
            }}>
            Username/ Email
          </Text>
          <View>
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: CONSTANT.INPUT_COLOR,
                borderRadius: 5,
                paddingLeft: 45,
                fontSize: 20,
                alignItems: 'center',
                position: 'relative',
                color: CONSTANT.THEME_LABEL_COLOR,
              }}
              keyboardType="email-address"
              placeholder="Email"
              placeholderTextColor={CONSTANT.PLACEHOLDER_COLOR}
            />
            <Image
              style={{
                marginBottom: 10,
                marginRight: 10,
                position: 'absolute',
                top: 15,
                left: 20,
              }}
              source={require('../assets/inputIcon.png')}
            />
          </View>
        </View>

        <View style={{marginTop: 30}}>
          <Text
            style={{
              color: CONSTANT.THEME_LABEL_COLOR,
              fontSize: 20,
              opacity: 0.4,
              marginBottom: 5,
            }}>
            Password
          </Text>
          <View>
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: CONSTANT.INPUT_COLOR,
                borderRadius: 5,
                paddingLeft: 45,
                fontSize: 20,
                alignItems: 'center',
                position: 'relative',
                color: CONSTANT.THEME_LABEL_COLOR,
              }}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor={CONSTANT.PLACEHOLDER_COLOR}
            />
            <Image
              style={{
                marginBottom: 10,
                marginRight: 10,
                position: 'absolute',
                top: 15,
                left: 20,
              }}
              source={require('../assets/inputIcon.png')}
            />
          </View>
        </View>

        <TouchableOpacity style={{marginVertical: 10}}>
          <Text
            style={{
              color: CONSTANT.THEME_LABEL_COLOR,
              textAlign: 'right',
              fontSize: 18,
            }}>
            Forgot Password
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 50,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home Screen')}
            style={{
              backgroundColor: CONSTANT.THEME_COLOR,
              paddingHorizontal: 140,
              paddingVertical: 16,
              borderRadius: 30,
            }}>
            <Text
              style={{
                color: CONSTANT.THEME_TEXT,
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={{marginVertical: 10}}>
          <Text
            style={{
              color: CONSTANT.THEME_LABEL_COLOR,
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Don't have an account? Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
