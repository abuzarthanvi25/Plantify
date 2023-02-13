import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CONSTANT from '../Constants.config';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {add, emptyCart, remove, removeAllInstance} from '../store/cartSlice';
import Checkout from '../components/Checkout';
import DeliveryComponent from '../components/DeliveryComponent';
import CONSTANT2 from '../config/constants.config';
import axios from 'axios';

export default function Cart({navigation}) {
  const dispatch = useDispatch();
  const [couponStatus, setCouponStatus] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState(false);

  const authInfo = useSelector(state => state.auth);
  const cartItems = useSelector(state => state.cart);
  const favouriteProducts = useSelector(state => state.favourites);

  console.log(favouriteProducts);

  const couponChecker = couponCode => {
    if (couponCode === 'plantify') {
      setCouponStatus(true);
      setTotalPrice(totalPrice - 20);
    } else if (couponCode === 'greeb') {
      setCouponStatus(true);
      setTotalPrice(1);
      CONSTANT.DELIVERY_COST = 0;
    } else {
      setCouponStatus(false);
      CONSTANT.DELIVERY_COST = 80;
      setTotalPrice(
        cartItems
          .map(x => x.price)
          .reduce((partialSum, a) => partialSum + a, 0)
          .toFixed(0),
      );
    }
  };

  const handleCheckout = () => {
    if (authInfo.user) {
      ToastAndroid.show('Your Order in progress...', 1000);
      setError('');
      axios
        .post(`${CONSTANT2.PROJECT_URL}/api/orders`, {
          userName: authInfo.user.user_name,
          userId: authInfo.user._id,
          cartItems: cartItems,
          subTotal: parseInt(totalPrice) + parseInt(CONSTANT.DELIVERY_COST),
        })
        .then(res => {
          console.log(res);
          if (res.data.status) {
            dispatch(emptyCart());
            navigation.navigate('Checkout Screen', {
              ...res.data.order,
            });
          } else {
            setError(res.data.message);
          }
        });
    }
  };

  useEffect(() => {
    setTotalPrice(
      cartItems
        .map(x => x.price)
        .reduce((partialSum, a) => partialSum + a, 0)
        .toFixed(0),
    );
  }, [cartItems]);

  return (
    <>
      <ScrollView style={{padding: 20, backgroundColor: 'white'}}>
        <View style={{marginHorizontal: 6}}>
          <Text
            style={{
              fontSize: 44,
              color: CONSTANT.THEME_COLOR,
              fontWeight: '900',
            }}>
            Your Bag
          </Text>
        </View>

        <View>
          {cartItems && cartItems.length > 0 ? (
            [...new Set(cartItems)].map((x, i) => (
              <View key={i}>
                <View
                  key={x.id}
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    backgroundColor: 'white',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginVertical: 30,
                  }}>
                  <View>
                    <Image
                      resizeMode="contain"
                      style={{
                        height: 85,
                        width: 75,
                        borderRadius: 20,
                        position: 'relative',
                        zIndex: 99,
                      }}
                      source={{
                        uri: x.image,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        // backgroundColor: 'red',
                        justifyContent: 'space-between',
                        width: 280,
                        flexWrap: 'nowrap',
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          color: CONSTANT.MAIN_TEXT_COLOR,
                          fontWeight: 'bold',
                          marginHorizontal: 10,
                        }}>
                        {x.name.slice(0, 50) +
                          (x.name.length > 50 ? '...' : '')}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Icon
                          name="bookmark-border"
                          size={30}
                          color={CONSTANT.THEME_COLOR}
                        />
                        <Text
                          style={{
                            fontSize: 25,
                            color: CONSTANT.MAIN_TEXT_COLOR,
                            fontWeight: '500',
                            marginHorizontal: 10,
                          }}>
                          ${x.price}
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        width: 200,
                        marginRight: 30,
                        // backgroundColor: 'red',
                      }}>
                      <TouchableOpacity
                        onPress={() => dispatch(add(x))}
                        style={{
                          borderWidth: 2,
                          borderColor: CONSTANT.MAIN_TEXT_COLOR,
                          padding: 2,
                          borderRadius: 10,
                        }}>
                        <Icon
                          name="add"
                          size={20}
                          color={CONSTANT.MAIN_TEXT_COLOR}
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 22,
                          fontWeight: '700',
                          color: CONSTANT.THEME_COLOR,
                        }}>
                        {cartItems.length
                          ? cartItems.filter(item => item._id === x._id).length
                          : null}
                      </Text>
                      <TouchableOpacity
                        onPress={() => dispatch(remove(x))}
                        style={{
                          borderWidth: 2,
                          borderColor: CONSTANT.MAIN_TEXT_COLOR,
                          padding: 2,
                          borderRadius: 10,
                        }}>
                        <Icon
                          name="remove"
                          size={20}
                          color={CONSTANT.MAIN_TEXT_COLOR}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => dispatch(removeAllInstance(x))}
                        style={{
                          padding: 3,
                          borderRadius: 10,
                          marginLeft: 10,
                        }}>
                        <Icon
                          name="delete-outline"
                          size={35}
                          color={CONSTANT.THEME_COLOR}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 700,
              }}>
              <Text style={{fontSize: 20, color: 'grey'}}>EMPTY</Text>
            </View>
          )}
        </View>

        {totalPrice && totalPrice > 0 ? (
          <>
            <DeliveryComponent deliveryCost={CONSTANT.DELIVERY_COST} />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: CONSTANT.CART_VIEW_COLOR,
                  width: 70,
                  height: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                }}>
                <Icon2
                  name="brightness-percent"
                  size={40}
                  color={CONSTANT.THEME_COLOR}
                />
              </View>
              <View
                style={{
                  marginLeft: 20,
                  marginTop: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <Text
                  style={{
                    color: CONSTANT.MAIN_TEXT_COLOR,
                    fontSize: 22,
                    fontWeight: '700',
                  }}>
                  Apply Coupon
                </Text>
                <View>
                  <TextInput
                    placeholder="COUPON CODE"
                    placeholderTextColor={'#0d986a83'}
                    onChangeText={e => couponChecker(e.toLowerCase())}
                    style={{
                      borderBottomWidth: 3,
                      padding: 0,
                      borderBottomColor: CONSTANT.THEME_COLOR,
                      width: 100,
                      color: CONSTANT.THEME_COLOR,
                      fontSize: 16,
                    }}
                  />
                  {couponStatus ? (
                    <Text
                      style={{
                        color: CONSTANT.MAIN_TEXT_COLOR,
                        fontWeight: '700',
                      }}>
                      COUPON APPLIED
                    </Text>
                  ) : null}
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: '800',
                  color: CONSTANT.MAIN_TEXT_COLOR,
                }}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 44,
                  fontWeight: '800',
                  color: CONSTANT.MAIN_TEXT_COLOR,
                  marginTop: 30,
                  marginBottom: 50,
                }}>
                ${parseInt(totalPrice) + parseInt(CONSTANT.DELIVERY_COST)}
              </Text>
            </View>
          </>
        ) : null}
      </ScrollView>
      {totalPrice && totalPrice > 0 ? (
        <>
          <View style={{marginBottom: 50}}>
            <Checkout
              subTotal={parseInt(totalPrice) + parseInt(CONSTANT.DELIVERY_COST)}
              onCheckout={handleCheckout}
            />
          </View>
        </>
      ) : null}
      {error ? (
        <View>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 24,
            }}>
            {error.toUpperCase()}
          </Text>
        </View>
      ) : null}
    </>
  );
}
