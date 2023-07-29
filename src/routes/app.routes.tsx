import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DrawerNavigate } from "./Drawer";
import Login from "../screens/login";
import { Event } from "../screens/home/event";
import { AuthProvider, useAuth } from "../hooks/useAuth";

const Stack = createNativeStackNavigator();

const PrivateRoute = () => {
  const { user } = useAuth()

  return (
    <Stack.Navigator
      initialRouteName={user ? "home" : "login"}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen  name="login">
        {()=> <Login />}
      </Stack.Screen>
      
      <Stack.Screen component={DrawerNavigate} name="home" />
      <Stack.Screen
        component={Event}
        name="events"
        
        options={{animation: "slide_from_bottom" }}
      />
    </Stack.Navigator>
  );
}

export const Routes = () => {
  return(
    <AuthProvider>
      <Stack.Navigator
        initialRouteName="PrivateRoute"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="PrivateRoute" component={PrivateRoute}/>
      </Stack.Navigator>
    </AuthProvider>
  );

};
