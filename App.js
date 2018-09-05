import {
  createStackNavigator,
} from 'react-navigation';
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'

const App = createStackNavigator({
  Home: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
});

export default App
