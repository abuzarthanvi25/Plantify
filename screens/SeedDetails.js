import React, {useEffect} from 'react';
import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import CartStatus from '../components/CartStatus';
import DetailComponent from '../components/DetailComponent';
import CONSTANT from '../Constants.config';
import {add} from '../store/cartSlice';

export default function SeedDetails({route, navigation}) {
  useEffect(() => {
    console.log(route.params);
  }, []);

  const {name, category, image, overview, seed_bio, price, size} = route.params;

  const cartItems = useSelector(state => state.cart);
  console.log(cartItems);
  const totalPrice = cartItems
    .map(x => x.price)
    .reduce((partialSum, a) => partialSum + a, 0)
    .toFixed(0);

  const dispatch = useDispatch();
  return (
    <>
      <ScrollView style={{backgroundColor: '#fff'}}>
        <DetailComponent
          title={name}
          category={category}
          imgUrl={image}
          price={price}
          size={size}
          cartAction={() => dispatch(add(route.params))}
        />
        <View>
          <Text
            style={{
              fontSize: 20,
              color: CONSTANT.MAIN_TEXT_COLOR,
              marginTop: 30,
              marginHorizontal: 40,
              fontWeight: 'bold',
            }}>
            Overview
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 15,
            justifyContent: 'space-around',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="flower-pollen-outline" size={30} color="#FCCC1F" />
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: CONSTANT.THEME_COLOR,
                  fontWeight: 'bold',
                }}>
                {overview.germination ?? ''}
              </Text>
              <Text
                style={{color: '#0021408a', fontSize: 18, fontWeight: '600'}}>
                GERMINATION
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="timer-sand" size={30} color="#FCCC1F" />
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: CONSTANT.THEME_COLOR,
                  fontWeight: 'bold',
                }}>
                {overview.maturity ?? ''}
              </Text>
              <Text
                style={{color: '#0021408a', fontSize: 18, fontWeight: '600'}}>
                MATURITY
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 15,
            justifyContent: 'flex-start',
            marginHorizontal: 30,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon2 name="height" size={30} color="#FCCC1F" />
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: CONSTANT.THEME_COLOR,
                  fontWeight: 'bold',
                }}>
                {overview.sowingDepth ?? ''}
              </Text>
              <Text
                style={{color: '#0021408a', fontSize: 18, fontWeight: '600'}}>
                SOWING DEPTH
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 15,
            justifyContent: 'space-around',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="weather-sunset" size={30} color="#FCCC1F" />
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: CONSTANT.THEME_COLOR,
                  fontWeight: 'bold',
                }}>
                {overview.idealConditions ?? ''}
              </Text>
              <Text
                style={{color: '#0021408a', fontSize: 18, fontWeight: '600'}}>
                IDEAL CONDITIONS
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: CONSTANT.MAIN_TEXT_COLOR,
              marginTop: 20,
              marginHorizontal: 40,
              fontWeight: 'bold',
            }}>
            Seed Bio
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: '#0021409f',
              marginTop: 15,
              marginHorizontal: 40,
              fontWeight: '400',
            }}>
            {seed_bio ?? ''}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#f5eda8a3',
            height: 200,
            width: 390,
            marginVertical: 40,
            flexWrap: 'wrap',
          }}>
          <View style={{padding: 10}}>
            <Text
              style={{
                fontSize: 30,
                color: CONSTANT.MAIN_TEXT_COLOR,
                fontWeight: '500',
                textAlign: 'center',
                paddingLeft: 10,
                paddingTop: 20,
              }}>
              That very plant?
            </Text>
            <View
              style={{
                width: 180,
                padding: 10,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 20, color: '#002140a9', textAlign: 'left'}}>
                Just Scan and the AI will know exactly
              </Text>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: CONSTANT.THEME_COLOR,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 100,
                  padding: 8,
                  borderRadius: 8,
                  margin: 10,
                }}>
                <Text
                  style={{
                    color: CONSTANT.THEME_COLOR,
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: 18,
                  }}>
                  Scan Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{marginVertical: 40, marginRight: 10, marginHorizontal: 10}}>
            <Image
              style={{borderRadius: 10}}
              source={require('../assets/Aipic.png')}
            />
          </View>
        </View>
      </ScrollView>
      <CartStatus
        cartItemNumber={cartItems.length}
        onPress={() => navigation.navigate('Cart Screen')}
        subTotal={totalPrice}
      />
    </>
  );
}
