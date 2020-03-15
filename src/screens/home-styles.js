import {StyleSheet} from 'react-native';
import colors from '../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    backgroundColor: colors.white,
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    overflow: 'hidden',
  },
});

export default styles;
