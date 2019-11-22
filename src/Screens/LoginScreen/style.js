import {
  StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
  textLogin: {
    fontSize: 50,
    marginBottom: 30,
  },
  wrapperContainer: {
    padding: 30,
    flex: 1,
  },
  viewLogin: {
    flex: 1,
    flexDirection: 'column',
    padding: 20
  },
  textInputUserName: {
    marginBottom: 20,
  },
  textInputPassword: {
    marginBottom: 20,
  },
  wrapperAcc: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  wrapperRememberMe: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  noAcc: {
   fontWeight: 'bold',
  },
  signUp: {
    color: 'blue',
  },
  buttonLogin: {
    marginTop: 70,
    borderRadius: 50,
    padding: 10,
    backgroundColor: '#0fbcf9',
    // flex: 1,
    // position: 'absolute',
    // bottom: 0,
    // marginBottom: 20,
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  buttonLoginLabel: {
    fontSize: 12,
  }
});
