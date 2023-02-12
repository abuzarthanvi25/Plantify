import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';

function EZ_Buton({
  label,
  onPress,
  btnStyle,
  labelStyle,
  disabled,
  backgroundColor,
  pill,
  isLoading,
  loaderColor,
}) {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 5,
      }}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={
          btnStyle ?? {
            backgroundColor: backgroundColor ?? '#004793',
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: 'row',
            borderRadius: pill ? 20 : 5,
          }
        }>
        <Text
          style={
            labelStyle ?? {
              color: 'white',
              fontSize: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }
          }>
          {isLoading ? (
            <ActivityIndicator color={loaderColor ?? 'white'} size={20} />
          ) : (
            label
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default EZ_Buton;
