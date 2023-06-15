import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/login";
import { DrawerNavigate } from "../components/Drawer";

export const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={Login} name="login"/>
      <Stack.Screen component={DrawerNavigate} name="home" />
    </Stack.Navigator>
  );
};
