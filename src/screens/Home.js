import React, {Component} from 'react';
import {View, FlatList} from 'react-native';

import Header from '../components/Header';
import MenuHeader from '../components/MenuHeader';
import MenuItem from '../components/MenuItem';
import ListHeader from '../components/ListHeader';

import styles from './home-styles';

import data from '../data/sample';

export class Home extends Component {
  state = {
    listHeader: 'Drinks',
    data: data.data1,
  };

  onSelectMenu = menu => {
    if (menu === 0) {
      this.setState({listHeader: 'Drinks', data: data.data1});
    } else if (menu === 1) {
      this.setState({listHeader: 'Favorites', data: data.data2});
    } else if (menu === 2) {
      this.setState({listHeader: 'Previous', data: data.data3});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.menu}>
          <MenuHeader onSelectMenu={this.onSelectMenu} />
          <FlatList
            data={this.state.data}
            renderItem={({item}) => <MenuItem {...item} />}
            keyExtractor={(item, index) => `${index}`}
            contentContainerStyle={{paddingHorizontal: 28}}
            ListHeaderComponent={() => (
              <ListHeader
                count={this.state.data.length}
                listHeader={this.state.listHeader}
              />
            )}
            stickyHeaderIndices={[0]}
          />
        </View>
      </View>
    );
  }
}

export default Home;
