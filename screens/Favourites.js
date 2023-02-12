import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import CardComponent from '../components/CardComponent';
import CONSTANT from '../Constants.config';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../store/cartSlice';
import {removeAllInstance} from '../store/favouriteProdSlice';

export default function Favourite({navigation}) {
  const favouriteProducts = useSelector(state => state.favourites);
  const dispatch = useDispatch();

  console.log(favouriteProducts);

  return (
    <ScrollView style={{backgroundColor: '#EFFFF4', marginBottom: 60}}>
      <View style={{marginHorizontal: 30, marginTop: 35}}>
        <Text
          style={{
            fontSize: 44,
            color: CONSTANT.THEME_COLOR,
            fontWeight: '900',
          }}>
          Your Favourites
        </Text>
      </View>
      {favouriteProducts && favouriteProducts.length > 0 ? (
        [...new Set(favouriteProducts)].map((favProd, i) => (
          <CardComponent
            key={i}
            title={favProd.name}
            category={favProd.category}
            cartAction={() => dispatch(add(favProd))}
            imageUrl={favProd.image}
            price={favProd.price}
            onPressFavourite={() => dispatch(removeAllInstance(favProd))}
            onPress={() => {
              favProd.category === 'Air Purifier'
                ? navigation.navigate('Plant Detail Screen', favProd)
                : favProd.category === 'Seed'
                ? navigation.navigate('Seed Detail Screen', favProd)
                : favProd.category === 'Plant Care'
                ? navigation.navigate('Plant Care Detail Screen', favProd)
                : null;
            }}
          />
        ))
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 600,
          }}>
          <Text style={{fontSize: 20, color: 'grey'}}>NO FAVOURITES YET</Text>
        </View>
      )}
    </ScrollView>
  );
}
