import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  TransitionSpecs,
  TransitionPresets,
} from "@react-navigation/stack";

const AppStack = createStackNavigator();


import Schedule from "./pages/Schedule";
import TodoList from "./pages/TodoList";
import Welcome from "./pages/Welcome";
import Timer from "./pages/Timer";
import Congrats from "./pages/Congrats";

function Routes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open:
            Platform.OS === "ios"
              ? TransitionSpecs.TransitionIOSSpec
              : TransitionSpecs.FadeInFromBottomAndroidSpec,
          close:
            Platform.OS === "ios"
              ? TransitionSpecs.TransitionIOSSpec
              : TransitionSpecs.FadeOutToBottomAndroidSpec,
        },
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <AppStack.Screen name="Schedule" component={Schedule} />
      <AppStack.Screen name="Welcome" component={Welcome} />
      <AppStack.Screen name="Timer" component={Timer} />
      <AppStack.Screen name="Congrats" component={Congrats} />
    </AppStack.Navigator>
  );
}

export default Routes;
