import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DrawerNavigate } from "./Drawer";
import Login from "../screens/login";
import { Event } from "../screens/home/event";

export const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Login} name="login" />
      <Stack.Screen component={DrawerNavigate} name="home" />
      <Stack.Screen
        component={Event}
        name="events"
        
        options={{animation: "slide_from_bottom" }}
      />
    </Stack.Navigator>
  );
};
