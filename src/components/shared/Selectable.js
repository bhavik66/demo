import React from 'react';
import {View} from 'react-native';

import styles from './selectable-styles';

const Selectable = props => {
  return <View style={styles.container}>{props.children}</View>;
};

export default Selectable;
