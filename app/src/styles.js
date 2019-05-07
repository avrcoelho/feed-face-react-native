import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    alignSelf: 'stretch',
    textAlign: 'center',
    padding: 15,
  },
  scrollView: {
    backgroundColor: '#f00000',
    flex: 1,
    alignSelf: 'stretch',
    padding: 15,
  },
});

export default styles;
