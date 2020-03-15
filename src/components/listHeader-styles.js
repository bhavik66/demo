import {StyleSheet} from 'react-native';
import colors from '../themes/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  txtDrinks: {
    fontSize: 28,
    color: colors.accent,
    fontWeight: 'bold',
  },
});

export default styles;
