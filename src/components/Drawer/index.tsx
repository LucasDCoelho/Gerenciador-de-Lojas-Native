import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "@expo/vector-icons/FontAwesome";
import { TabNavigate } from "../Tabs";

import Dasboard from "../../screens/dasboard";

export const DrawerNavigate = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{ title: "" }}>
      <Drawer.Screen
        name="route"
        component={TabNavigate}
        options={{
          drawerLabel: "Tela Inicial",
          drawerIcon: ({ size, color }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="dasboard"
        component={Dasboard}
        options={{
          drawerLabel: "Dasboard",
          drawerIcon: ({ size, color }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
