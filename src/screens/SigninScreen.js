import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext'
import {NavigationEvents} from 'react-navigation';

const SigninScreen = () => {
  const {state, signin, clearErrorMessage} = useContext(Context);
  
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage}/>
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}/>
      <NavLink routeName="Signup" text="Don't have an account? Sign up instead" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150
  }
});

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};


export default SigninScreen;
