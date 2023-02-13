import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {removeAuthInfo} from '../store/authSlice';
import CONSTANT from '../config/constants.config';
import CONSTANT2 from '../Constants.config';
import Toast from 'react-native-toast-message';
import {showToast} from '../methods/methods';

export default function Profile({navigation}) {
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  const authInfo = useSelector(state => state.auth);
  const favProds = useSelector(state => state.favourites);

  let handleRefresh = () => {
    setRefresh(true);
    getOrders();
    setTimeout(() => {
      setRefresh(false);
      showToast('REFRESHED SUCCESSFULLY', 'success');
    }, 1500);
  };

  const getOrders = () => {
    axios
      .get(`${CONSTANT.PROJECT_URL}/api/user/orders/${authInfo.user._id}`)
      .then(res => {
        if (res.data.status) {
          setOrders(res.data.orders);
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (authInfo.user) {
      getOrders();
    }
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          colors={[CONSTANT2.THEME_COLOR]}
          onRefresh={handleRefresh}
          refreshing={refresh}
        />
      }
      style={{backgroundColor: 'white'}}>
      <View style={{zIndex: 999}}>
        <Toast
          topOffset={true}
          position="top"
          autoHide={true}
          visibilityTime={800}
        />
      </View>
      <ImageBackground
        source={{
          uri: 'https://burst.shopifycdn.com/photos/canoe-resting-on-small-beach.jpg?width=1200&format=pjpg&exif=1&iptc=1',
        }}
        style={{
          flex: 1,
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: '#fff',
            }}
            source={{uri: 'https://i.pravatar.cc/1000'}}
          />
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 36,
                color: 'white',
                fontWeight: 'bold',
              }}>
              {authInfo.user?.user_name ?? 'John Wick'}
            </Text>
            <Text
              style={{
                fontSize: 24,
                color: 'white',
                fontWeight: 'bold',
              }}>
              {authInfo.user?.email ?? 'johnwick@gmail.com'}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 8,
            width: 320,
            borderRadius: 20,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 20, color: '#C3C3C3', fontWeight: '500'}}>
              Fav Products
            </Text>
            <Text
              style={{
                color: '#555555',
                fontWeight: '800',
                fontSize: 18,
                textAlign: 'center',
              }}>
              {favProds.length ?? 486}
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 20, color: '#C3C3C3', fontWeight: '500'}}>
              Orders
            </Text>
            <Text
              style={{
                color: '#555555',
                fontWeight: '800',
                fontSize: 18,
                textAlign: 'center',
              }}>
              {orders?.length ?? 0}
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 20, color: '#C3C3C3', fontWeight: '500'}}>
              Donations
            </Text>
            <Text
              style={{
                color: '#555555',
                fontWeight: '800',
                fontSize: 18,
                textAlign: 'center',
              }}>
              456
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          height: 60,
          marginVertical: 30,
          padding: 15,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(removeAuthInfo());
            showToast('LOGGED OUT SUCCESS FULLY', 'info');
            setTimeout(() => {
              navigation.navigate('Login');
            }, 1000);
          }}
          style={{
            backgroundColor: '#F9F9F9',
            alignItems: 'center',
            height: 50,
            flexDirection: 'row',
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: '#F3F3F3',
            borderRadius: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{marginHorizontal: 20}}>
              <Icon name="logout" size={35} color="#EC5858" />
            </View>
            <Text
              style={{
                color: '#EC5858',
                fontSize: 24,
                fontWeight: '600',
                marginLeft: 10,
              }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
