import React from 'react';
import { Alert, Button, StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      // height: 0,
      // backgroundColor: '#f4511e',
    },
  }
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    const { navigate } = this.props.navigation
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
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image
            style={{ width: 100, height: 100 }}
            resizeMode='contain'
            source={require('./assets/logo.png')}
          />
        </View>
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
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              marginTop: 20,
            }}
          >
            <Button
              onPress={() => 
                navigate('Register')
              }
              title="Register"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 2,
    backgroundColor: 'red',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
