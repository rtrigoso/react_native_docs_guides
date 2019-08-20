import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal'
  },
  child: {
    flex: 1,
    backgroundColor: 'lightyellow'
  }
});

class Custom extends Component {
  constructor(props) {
  super(props);
  this.state = {data: []}
  }
  
  render() {
  return (
    <View style={{flex:1}}>
      <View style={styles.child} accessible={true}>
        <Text>
          Bacon ipsum dolor amet buffalo landjaeger cupim andouille hamburger ball tip. Leberkas doner meatball salami, boudin ball tip rump landjaeger pork belly. Strip steak bacon pork chop burgdoggen ham hock tail fatback hamburger tenderloin sirloin frankfurter capicola. Turducken tenderloin boudin leberkas ground round, doner salami tri-tip. Turducken flank strip steak cow, chuck capicola pork chop meatloaf sirloin tongue pork belly sausage tail cupim pig. Pork landjaeger brisket drumstick shankle. Pork turkey swine alcatra brisket.
        </Text>
        <Text>
          Meatball andouille cow shankle, ribeye chuck shank porchetta jerky. Ball tip cupim swine tail turducken chicken strip steak salami short ribs meatball pastrami sirloin ham hock rump spare ribs. Prosciutto ground round salami, shank tongue pork beef ribs drumstick chuck bacon shankle pork belly ribeye ball tip leberkas. Short loin drumstick kielbasa chicken, short ribs andouille biltong shank strip steak bresaola sausage shankle fatback. Pork loin hamburger tongue andouille short ribs burgdoggen jowl picanha beef ribs filet mignon venison.
        </Text>
      </View>
      <View style={styles.child}>
        <Button 
          title="Click Me"
          accessible={true}
          accessibilityLabel="Accessible Button"
          onPress={() => console.log('clicked button')}
        />
      </View>
      <View style={styles.child}></View>
    </View>
  )
  }
}

const App = () => {
 return (
  <View style={styles.container} >
    <Custom />
  </View>
  )
}

export default App;