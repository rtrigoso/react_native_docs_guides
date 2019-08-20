import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'pink'
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []}
  }

  static navigationOptions = {
    title: 'home'
  }
  
  render() {
    const {navigate} = this.props.navigation;
      
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button 
          title="Go to Profile"
          onPress={() => navigate('Profile', {})} 
        />
      </View>
    )
  }
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []}
  }
  
  static navigationOptions = {
    title: 'profile'
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Button 
          title="Go to Home"
          onPress={() => navigate('Home', {})} 
        />
      </View>
    )
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Profile: {screen: Profile}
});

const App = createAppContainer(MainNavigator)

export default App;