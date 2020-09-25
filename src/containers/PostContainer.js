import React from "react";
import { StyleSheet, View } from "react-native";

import PostStackNavigator from "../navigation/PostStackNavigator";

const DATA = [
  {
    id: 1,
    content: "Post 1",
    username: "Username 1",
  },
  {
    id: 2,
    content: "Post 2",
    username: "Username 2",
  },
  {
    id: 3,
    content: "Post 3",
    username: "Username 3",
  },
];

class PostContainer extends React.Component {
  state = {
    posts: null,
    post: null,
  };

  //retrieves posts when component mounts
  componentDidMount() {
    this.fetchPosts();
  }

  //replace with GET request to retrieve all posts from backend
  fetchPosts = () => {
    this.setState({ posts: DATA });
  };

  //replace with GET request to retrieve specific post from backend
  fetchPost = (postObj) => {
    const post = this.state.posts.find((post) => {
      return post.id === postObj.id;
    });
    this.setState({ post: post });
  };

  render() {
    const { posts, post, fetchPost } = this.state;
    return (
      <View style={styles.container}>
        <PostStackNavigator
          posts={posts}
          post={post}
          fetchPost={this.fetchPost}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostContainer;
