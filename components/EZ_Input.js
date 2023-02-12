import React from 'react';
import {TextInput} from 'react-native';

function EZ_Input(props) {
  const {
    placeholder,
    disable,
    imageleft,
    inlineImagePadding,
    keyboardType,
    multiline,
    onBlur,
    onChangeText,
    placeholderTextColor,
    style,
  } = props;
  return (
    <>
      <TextInput
        placeholder={placeholder}
        editable={!disable}
        inlineImageLeft={imageleft}
        inlineImagePadding={inlineImagePadding}
        keyboardType={keyboardType}
        multiline={multiline}
        onBlur={onBlur}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor ?? 'grey'}
        style={
          style
            ? {...style}
            : {
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 17,
                paddingLeft: 10,
                color: '#000',
                marginHorizontal: 10,
                marginVertical: 5,
                fontSize: 16,
              }
        }
      />
    </>
  );
}

export default EZ_Input;
