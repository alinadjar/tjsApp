
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RootNavig from './src/routes';

import Icon from 'react-native-vector-icons/FontAwesome';


import 'react-native-gesture-handler';

class App extends Component {

  render() {
    const Main = RootNavig();
    

    return (
      // <>      
      //   <ScrollView contentContainerStyle={styles.container}>
      //     <SafeAreaView>
      //       <Text>Some Content Here ...</Text>
      //       <Icon name="rocket" size={30} color="#900" />
            
      //     </SafeAreaView>
      //   </ScrollView>        
      // </>

      <Main />
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
