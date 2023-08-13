import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// layout
import { DrawerNavigate } from "./drawer.routes";
// screens
import Login from "../screens/login";
import EventScreen from "../screens/event";
import { TaskProvider } from "../contexts/taskContext";

export const Routes = () => {
  const { Group, Navigator, Screen } = createNativeStackNavigator();
  return (
    <TaskProvider>
      <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
        {/* inicial rote */}
        <Screen component={Login} name="login" />

        {/* drawer routes */}
        <Screen component={DrawerNavigate} name="home" />

        {/* others screens */}
        <Screen
          component={EventScreen}
          name="events"
          options={{
            animation: "slide_from_bottom",
            gestureEnabled: true,
            presentation: "transparentModal",
          }}
        />
      </Navigator>
    </TaskProvider>
  );
};
