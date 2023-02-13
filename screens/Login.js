import React, {useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import CONSTANT from '../Constants.config';
import CONSTANT2 from '../config/constants.config';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {addAuthInfo} from '../store/authSlice';
import Toast from 'react-native-toast-message';
import {showToast} from '../methods/methods';

export default function Login({navigation}) {
  const [model, setModel] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setError(null);
    setIsLoading(true);
    console.log(model);
    if (!model.email || !model.password) {
      showToast('REQUIRED FIELDS ARE MISSING', 'error');
      setIsLoading(false);
    } else {
      axios
        .post(`${CONSTANT2.PROJECT_URL}/api/login`, model)
        .then(res => {
          console.log(res.data);
          setIsLoading(false);
          if (res.data.status) {
            dispatch(addAuthInfo(res.data));
            showToast('LOGGED IN SUCCESSFULLY', 'success');
            setTimeout(() => {
              navigation.navigate('Home Screen');
            }, 2000);
          } else {
            setError(res.data.message);
            showToast('LOGIN FAILURE', 'error');
          }
        })
        .catch(err => {
          console.log(err);
          setError(err.message);
          setIsLoading(false);
          showToast('LOGIN FAILURE', 'error');
        });
    }
  };

  return (
    <ScrollView
      style={{backgroundColor: CONSTANT.THEME_TEXT, height: 840, padding: 20}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../assets/backLogo.png')} />
      </TouchableOpacity>
      <Toast topOffset={true} position="top" visibilityTime={1000} />
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
            Email
          </Text>
          <View>
            <TextInput
              onChangeText={e => setModel({...model, email: e.toLowerCase()})}
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
              onChangeText={e => setModel({...model, password: e})}
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
            flexDirection: 'column',
            justifyContent: 'center',
            marginVertical: 50,
          }}>
          <TouchableOpacity
            disabled={isLoading}
            onPress={handleSubmit}
            style={{
              backgroundColor: CONSTANT.THEME_COLOR,
              paddingHorizontal: 140,
              paddingVertical: 16,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: CONSTANT.THEME_TEXT,
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {isLoading ? (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <ActivityIndicator size={25} color={CONSTANT.THEME_TEXT} />
                </View>
              ) : (
                'LOGIN'
              )}
            </Text>
          </TouchableOpacity>

          {error ? (
            <View>
              <Text
                style={{
                  color: 'red',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 20,
                }}>
                {error.toUpperCase()}
              </Text>
            </View>
          ) : null}
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
