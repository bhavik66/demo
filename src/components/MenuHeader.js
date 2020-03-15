import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

import Text from './shared/Text';

import styles from './menuHeader-styles';
import colors from '../themes/colors';

const MenuText = props => {
  const {selected, children, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text x2 bold={selected}>
        {children}
      </Text>
      {selected ? <View style={styles.line} /> : null}
    </TouchableOpacity>
  );
};

export class MenuHeader extends Component {
  state = {
    menuSelected: true,
    favoriteSelected: false,
    previousSelected: false,
  };

  render() {
    const {onSelectMenu} = this.props;

    return (
      <View style={styles.container}>
        <MenuText
          selected={this.state.menuSelected}
          onPress={() =>
            this.setState(
              {
                menuSelected: true,
                favoriteSelected: false,
                previousSelected: false,
              },
              () => onSelectMenu(0),
            )
          }>
          Menu
        </MenuText>
        <MenuText
          selected={this.state.favoriteSelected}
          onPress={() =>
            this.setState(
              {
                menuSelected: false,
                favoriteSelected: true,
                previousSelected: false,
              },
              () => onSelectMenu(1),
            )
          }>
          Favorites
        </MenuText>
        <MenuText
          selected={this.state.previousSelected}
          onPress={() =>
            this.setState(
              {
                menuSelected: false,
                favoriteSelected: false,
                previousSelected: true,
              },
              () => onSelectMenu(2),
            )
          }>
          Previous
        </MenuText>
        <Icon name={'search'} color={colors.primary} size={26} />
      </View>
    );
  }
}

export default MenuHeader;
