import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "@expo/vector-icons/FontAwesome";

import { CustomDrawer } from "./customDrawer";
import { HeaderDrawer } from "./headerDrawer";

import { TabNavigate } from "../Tabs";
import Dasboard from "../../screens/dasboard";

export const DrawerNavigate = () => {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="route"
      screenOptions={{
        title: "",
        drawerInactiveTintColor: '#fff',
        drawerStyle: {
          backgroundColor: '#1e293b'
        },
        headerStyle: {
          backgroundColor: '#881337'
        },
        headerRight: HeaderDrawer,
      }
      }
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="route"
        component={TabNavigate}
        options={{
          drawerLabel: "Pagina Inicial",
          drawerLabelStyle: { marginLeft: -20 },
          drawerActiveBackgroundColor: "#881337",
          drawerActiveTintColor: "#ffffff",
          drawerIcon: ({ size, color }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="dasboard"
        component={Dasboard}
        options={{
          drawerLabel: "Dashboard",
          drawerLabelStyle: { marginLeft: -20 },
          drawerActiveBackgroundColor: "#881337",
          drawerActiveTintColor: "#ffffff",
          drawerIcon: ({ size, color }) => (
            <Icon name="bar-chart" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
