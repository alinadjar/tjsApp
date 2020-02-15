
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import 'react-native-gesture-handler';

class App extends Component {

  render() {
    return (
      <>      
        <ScrollView contentContainerStyle={styles.container}>
          <SafeAreaView>
            <Text>Some Content Here ...</Text>
          </SafeAreaView>
        </ScrollView>        
      </>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;
