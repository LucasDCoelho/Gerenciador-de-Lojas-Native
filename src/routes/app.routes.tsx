import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Settings from "../screens/Settings";

export const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={Settings} name="Home" />
    </Stack.Navigator>
  );
};
