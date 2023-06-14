import Home from "../screens/home";
import Profile from "../screens/profile";
import Settings from "../screens/Settings";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

const DrawerNavigate = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="profile" component={Profile} />
    </Drawer.Navigator>
  );
};
const TabsNavigate = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home}/>
      <Tab.Screen name="profile" component={Profile}/>
    </Tab.Navigator>
  );
};

export const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Stack.Screen  name="draw" component={DrawerNavigate}/>
      <Stack.Screen name="tabs" component={TabsNavigate}/>
      <Stack.Screen name="settings" component={Settings} />
    </Stack.Navigator>
  );
};
