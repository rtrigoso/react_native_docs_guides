/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Picker,
  Switch,
  DatePickerAndroid,
  TouchableNativeFeedback,
  Text,
  PermissionsAndroid
} from 'react-native';
import Slider from '@react-native-community/slider';
import ViewPager from '@react-native-community/viewpager';

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
      switch: false,
      dateDay: 1,
      dateMonth: 1,
      dateYear: 1990,
      use_camera: false,
    }
  }

  async _selectDate() {
    try {
      let currentDate = new Date(this.state.dateYear, this.state.dateMonth, this.state.dateDay)
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: currentDate
      });

      if(action !== DatePickerAndroid.dismissedAction)
      {
        this.setState({dateDay: day, dateMonth: month, dateYear:year});
      }
    }
    catch (err) {
      console.error(err);
    }
  }

  async _requestPermissions()
  {
    console.log('requesting permissions');
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Testing Camera Permissions Request',
          message: 'This is for testing purposes.',
          buttonNeutral: 'Ask me later',
          buttonNegative: 'No',
          buttonPositive: 'OK'
        });
        
        console.log(granted);
        
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          this.state.use_camera = true;
        }
        else
        {
          console.warn(`failed to get permissions. granted message: ${granted}`);
        }
    }
    catch(err)
    {
      console.error(err);
    }
  }

  render() {
    return (
      <ViewPager
        style={{flex:1}}
        initialPage={0}>
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
        <View style={{flex:1}}>
          <TouchableNativeFeedback onPress={this._selectDate.bind(this)}>
            <View style={styles.child} >
              <Text>Click to select: {this.state.dateMonth}-{this.state.dateDay}-{this.state.dateYear}</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this._requestPermissions.bind(this)}>
            <View style={styles.child} >
              {!this.state.use_camera ? 
                <Text>Click to grant camera permissions</Text>
                :
                <Text>camera permissions granted!</Text>
              }
            </View>
          </TouchableNativeFeedback>
        </View>
      </ViewPager>
    )
  }
}

const App = () => {
  return (
    <View style={styles.container} >
      {Platform.OS === 'ios' ? <Text>examples not available in ios</Text> : <Content/>}
    </View>
  )
}

export default App;