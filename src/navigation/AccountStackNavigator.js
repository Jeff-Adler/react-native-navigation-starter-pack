import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Logout from "../screens/Logout";

const AccountStack = createStackNavigator();

//Add e.g. Profile Show Page, Profile Edit page to this navigator
const AccountStackNavigator = (props) => {
  const { logoutHandler } = props;
  return (
    <AccountStack.Navigator style={styles.container} initialRouteName="Logout">
      <AccountStack.Screen name="Logout">
        {(props) => <Logout {...props} logoutHandler={logoutHandler} />}
      </AccountStack.Screen>
    </AccountStack.Navigator>
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

export default AccountStackNavigator;
