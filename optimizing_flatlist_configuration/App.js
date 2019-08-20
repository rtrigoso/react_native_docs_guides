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
  FlatList,
  View,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue'
  }
});

class SingleItem extends Component {
  render() {
    return (
      <View id={this.props.id} ><Text>{this.props.text}</Text></View>
    );
  }
}

class CustomList extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []}
  }

  async getData() {
    try
    {
      let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
      let data = await response.json();
      this.setState({data});
    }
    catch (err)
    {
      console.error(err);
    }
  }

  componentDidMount() { 
    this.getData();
  }
  
  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.data}
        renderItem={({item, index}) => <SingleItem id={index} text={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }
}

const App = () => {
  return (
    <View style={styles.container} >
      <CustomList />
    </View>
  )
}

export default App;