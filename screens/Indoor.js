import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import CardComponent from '../components/CardComponent';
import CONSTANT from '../Constants.config';
import CONSTANT2 from '../config/constants.config';
import {add} from '../store/cartSlice';
import {addFavourite} from '../store/favouriteProdSlice';
import {showToast} from '../methods/methods';
import Toast from 'react-native-toast-message';

export default function Indoor({navigation}) {
  const [plants, setPlants] = useState([]);
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const getPlants = () => {
    axios
      .get(`${CONSTANT2.PROJECT_URL}/api/plants`)
      .then(res => {
        setErrorMessage(null);
        setPlants(res.data.plants);
      })
      .catch(err => {
        setErrorMessage(err.message);
        console.log(err.message);
      });
  };

  useEffect(() => {
    getPlants();
  }, []);

  let handleRefresh = () => {
    setRefresh(true);
    getPlants();
    setTimeout(() => {
      setRefresh(false);
      showToast('REFRESHED SUCCESSFULLY', 'success');
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          colors={[CONSTANT.THEME_COLOR]}
          onRefresh={handleRefresh}
          refreshing={refresh}
        />
      }
      style={{backgroundColor: '#fff', marginBottom: 50}}>
      <View style={{zIndex: 999}}>
        <Toast topOffset={true} position="top" autoHide visibilityTime={800} />
      </View>
      {plants && plants.length > 0 ? (
        <View style={{marginHorizontal: 30, marginTop: 10}}>
          <Text
            style={{
              fontSize: 44,
              color: CONSTANT.THEME_COLOR,
              fontWeight: '900',
            }}>
            Indoor Plants
          </Text>
        </View>
      ) : null}
      {plants && plants.length > 0 ? (
        plants.map((plant, i) => (
          <CardComponent
            key={i}
            title={plant.name}
            category={plant.category}
            price={plant.price}
            imageUrl={plant.image}
            onPress={() => navigation.navigate('Plant Detail Screen', plant)}
            cartAction={() => {
              dispatch(add(plant));
              ToastAndroid.show('ADDED TO CART', ToastAndroid.SHORT);
            }}
            onPressFavourite={() => {
              dispatch(addFavourite(plant));
              ToastAndroid.show('ADDED TO FAVOURITES', ToastAndroid.SHORT);
            }}
            bgColor={
              i % 2 === 0 ? '#9CE5CB' : i % 3 === 0 ? '#DEEC8A' : '#B2E28D'
            }
          />
        ))
      ) : errorMessage ? (
        <View style={{width: 400}}>
          <Text style={{color: 'red', textAlign: 'center', fontWeight: '700'}}>
            {errorMessage}
          </Text>
        </View>
      ) : (
        <ActivityIndicator size={30} color={CONSTANT.THEME_COLOR} />
      )}
      <View style={{marginVertical: 20, marginHorizontal: 20}}>
        <View
          style={{
            backgroundColor: CONSTANT.MAIN_TEXT_COLOR,
            height: 3,
            width: 30,
            marginBottom: 15,
            marginTop: 20,
          }}></View>
        <Text
          style={{
            fontSize: 36,
            color: CONSTANT.MAIN_TEXT_COLOR,
            fontWeight: '700',
          }}>
          Plant a Life
        </Text>
        <Text
          style={{
            fontSize: 28,
            color: '#002140d0',
            fontWeight: '700',
          }}>
          Live amongst living
        </Text>
        <Text
          style={{
            fontSize: 24,
            color: '#0021407e',
            fontWeight: '700',
          }}>
          Spread the joy
        </Text>
      </View>
    </ScrollView>
  );
}
