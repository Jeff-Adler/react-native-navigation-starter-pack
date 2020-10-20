# React Native Navigators

### Bootstrap your React Native app!

First time or not, setting up your nested navigators in React Native is a bit of a slog. So, this repo provides a skeleton app with navigators set up for you, and easy to adapt to the app of your dreams!

## Getting Started

### Prerequisites

Be sure you have React Native, expo, and your simulator of choice installed.

### Installation

1. Fork and clone this repo

2. In your terminal, enter:

```
npm install
```

3. (To run the simulator the app), enter:

```
npm start
```

## App Structure

The app has the following component hierarchy and navigation structure:

![Component Hierarchy](./scnreenshots/App_Component_Hierarchy.png?raw=true "Component Hierarchy")

App toggles between LoginStackNavigator and MainTabNavigator based on the value of isSignedIn, a field in App's state. Once a user is logged-in, isSignedIn will be set to true, and MainTabNavigator will load. Once MainTabNavigator is loaded, the user can toggle between the PostContainer and AccountStackNavigator.

PostContainer is where any API calls to, in this case posts, should go. PostStackNavigator renders PostList by default, but clicking on any post will bring up the post show page. Navigating to AccountStackNavigator allows the user to logout, which sets isSignedIn to false, and renders LoginStackNavigator.

## Usage

The
