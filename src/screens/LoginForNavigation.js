import axios from 'axios';
import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Auth from '../navigations/Auth';

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignContent: 'center',
    margin: 30,
    marginTop: 190,
  },
  logo: {
    marginTop: -100,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    paddingVertical: 32,
    marginBottom: 50,
  },
  input: {
    backgroundColor: 'rgba(0,0,0,.1)',
    padding: 10,
    fontSize: 20,
    marginVertical: 10,
  },
});

class LoginForNavigation extends Component {
  // constructor()
  // {
  //   super();
  // }
  state = {
    email: '',
    password: '',
    // isLoggedIn: false,
    // hasError: false,
  };

  // LoginData = {
  //   Patient= {
  //     name: Patient,
  //     password: Patient,
  //   },

  //   Specialist= {
  //     name: Specialist,
  //     password: Specialist,
  //   },
  // };

  render() {
    const {email, password} = this.state;
    const {navigation} = this.props;

    return (
      <>
        <SafeAreaView style={styles.main}>
          <Text style={styles.logo}>Logo</Text>
          <TextInput
            value={email}
            style={styles.input}
            placeholder="Enter Email"
            onChangeText={value => this.setState({email: value})}
          />
          <TextInput
            value={password}
            style={styles.input}
            secureTextEntry
            placeholder="Enter Password"
            onChangeText={value => this.setState({password: value})}
          />

          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('DrawerPatient')}
          />
        </SafeAreaView>
      </>
    );
  }
}
export default LoginForNavigation;
