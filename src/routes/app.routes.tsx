import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// layout
import { DrawerNavigate } from "./drawer.routes";
// screens
import LoginScreen from "../screens/login";
import { AuthProvider, useAuth } from "../hooks/useAuth";
import EventScreen from "../screens/event";
import { TaskProvider } from "../contexts/taskContext";

const Stack = createNativeStackNavigator();

const PrivateRoute = () => {
  const { user } = useAuth()
  const { Group, Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator initialRouteName={user ? "home" : "login"} screenOptions={{ headerShown: false }}>
      {/* inicial rote */}
      <Screen component={LoginScreen} name="login" />

      {/* drawer routes */}
      <Screen component={DrawerNavigate} name="home" />

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
    </Navigator>
  );
}

export const Routes = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <Stack.Navigator
          initialRouteName="PrivateRoute"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="PrivateRoute" component={PrivateRoute} />
        </Stack.Navigator>
      </TaskProvider>
    </AuthProvider>
  );

};
