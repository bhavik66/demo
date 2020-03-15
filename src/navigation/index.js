import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Favorite from '../screens/Favorite';
import Cart from '../screens/Cart';
import Account from '../screens/Account';
import colors from '../themes/colors';

const TabIcon = props => {
  const {icon, tintColor, focused} = props;
  const backgroundColor = focused ? tintColor : 'transparent';
  return (
    <Icon
      name={icon}
      size={24}
      color={colors.white}
      style={{
        padding: 16,
        backgroundColor,
        borderRadius: 50,
      }}
    />
  );
};

const RootNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) => (
          <TabIcon
            icon={'coffee-outline'}
            tintColor={tintColor}
            focused={focused}
          />
        ),
      },
    },
    Menu: {
      screen: Menu,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) => (
          <TabIcon
            icon={'content-paste'}
            tintColor={tintColor}
            focused={focused}
          />
        ),
      },
    },
    Favorite: {
      screen: Favorite,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) => (
          <TabIcon
            icon={'heart-outline'}
            tintColor={tintColor}
            focused={focused}
          />
        ),
      },
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) => (
          <TabIcon
            icon={'cart-outline'}
            tintColor={tintColor}
            focused={focused}
          />
        ),
      },
    },
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) => (
          <TabIcon
            icon={'account-circle-outline'}
            tintColor={tintColor}
            focused={focused}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      upperCaseLabel: false,
      style: {
        backgroundColor: colors.primary,
        height: 76,
        elevation: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 16,
        overflow: 'hidden',
      },
      tabStyle: {
        marginVertical: 0,
        paddingVertical: 20,
      },
      activeTintColor: colors.accent,
      inactiveTintColor: colors.white,
      // activeBackgroundColor: colors.accent,
    },
  },
);

export default createAppContainer(RootNavigator);
