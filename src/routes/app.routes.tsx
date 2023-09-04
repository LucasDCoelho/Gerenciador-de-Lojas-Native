import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// layout
import { DrawerNavigate } from "./drawer.routes";
// screens
import Login from "../screens/login";
import EventScreen from "../screens/Event";
import ShopScreen from "../screens/Shops";

export const Routes = () => {
  const { Group, Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator initialRouteName="home" screenOptions={{
      headerShown: false,
      statusBarTranslucent: true,
    }}>
      {/* inicial rote */}
      <Screen component={Login} name="login" />

      {/* drawer routes */}
      <Screen 
        component={DrawerNavigate} 
        name="home" 
      />

      {/* others screens */}
      <Screen
        component={EventScreen}
        name="events"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#881337"
          },
          animation: "slide_from_bottom",
          gestureEnabled: true,
          presentation: "transparentModal",
        }}
      />

      <Screen
        component={ShopScreen}
        name="shop"

      />
    </Navigator>
  );
};
