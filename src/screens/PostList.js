import React from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { ListItem } from "react-native-elements";

class PostList extends React.Component {
  pressHandler = (storedPost) => {
    this.props.fetchPost(storedPost);
    this.props.navigation.navigate("Post");
  };

  mapPosts = () => {
    return this.props.posts.map((post) => {
      const storedPost = post;
      return (
        <ListItem
          onPress={() => this.pressHandler(storedPost)}
          key={post.id}
          bottomDivider
        >
          <ListItem.Content>
            <ListItem.Title>{post.content}</ListItem.Title>
            <ListItem.Subtitle>{post.username}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      );
    });
  };

  render() {
    const { posts, fetchPost } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>{posts !== null ? this.mapPosts() : null}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    // justifyContent: "center",
  },
});

export default PostList;
