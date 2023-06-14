import { createDrawerNavigator } from "@react-navigation/drawer";
import { TabNavigate } from "../Tabs";

import Home from "../../screens/Home";


export const DrawerNavigate = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="App" component={TabNavigate} />
      <Drawer.Screen name="Config" component={Home} />
    </Drawer.Navigator>
  );
};
