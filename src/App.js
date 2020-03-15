import React, {Component} from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';

import RootNavigator from './navigation';

export class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <RootNavigator />
      </View>
    );
  }
}

export default App;
