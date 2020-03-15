import {StyleSheet} from 'react-native';
import colors from '../themes/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.ghost,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 16,
  },
  line: {
    height: 1,
    backgroundColor: colors.accent,
    width: '100%',
  },
});

export default styles;
