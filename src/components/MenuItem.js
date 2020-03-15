import React, {Component} from 'react';
import {View, Image} from 'react-native';

import Text from './shared/Text';

import styles from './menuItem-styles';

export class MenuItem extends Component {
  render() {
    const {image, name} = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <Text x2 bold>
          {name}
        </Text>
      </View>
    );
  }
}

export default MenuItem;
