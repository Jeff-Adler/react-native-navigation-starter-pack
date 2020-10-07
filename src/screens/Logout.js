import React from "react";
import { View, Button, StyleSheet } from "react-native";

const Logout = (props) => {
  const { logoutHandler } = props;

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={logoutHandler} />
    </View>
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

export default Logout;
