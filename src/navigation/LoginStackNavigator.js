import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Signup from "../screens/Signup";

const LoginStack = createStackNavigator();

const LoginStackNavigator = (props) => {
  const { loginHandler, signupHandler } = props;

  return (
    <LoginStack.Navigator style={styles.container} initialRouteName="Login">
      <LoginStack.Screen name="Login">
        {(props) => <Login {...props} loginHandler={loginHandler} />}
      </LoginStack.Screen>
      <LoginStack.Screen name="Signup">
        {(props) => <Signup {...props} signupHandler={signupHandler} />}
      </LoginStack.Screen>
    </LoginStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginStackNavigator;
