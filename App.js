import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Navigation Imports
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import LoginStackNavigator from "./src/navigation/LoginStackNavigator";

class App extends React.Component {
  state = {
    user: null,
    isSignedIn: false,
  };

  //Insert request to backend to authenticate user info
  loginHandler = (userData) => {
    this.setState({ user: userData, isSignedIn: true });
  };

  //Insert request to backend to create new user
  signupHandler = (userData) => {
    this.setState({ user: userData });
  };

  logoutHandler = () => {
    this.setState({ user: null, isSignedIn: false });
  };

  render() {
    //Optional deconstruction for readability
    const { isSignedIn, user } = this.state;
    return (
      <View style={styles.container}>
        {isSignedIn === true ? (
          <View style={styles.container}>
            <NavigationContainer style={styles.container}>
              <MainTabNavigator
                currentUser={user}
                logoutHandler={this.logoutHandler}
              />
            </NavigationContainer>
          </View>
        ) : (
          <View style={styles.container}>
            <NavigationContainer style={styles.container}>
              <LoginStackNavigator
                loginHandler={this.loginHandler}
                signupHandler={this.signupHandler}
              />
            </NavigationContainer>
          </View>
        )}
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
