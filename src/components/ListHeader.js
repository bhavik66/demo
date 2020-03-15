import React, {Component} from 'react';
import {View} from 'react-native';

import Text from './shared/Text';

import styles from './listHeader-styles';

export class ListHeader extends Component {
  render() {
    const {listHeader, count} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.txtDrinks}> {listHeader} </Text>
        <Text x2> {`See all ${count}`} </Text>
      </View>
    );
  }
}

export default ListHeader;
