import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/login";
import { DrawerNavigate } from "../components/Drawer";
import Shops from "../screens/shops";
import NotFound from "../screens/notFound";

interface Modal {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

type AuthContextType = {
  signedIn: boolean;
  setSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
};
export const EventContext = React.createContext({} as Modal)

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType
);

export const Routes = () => {
  const Stack = createNativeStackNavigator();

  const [signedIn, setSignedIn] = React.useState(true);
  const [isOpenModal, setIsOpenModal] = React.useState(true);

  React.useEffect(() => {
    console.log(signedIn);
  }, [signedIn]);

  return (
    <EventContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      <AuthContext.Provider value={{ signedIn, setSignedIn }}>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{ headerShown: false }}
        >
          {
            signedIn ? (
              <Stack.Group>
                <Stack.Screen component={DrawerNavigate} name="home" />
                <Stack.Screen component={Shops} name="lojas" />
              </Stack.Group>
            ) : (
              <Stack.Group>
                <Stack.Screen component={Login} name="login" />
              </Stack.Group>
            )
          }
          <Stack.Screen component={NotFound} name="notFound" />
        </Stack.Navigator>
      </AuthContext.Provider>
    </EventContext.Provider>
  );
};
