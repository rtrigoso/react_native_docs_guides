/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Picker,
  Switch
} from 'react-native';
import Slider from '@react-native-community/slider'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow'
  },
  child: {
    flex:1,
    backgroundColor: 'pink',
    margin: 15,
    borderColor: 'white'
  }
});

class Content extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      language: 'java',
      switch: false
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Picker
          selectedValue={this.state.language}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
          style={styles.child} >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="Javascript" value="js" />
        </Picker>
        <Slider
          style={styles.child}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FF00CC"
          maximumTrackTintColor="#000000"
        />
        <Switch
          style={styles.child}
          trackColor="#00GGCC"
          onValueChange={value => this.setState({switch: value})}
          value={this.state.switch}
        />
      </View>
    )
  }
}

const App = () => {
  return (
    <View style={styles.container} >
      <Content />      
    </View>
  )
}

export default App;