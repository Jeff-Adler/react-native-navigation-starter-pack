import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import PostList from "../screens/PostList";
import Post from "../screens/Post";

const PostStack = createStackNavigator();

const PostStackNavigator = (props) => {
  const { posts, post, fetchPost } = props;

  return (
    <PostStack.Navigator style={styles.container} initialRouteName="PostList">
      <PostStack.Screen name="PostList">
        {(props) => <PostList {...props} posts={posts} fetchPost={fetchPost} />}
      </PostStack.Screen>
      <PostStack.Screen name="Post">
        {(props) => <Post {...props} post={post} />}
      </PostStack.Screen>
    </PostStack.Navigator>
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

export default PostStackNavigator;
