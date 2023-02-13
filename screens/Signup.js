import axios from 'axios';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CONSTANT from '../Constants.config';
import CONSTANT2 from '../config/constants.config';
import Toast from 'react-native-toast-message';
import {showToast} from '../methods/methods';

export default function SignUp({navigation}) {
  const [model, setModel] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    setError(null);
    setIsLoading(true);
    console.log(model);
    if (!model.userName || !model.email || !model.password) {
      showToast('REQUIRED FIELDS ARE MISSING', 'error');
      setIsLoading(false);
    } else {
      axios
        .post(`${CONSTANT2.PROJECT_URL}/api/signup`, model)
        .then(res => {
          console.log(res.data);
          setIsLoading(false);
          showToast('REGISTERED SUCCESSFULLY', 'success');
          setTimeout(() => {
            navigation.navigate('Login');
          }, 1000);
        })
        .catch(err => {
          console.log(err);
          setError(err.message);
          setIsLoading(false);
          showToast('SIGNUP FAILURE', 'error');
        });
    }
  };

  return (
    <ScrollView
      style={{backgroundColor: CONSTANT.THEME_TEXT, height: 840, padding: 20}}>
      <TouchableOpacity style={{zIndex: 0}} onPress={() => navigation.goBack()}>
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
          Signup
        </Text>

        <Text
          style={{
            color: CONSTANT.THEME_COLOR,
            fontSize: 20,
            marginTop: 10,
          }}>
          Enter your credentials to register an account at Plantify
        </Text>

        <View style={{marginTop: 40}}>
          <Text
            style={{
              color: CONSTANT.THEME_LABEL_COLOR,
              fontSize: 20,
              opacity: 0.4,
              marginBottom: 5,
            }}>
            Username
          </Text>
          <View>
            <TextInput
              onChangeText={e => setModel({...model, userName: e})}
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
              placeholder="Username"
              keyboardType="default"
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
              source={require('../assets/signupIcon.png')}
            />
          </View>
        </View>

        <View style={{marginTop: 15}}>
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
              placeholder="Email"
              keyboardType="email-address"
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
              source={require('../assets/signupIcon.png')}
            />
          </View>
        </View>

        <View style={{marginTop: 15}}>
          <Text
            style={{
              color: CONSTANT.THEME_LABEL_COLOR,
              fontSize: 20,
              opacity: 0.4,
              marginBottom: 5,
            }}>
            Password
          </Text>
          <View style={{marginBottom: 50}}>
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
              placeholder="Password"
              secureTextEntry={true}
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

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              backgroundColor: CONSTANT.THEME_COLOR,
              paddingHorizontal: 130,
              paddingVertical: 16,
              borderRadius: 30,
            }}>
            <Text
              style={{
                color: CONSTANT.THEME_TEXT,
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {isLoading ? (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <ActivityIndicator size={25} color={CONSTANT.THEME_TEXT} />
                </View>
              ) : (
                'SIGN UP'
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
          onPress={() => navigation.navigate('Login')}
          disabled={isLoading}
          style={{marginVertical: 10}}>
          <Text
            style={{
              color: CONSTANT.THEME_LABEL_COLOR,
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
