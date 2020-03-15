import {StyleSheet} from 'react-native';
import colors from '../themes/colors';

const styles = StyleSheet.create({
  headerImage: {
    height: 320,
    width: '100%',
    position: 'absolute',
  },
  headerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContent: {
    padding: 16,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  picker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtPickup: {
    marginBottom: 8,
    marginLeft: 4,
  },
  txtLarge: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  special: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  txtSpecial: {
    backgroundColor: '#00ff5e',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  subContent: {
    padding: 16,
    paddingLeft: 32,
  },
});

export default styles;
