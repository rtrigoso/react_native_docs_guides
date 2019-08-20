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
  Picker
} from 'react-native';

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
      language: 'java'
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