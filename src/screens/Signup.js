import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { Input } from "react-native-elements";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
  };

  onChangeText = (name) => (text) => this.setState({ [name]: text });

  render() {
    const { username, password } = this.state;
    const { navigation, signupHandler } = this.props;
    return (
      <View style={styles.container}>
        <Input
          placeholder="Username"
          onChangeText={this.onChangeText("username")}
          value={username}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={this.onChangeText("password")}
          value={password}
        />
        <Button title="Submit" onPress={() => signupHandler(this.state)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Signup;
