import * as React from 'react';
import {Text, Modal, Button, TouchableOpacity, View} from 'react-native';

const EZ_Modal = ({onHide, visible, label}) => {
  const [IsVisible, setVisible] = React.useState(visible);
  return (
    <Modal visible={IsVisible} onDismiss={onHide}>
      <View
        style={{
          height: 850,
          //   backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            justifyContent: 'center',
            borderWidth: 2,
            padding: 50,
            borderRadius: 10,
            borderColor: '#00984D',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 40,
              textAlign: 'center',
            }}>
            {label}
          </Text>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={{
              padding: 10,
              backgroundColor: '#00984D',
              borderRadius: 10,
              marginTop: 30,
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EZ_Modal;
