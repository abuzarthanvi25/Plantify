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
import {add} from '../store/cartSlice';
import {addFavourite} from '../store/favouriteProdSlice';

export default function PlantCare({navigation}) {
  const [tools, setTools] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const getTools = () => {
    axios
      .get(`${CONSTANT.PROJECT_URL}/api/tools`)
      .then(res => {
        console.log(res.data);
        setErrorMessage(null);
        setTools(res.data.tools);
      })
      .catch(err => {
        setErrorMessage(err.message);
        console.log(err.message);
      });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    getTools();
  }, []);

  let handleRefresh = () => {
    setRefresh(true);
    getTools();
    setTimeout(() => {
      setRefresh(false);
      ToastAndroid.show('Refreshed Successfully', 1500);
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
      {tools && tools.length > 0 ? (
        <View style={{marginHorizontal: 30, marginTop: 10}}>
          <Text
            style={{
              fontSize: 44,
              color: CONSTANT.THEME_COLOR,
              fontWeight: '900',
            }}>
            Plant Care
          </Text>
        </View>
      ) : null}
      {tools && tools.length > 0 ? (
        tools.map((tool, i) => (
          <CardComponent
            key={i}
            title={tool.name}
            category={tool.category}
            price={tool.price}
            imageUrl={tool.image}
            onPress={() =>
              navigation.navigate('Plant Care Detail Screen', tool)
            }
            onPressFavourite={() => dispatch(addFavourite(tool))}
            cartAction={() => dispatch(add(tool))}
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
    </ScrollView>
  );
}
