import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Post = (props) => {
  const { post } = props;

  return (
    <View style={styles.container}>
      <Text>Id: {post.id}</Text>
      <Text>Content: {post.content}</Text>
      <Text>Username: {post.username}</Text>
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

export default Post;
