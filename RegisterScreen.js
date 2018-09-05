import React from 'react';
import { Alert, Button, StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class RegisterScreen extends React.Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          width: '100%',
          height: '45%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <TextInput
            style={{ borderWidth: 2, width: '50%', marginTop: 50, paddingHorizontal: 5 }}
            underlineColorAndroid="transparent"
            placeholder="Login"
          />
          <TextInput
            style={{ borderWidth: 2, width: '50%', marginTop: 20, paddingHorizontal: 5 }}
            underlineColorAndroid="transparent"
            placeholder="Password"
          />
          <TextInput
            style={{ borderWidth: 2, width: '50%', marginTop: 20, paddingHorizontal: 5 }}
            underlineColorAndroid="transparent"
            placeholder="Distributors Name"
          />
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              marginTop: 20,
            }}
          >
            <Button
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}
              title="Ok"
            />
          </View>
        </View>
      </View>
    );
  }
}

