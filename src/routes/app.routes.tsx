import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DrawerNavigate } from "./Drawer";

import Login from "../screens/login";
import Shops from "../screens/shops";

interface Modal {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EventContext = React.createContext({} as Modal);

export const Routes = () => {
  const Stack = createNativeStackNavigator();
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  return (
    <EventContext.Provider value={{ isOpenModal, setIsOpenModal }}>
        <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
          <Stack.Group>
            <Stack.Screen component={DrawerNavigate} name="home" />
            <Stack.Screen component={Shops} name="lojas" />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen component={Login} name="login" />
          </Stack.Group>
        </Stack.Navigator>
    </EventContext.Provider>
  );
};
