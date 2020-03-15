import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Selectable from './shared/Selectable';
import Text from './shared/Text';

import styles from './header-styles';
import colors from '../themes/colors';

export class Header extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri:
              'https://cdn2.coachmag.co.uk/sites/coachmag/files/styles/16x9_480/public/2018/04/iced-coffee-protein-shake.jpg?itok=5rKyI8pM&timestamp=1524743412',
          }}
          style={styles.headerImage}
        />
        <View style={styles.headerMain}>
          <View style={styles.headerContent}>
            <Text style={{marginBottom: 8}} light>
              My Rewards
            </Text>
            <Selectable>
              <Text bold x2>
                $2.00
              </Text>
            </Selectable>
          </View>
          <View
            style={[styles.headerContent, {alignItems: 'flex-start', flex: 1}]}>
            <Text style={styles.txtPickup} light>
              Pickup at
            </Text>
            <Selectable>
              <View style={styles.picker}>
                <Text bold x2>
                  Select
                </Text>
                <Icon name={'chevron-down'} size={20} color={colors.primary} />
              </View>
            </Selectable>
          </View>
        </View>
        <View style={styles.subContent}>
          <View>
            <View style={styles.special}>
              <Text x2 bold style={styles.txtSpecial}>
                Specials
              </Text>
              <Icon name={'arrow-right'} size={26} color={colors.white} />
            </View>
            <Text style={styles.txtLarge}>Staff Favorites</Text>
            <Text style={styles.txtLarge}>and exclusives</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Header;
