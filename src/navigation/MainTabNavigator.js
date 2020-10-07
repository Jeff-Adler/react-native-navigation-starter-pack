import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

//Navigation Imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostContainer from "../containers/PostContainer";
import AccountStackNavigator from "./AccountStackNavigator";

const Tab = createBottomTabNavigator();

const MainTabNavigator = (props) => {
  //Optional props deconstruction for readability
  //Use currentUser to reference app's user in e.g. AccountStackNavigator
  const { currentUser, logoutHandler } = props;

  return (
    <Tab.Navigator
      initialRouteName="Posts"
      //optional prop to customize appearance of tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Posts") {
            iconName = focused ? "comments" : "comments";
          } else if (route.name === "Account") {
            iconName = focused ? "user-alt" : "user";
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Posts" component={PostContainer} />
      <Tab.Screen
        name="Account"
        children={() => <AccountStackNavigator logoutHandler={logoutHandler} />}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
